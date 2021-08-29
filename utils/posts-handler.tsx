import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import slugify from './slugify'
import { truncate } from './string-helper'
import { readingTime } from './reading-time'
import { PostOverviewType } from '../interfaces/PostOverviewType'

const postFileName = 'index.mdx'
const postDirectory = path.join(process.cwd(), 'posts')

export const getAllSlugs = async (): Promise<string[]> => {
    return fs.readdirSync(postDirectory)
}

export const getAllPosts = async () => {
    return (await getAllSlugs())
        .map((dirName) => {
            const slug = slugify(dirName)
            const filePath: string = path.join(postDirectory, dirName, postFileName)
            const fileContents = fs.readFileSync(filePath, 'utf-8')
            const { data, content } = matter(fileContents)
            const timeToRead = readingTime(content)
            return { data, content, slug, timeToRead }
        })
        .sort((a, b) => {
            const aDate = new Date(a.data.date)
            const bDate = new Date(b.data.date)
            return aDate - bDate
        })
        .reverse()
}

export const getPostOverviews = async (): Promise<PostOverviewType[]> => {
    return (await getAllPosts()).map((post) => {
        return {
            date: JSON.stringify(post.data.date),
            tags: post.data.tags,
            title: post.data.title,
            timeToRead: post.timeToRead,
            slug: post.slug,
            overview: truncate(post.content, 250),
            image: path.join('/images/posts', post.slug, post.data.image),
        } as PostOverviewType
    })
}

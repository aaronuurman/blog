import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import slugify from './slugify'
import { PostOverviewType } from '../interfaces/PostOverviewType'
import { truncate } from './string-helper'

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
            return { data, content, slug }
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
            timeToRead: 1,
            slug: post.slug,
            overview: truncate(post.content, 250),
            image: path.join('/images/posts', post.slug, post.data.image),
        } as PostOverviewType
    })
}

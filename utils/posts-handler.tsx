import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { format } from 'date-fns'

import slugify from './slugify'
import { truncate } from './string-helper'
import { readingTime } from './reading-time'
import { PostType } from '@/interfaces/PostType'
import { PostOverviewType } from '@/interfaces/PostOverviewType'
import { PostDataType } from '@/interfaces/PostDataType'

const postFileName = 'index.mdx'
const postDirectory = path.join(process.cwd(), 'posts')

export const getAllSlugs = async (): Promise<string[]> => {
    return fs.readdirSync(postDirectory)
}

export const getAllPosts = async (): Promise<PostType[]> => {
    return (await getAllSlugs())
        .map((dirName: string) => {
            const slug = slugify(dirName)
            const filePath: string = path.join(postDirectory, dirName, postFileName)
            const fileContents = fs.readFileSync(filePath, 'utf-8')
            const { data, content } = matter(fileContents)
            return {
                data: {
                    date: format(data.date, 'MMM dd yyyy'),
                    tags: data.tags,
                    title: data.title,
                    timeToRead: readingTime(content),
                    slug: slug,
                    overview: truncate(content, 250),
                    image: path.join('/images/posts', slug ?? '', data.image),
                    resources: data.resources ?? null,
                    author: data.imageAuthor ?? null,
                    provider: data.imageProvider ?? null,
                    published: data.published,
                } as PostDataType,
                content,
            } as PostType
        })
        .filter((post: PostType) => post.data.published)
        .sort((a: PostType, b: PostType) => {
            const aDate = new Date(a.data.date)
            const bDate = new Date(b.data.date)
            return aDate - bDate
        })
        .reverse()
}

export const getPostOverviews = async (): Promise<PostOverviewType[]> => {
    return (await getAllPosts()).map((post: PostType) => {
        return { ...post.data } as PostOverviewType
    })
}

export const getPostBySlug = async (slug: string) => {
    return (await getAllPosts()).find((post: PostType) => post.data.slug === slug)
}

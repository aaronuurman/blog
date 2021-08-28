import React from 'react'
import type { NextPage } from 'next'
import { Articles, PostOverview } from '../components'

import { blogPosts } from '../lib/data'

import spacing from '../styles/spacing.module.css'

const Home: NextPage = () => {
    let title = 'Latest blog posts'
    return (
        <Articles cssClasses={[spacing.p_x_08]}>
            {blogPosts.map((post) => {
                return (
                    <PostOverview
                        key={post.slug}
                        title={post.title}
                        date={post.date}
                        image={post.image}
                        tags={post.tags}
                        overview={post.overview}
                        timeToRead={post.timeToRead}
                        slug={post.slug}
                    />
                )
            })}
        </Articles>
    )
}

export default Home

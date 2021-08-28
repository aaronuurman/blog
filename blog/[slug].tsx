import type { NextPage } from 'next'
import Head from 'next/head'
import { blogPosts } from '../lib/data'

interface Props {
    title?: string
    date?: Date
    content?: string
}

const BlogPage: NextPage<Props> = ({ title, date, content }: Props) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="About" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>{title}</h1>
            </main>
        </div>
    )
}

export async function getStaticProps(context: any) {
    console.log(context)
    return {
        props: {}, // will be passed to the page component as props
    }
}

export async function getStaticPaths() {
    return {
        paths: blogPosts.map((post) => ({
            params: {
                slug: post.slug,
            },
        })),
        fallback: false,
    }
}

export default BlogPage

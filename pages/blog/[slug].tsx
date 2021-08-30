import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import { Tags } from '@/components/Tags'
import { Article } from '@/components/Article'
import { PostType } from '@/interfaces/PostType'
import { SiteHead } from '@/components/SiteHead'
import { Resources } from '@/components/Resources'
import { ImageAuthor } from '@/components/ImageAuthor'
import { getAllSlugs, getPostBySlug } from '@/utils/posts-handler'

import spacing from '@/styles/spacing.module.css'

interface Props {
    post: PostType
}

const BlogPage = ({ post }: Props) => {
    // TODO: Add some commenting system, disqus or something like that.
    return (
        <>
            <SiteHead title={post.data.title} />
            <Article cssClasses={[spacing.p_x_08]}>
                <section>
                    <h1>{post.data.title}</h1>
                    <Tags tags={post.data.tags} />
                </section>
                <section>
                    <ImageAuthor author={post.data.author} provider={post.data.provider} />
                </section>
                <section className={[spacing.m_t_2]}></section>
                <Resources resources={post.data.resources} />
            </Article>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context
    const { slug } = params
    return {
        props: { post: await getPostBySlug(slug) } as Props,
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: (await getAllSlugs()).map((slug: string) => ({
            params: {
                slug: slug,
            },
        })),
        fallback: false,
    }
}

export default BlogPage

import Image from 'next/image'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'

import { Tags } from '@/components/Tags'
import { Modal } from '@/components/Modal'
import { Article } from '@/components/Article'
import { SiteHead } from '@/components/SiteHead'
import { Resources } from '@/components/Resources'
import { ImageAuthor } from '@/components/ImageAuthor'
import { getAllSlugs, getPostBySlug } from '@/utils/posts-handler'

import { PostType } from '@/interfaces/PostType'
import { serialize } from 'next-mdx-remote/serialize'
import { PostDataType } from '@/interfaces/PostDataType'

import spacing from '@/styles/spacing.module.css'
import classes from '@/styles/single-post-template.module.css'

interface Props {
    post: {
        data: PostDataType
        content: MDXRemoteSerializeResult
    }
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
                    <div className={classes.article_cover}>
                        <Image
                            alt={post.data.title}
                            src={post.data.image}
                            layout="fill"
                            objectFit="cover"
                            priority={true}
                        />
                    </div>
                    <ImageAuthor author={post.data.author} provider={post.data.provider} />
                </section>
                <section>
                    <MDXRemote {...post.content} components={{ Modal }} />
                </section>
                <Resources resources={post.data.resources} />
            </Article>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    const { params } = context
    const { slug } = params
    const result: PostType | null = await getPostBySlug(slug)
    return {
        props: { post: { data: result?.data, content: await serialize(result?.content ?? '') } } as Props,
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

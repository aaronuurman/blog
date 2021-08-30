import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPropsContext } from 'next'

import { SiteHead } from '@/components/SiteHead'
import { Articles } from '@/components/Articles'
import { PostOverview } from '@/components/PostOverview'

import { getPostOverviews } from '@/utils/posts-handler'
import { PostOverviewType } from '@/interfaces/PostOverviewType'

import spacing from '../styles/spacing.module.css'

interface Props {
    overviews: PostOverviewType[]
}

// TODO: Create SEO component
const Home: NextPage<Props> = (props) => {
    return (
        <>
            <SiteHead title={'Latest blog posts'} />
            <Articles cssClasses={[spacing.p_x_08]}>
                {props.overviews.map((post: PostOverviewType, index: number) => {
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
                            index={index}
                        />
                    )
                })}
            </Articles>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    return {
        props: { overviews: await getPostOverviews() } as Props,
    }
}

export default Home

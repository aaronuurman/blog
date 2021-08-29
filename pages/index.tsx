import type { NextPage } from 'next'
import { GetStaticProps, GetStaticPropsContext } from 'next'

import { Articles, PostOverview } from '../components'
import { getPostOverviews } from '../utils/posts-handler'
import { PostOverviewType } from '../interfaces/PostOverviewType'

import spacing from '../styles/spacing.module.css'

interface Props {
    overviews: PostOverviewType[]
}

// TODO: Create SEO component
const Home: NextPage<Props> = (props) => {
    let title = 'Latest blog images'
    return (
        <Articles cssClasses={[spacing.p_x_08]}>
            {props.overviews.map((post) => {
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

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    return {
        props: { overviews: await getPostOverviews() } as Props,
    }
}

export default Home

import Link from 'next/link'

import { Tags } from '../Tags'
import { Article } from '../Article'
import { BlogPostOverview } from '../../interfaces'
import { PostOverviewFooter } from '../PostOverviewFooter'

import classes from './postOverview.module.css'
import spacing from '../../styles/spacing.module.css'

interface Props {
    postOverview: BlogPostOverview
}

const PostOverview = ({ postOverview }: Props) => {
    return (
        <Article cssClasses={[classes.postoverview]}>
            <Link href={`/${postOverview.slug}`}>
                <Image className={classes.cover} src={postOverview.image} alt={postOverview.title} />
            </Link>
            <section className={[spacing.p_1]}>
                <Tags tags={postOverview.tags} />
                <Link href={postOverview.slug}>
                    <a>
                        <h2>{postOverview.title}</h2>
                        <p>{postOverview.overview}</p>
                    </a>
                </Link>
            </section>
            <PostOverviewFooter date={postOverview.date} timeToRead={postOverview.timeToRead} />
        </Article>
    )
}

export default PostOverview

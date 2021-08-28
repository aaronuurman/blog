import Link from 'next/link'

import { Tags } from '../Tags'
import { Article } from '../Article'
import { PostOverviewFooter } from '../PostOverviewFooter'
import { DateType, ImageType, OverviewType, SlugType, TimeToReadType, TitleType } from '../../interfaces'

import classes from './postOverview.module.css'
import spacing from '../../styles/spacing.module.css'

interface Props extends DateType, TimeToReadType, Tags, SlugType, TitleType, OverviewType, ImageType {}

const PostOverview = ({ date, timeToRead, tags, slug, title, overview, image }: Props) => {
    return (
        <Article cssClasses={[classes.postoverview]}>
            <Link href={`/${slug}`}>
                <ImageType className={classes.cover} src={image} alt={title} />
            </Link>
            <section className={[spacing.p_1]}>
                <Tags tags={tags} />
                <Link href={`/${slug}`}>
                    <a>
                        <h2>{title}</h2>
                        <p>{overview}</p>
                    </a>
                </Link>
            </section>
            <PostOverviewFooter date={date} timeToRead={timeToRead} />
        </Article>
    )
}

export default PostOverview

import Link from 'next/link'
import Image from 'next/image'

import { Tags } from '@/components/Tags'
import { Article } from '@/components/Article'
import { PostOverviewType } from '@/interfaces/PostOverviewType'
import { PostOverviewFooter } from '@/components/PostOverviewFooter'

import classes from './postOverview.module.css'
import spacing from '@/styles/spacing.module.css'

const PostOverview = ({ date, timeToRead, tags, slug, title, overview, image }: PostOverviewType) => {
    return (
        <Article cssClasses={[classes.postoverview]}>
            <Link href={`/blog/${slug}`}>
                <a>
                    <div className={classes.cover}>
                        <Image alt={title} src={image} layout="fill" objectFit="cover" />
                    </div>
                </a>
            </Link>
            <section className={[spacing.p_1]}>
                <Tags tags={tags} />
                <Link href={`/blog/${slug}`}>
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

import Link from 'next/link'

import { LinksType } from '../../interfaces'
import extractHost from '../../utils/url-helper'

import classes from './socialMedia.module.css'

const SocialMedia = ({ links }: LinksType) => {
    return (
        <ul className={classes.socialmedia}>
            {links.map((link: string, index: number) => {
                const text: string | null = extractHost(link)
                return (
                    <li key={index}>
                        <Link href={`${link}`}>
                            <a className={classes[text]} target="blank">
                                <i className={`fa fa-lg fa-${text}`} />
                            </a>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default SocialMedia

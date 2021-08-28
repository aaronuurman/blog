import extractHost from '../../utils/url-helper'
import { LinksType } from '../../interfaces'

import classes from './socialMedia.module.css'

const SocialMedia = ({ links }: LinksType) => {
    // TODO: Use Next.js Link here
    return (
        <ul className={classes.socialmedia}>
            {links.map((link: string, index: number) => {
                const text: string | null = extractHost(link)
                return (
                    <li key={index}>
                        <a className={classes[text]} href={`${link}`} target="blank">
                            <i className={`fa fa-lg fa-${text}`} />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default SocialMedia

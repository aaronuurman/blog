import { extractHost } from '../../utils'

import classes from './socialMedia.module.css'

interface Props {
    links: string[]
}

const SocialMedia = ({ links }: Props) => {
    // TODO: Use Next.js Link here
    return (
        <ul className={classes.socialmedia}>
            {links.map((link: string, index: number) => {
                const text: string = extractHost(link)
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

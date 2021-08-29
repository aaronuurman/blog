import Link from 'next/link'

import { TitleType, UrlType } from '../../interfaces'

interface Props extends TitleType, UrlType {}

const ExternalLink = ({ url, title }: Props) => {
    return (
        <Link href={url}>
            <a target="_blank">{title}</a>
        </Link>
    )
}

export default ExternalLink

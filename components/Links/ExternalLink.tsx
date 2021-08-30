import Link from 'next/link'

import { UrlType } from '@/interfaces/UrlType'
import { TitleType } from '@/interfaces/TitleType'

interface Props extends TitleType, UrlType {}

const ExternalLink = ({ url, title }: Props) => {
    return (
        <Link href={url}>
            <a target="_blank">{title}</a>
        </Link>
    )
}

export default ExternalLink

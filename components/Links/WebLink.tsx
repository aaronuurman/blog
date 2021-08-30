import Link from 'next/link'

import { UrlType } from '@/interfaces/UrlType'
import { TitleType } from '@/interfaces/TitleType'

interface Props extends TitleType, UrlType {}

const WebLink = ({ url, title }: Props) => {
    return (
        <Link href={url}>
            <a>{title}</a>
        </Link>
    )
}

export default WebLink

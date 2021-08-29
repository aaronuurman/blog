import Link from 'next/link'

import { LayoutType, TitleType, UrlType } from '../../interfaces'

interface Props extends TitleType, UrlType {}

const WebLink = ({ url, title }: Props) => {
    return (
        <Link href={url}>
            <a>{title}</a>
        </Link>
    )
}

export default WebLink

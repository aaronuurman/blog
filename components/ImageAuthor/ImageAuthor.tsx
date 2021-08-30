import { ExternalLink } from '@/components/Links'

import classes from './imageAuthor.module.css'

interface Props {
    author: string
    provider: string
}

const ImageAuthor = ({ author, provider }: Props) => {
    if ((!author || author.length === 0) && (!provider || provider.length === 0)) {
        return null
    }

    if ((!author || author.length === 0) && (provider || provider.length !== 0)) {
        return (
            <div className={[classes.imgprovider]}>
                Photo by: <ExternalLink title={provider[1]} url={provider[0]} />
            </div>
        )
    }

    return (
        <div className={[classes.imgprovider]}>
            Photo by: <ExternalLink title={author[1]} url={author[0]} />/
            <ExternalLink title={provider[1]} url={provider[0]} />
        </div>
    )
}

export default ImageAuthor

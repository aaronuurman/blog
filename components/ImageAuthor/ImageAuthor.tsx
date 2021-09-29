import { ExternalLink } from '@/components/Links'

import { ImageAuthorType } from '@/interfaces/ImageAuthorType'
import { ImageProviderType } from '@/interfaces/ImageProviderType'

import classes from './imageAuthor.module.css'
import spacing from '@/styles/spacing.module.css'

interface Props extends ImageAuthorType, ImageProviderType {}

const ImageAuthor = ({ author, provider }: Props) => {
    if ((!author || author.length === 0) && (!provider || provider.length === 0)) {
        return null
    }

    if ((!author || author.length === 0) && (provider || provider.length !== 0)) {
        return (
            <div className={[classes.imgprovider, spacing.p_y_2].join(' ')}>
                Photo by: <ExternalLink title={provider[0]} url={provider[1]} />
            </div>
        )
    }

    return (
        <div className={[classes.imgprovider, spacing.p_y_2].join(' ')}>
            Photo by: <ExternalLink title={author[0]} url={author[1]} />/
            <ExternalLink title={provider[0]} url={provider[1]} />
        </div>
    )
}

export default ImageAuthor

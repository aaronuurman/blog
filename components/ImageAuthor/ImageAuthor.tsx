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
                Photo by:{' '}
                <a href={provider[1]} target="blank">
                    {provider[0]}
                </a>
            </div>
        )
    }

    return (
        <div className={[classes.imgprovider]}>
            Photo by:{' '}
            <a href={author[1]} target="blank">
                {author[0]}
            </a>{' '}
            /{' '}
            <a href={provider[1]} target="blank">
                {provider[0]}
            </a>
        </div>
    )
}

export default ImageAuthor

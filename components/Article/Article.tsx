import classes from './article.module.css'

interface Props {
    cssClasses: string[]
    children: any
}

const Article = ({ cssClasses, children }: Props) => {
    return <article className={cssClasses.join(' ')}>{children}</article>
}

export default Article

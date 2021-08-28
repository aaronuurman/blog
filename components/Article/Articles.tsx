import classes from './articles.module.css'

interface Props {
    cssClasses: string[]
    children: any
}

const Articles = ({ cssClasses, children }: Props) => {
    return <div className={`${classes.articles} ${cssClasses.join(', ')}`}>{children}</div>
}

export default Articles

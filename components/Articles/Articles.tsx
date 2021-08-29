import classes from './articles.module.css'
import { CssClassesType, LayoutType } from '../../interfaces'

interface Props extends LayoutType, CssClassesType {}

const Articles = ({ cssClasses, children }: Props) => {
    return <div className={`${classes.articles} ${cssClasses.join(', ')}`}>{children}</div>
}

export default Articles

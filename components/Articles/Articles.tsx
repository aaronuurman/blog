import { LayoutType } from '@/interfaces/LayoutType'
import { CssClassesType } from '@/interfaces/CssClassesType'

import classes from './articles.module.css'

interface Props extends LayoutType, CssClassesType {}

const Articles = ({ cssClasses, children }: Props) => {
    return <div className={`${classes.articles} ${cssClasses.join(', ')}`}>{children}</div>
}

export default Articles

import { LayoutType } from '@/interfaces/LayoutType'
import { CssClassesType } from '@/interfaces/CssClassesType'

import classes from './article.module.css'

interface Props extends LayoutType, CssClassesType {}

const Article = ({ cssClasses, children }: Props) => {
    return <article className={[classes.article, ...cssClasses].join(' ')}>{children}</article>
}

export default Article

import classes from './article.module.css'

import { LayoutType, CssClassesType } from '../../interfaces'

interface Props extends LayoutType, CssClassesType {}

const Article = ({ cssClasses, children }: Props) => {
    return <article className={cssClasses.join(' ')}>{children}</article>
}

export default Article

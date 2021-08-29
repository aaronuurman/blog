import { CssClassesType, LayoutType } from '../../interfaces'

import classes from './container.module.css'
import spacing from '../../styles/spacing.module.css'

interface Props extends LayoutType, CssClassesType {}

const Container = ({ cssClasses, children }: Props) => {
    return <div className={`${classes.container} ${spacing.p_x_08} ${cssClasses.join(', ')}`}>{children}</div>
}

export default Container

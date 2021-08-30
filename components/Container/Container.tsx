import { LayoutType } from '@/interfaces/LayoutType'
import { CssClassesType } from '@/interfaces/CssClassesType'

import classes from './container.module.css'

interface Props extends LayoutType, CssClassesType {}

const getClassName = ({ cssClasses }: CssClassesType): string => {
    if (cssClasses) {
        return `${classes.container} ${cssClasses.join(', ')}`
    }
    return `${classes.container}`
}

const Container = ({ cssClasses, children }: Props) => {
    return <div className={getClassName({ cssClasses })}>{children}</div>
}

export default Container

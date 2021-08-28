import classes from './container.module.css'
import spacing from '../../styles/spacing.module.css'

interface Props {
    cssClasses: string[]
    children: any
}
const Container = ({ cssClasses, children }: Props) => {
    return <div className={`${classes.container} ${spacing.p_x_08} ${cssClasses.join(', ')}`}>{children}</div>
}

export default Container

import classes from './footer.module.css'
import spacing from '../../styles/spacing.module.css'

interface Props {
    copyright: string
    children: any
}

const Footer = ({ copyright, children }: Props) => {
    return (
        <footer className={spacing.p_y_2}>
            <div className={[classes.container, spacing.p_x_08].join(' ')}>
                <div>
                    Copyright © {new Date().getFullYear()} {copyright}
                </div>
                {children}
            </div>
        </footer>
    )
}

export default Footer
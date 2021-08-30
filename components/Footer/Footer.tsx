import { LayoutType } from '@/interfaces/LayoutType'
import { CopyrightType } from '@/interfaces/CopyrightType'

import classes from './footer.module.css'
import spacing from '@/styles/spacing.module.css'

interface Props extends LayoutType, CopyrightType {}

const Footer = ({ copyright, children }: Props) => {
    return (
        <footer className={[classes.footer, spacing.p_y_2].join(' ')}>
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

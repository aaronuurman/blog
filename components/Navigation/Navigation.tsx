import { WebLink } from '@/components/Links'
import { DataTestAttribute } from '@/cypress/fixtures/DataTestAttribute'

import classes from './navigation.module.css'
import spacing from '@/styles/spacing.module.css'

interface Props {
    links: string[]
    children?: any
}

const Navigation = ({ links, children }: Props) => {
    return (
        <div className={classes.menuwrap}>
            <input
                aria-label="Toggle main menu"
                type="checkbox"
                className={classes.toggler}
                data-test={DataTestAttribute.burgerBtnToggleMenu}
            />
            <div className={classes.hamburger}>
                <div></div>
            </div>
            <nav data-test={DataTestAttribute.nav}>
                <ul>
                    {links.map((link: string, index: number) => {
                        return (
                            <li className={spacing.p_1} key={index}>
                                <WebLink title={link} url={`/${link}`} />
                            </li>
                        )
                    })}
                </ul>
                {children}
            </nav>
        </div>
    )
}

export default Navigation
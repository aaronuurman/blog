import React from 'react'
import Link from 'next/link'

import classes from './header.module.css'
import spacing from '../../styles/spacing.module.css'

interface Props {
    siteTitle: string
    children: any
}

const Header = ({ siteTitle, children }: Props) => {
    return (
        <header className={classes.header}>
            <div className={[classes.container, spacing.p_x_08].join(' ')}>
                <h2>
                    <Link href="/">
                        <a>{siteTitle}</a>
                    </Link>
                </h2>
                {children}
            </div>
        </header>
    )
}

export default Header

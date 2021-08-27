import React from 'react'
import Link from 'next/link'

import classes from './header.module.css'
import spacing from '../../styles/spacing.module.css'

interface Props {
    siteTitle?: string
    children?: any
}

class Header extends React.Component<Props> {
    static defaultProps = {
        siteTitle: ``,
    }

    render() {
        let {siteTitle, children} = this.props
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
}

export default Header

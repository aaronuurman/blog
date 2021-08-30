import React from 'react'

import { WebLink } from '@/components/Links'
import { TitleType } from '@/interfaces/TitleType'
import { LayoutType } from '@/interfaces/LayoutType'

import classes from './header.module.css'
import spacing from '@/styles/spacing.module.css'

interface Props extends LayoutType, TitleType {}

const Header = ({ title, children }: Props) => {
    return (
        <header className={classes.header}>
            <div className={[classes.container, spacing.p_x_08].join(' ')}>
                <h2>
                    <WebLink title={title} url="/" />
                </h2>
                {children}
            </div>
        </header>
    )
}

export default Header

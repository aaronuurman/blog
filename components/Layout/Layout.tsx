import React from 'react'
import Link from 'next/link'

import { Header } from '../Header'

interface Props {
    children: any
}

let title = 'Aaron Uurman'
const Layout = ({ children }: Props) => {
    return (
        <>
            <Header siteTitle={title}>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Header>
            {children}
        </>
    )
}

export default Layout

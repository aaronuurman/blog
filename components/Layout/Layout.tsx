import { Header } from '../Header'
import { Footer } from '../Footer'
import { Container } from '../Container'
import { Navigation } from '../Navigation'
import { SocialMedia } from '../SocialMedia'

import { LayoutType } from '../../interfaces/LayoutType'

import spacing from '../../styles/spacing.module.css'

let title = 'Aaron Uurman'
let navbar = ['home', 'about']
let socialMedia = [
    'https://twitter.com/aaronuurman',
    'https://www.linkedin.com/in/aaronuurman',
    'https://github.com/aaronuurman',
]
const Layout = ({ children }: LayoutType) => {
    return (
        <>
            <Header title={title}>
                <Navigation links={navbar} />
            </Header>
            <Container cssClasses={[spacing.p_y_2]}>{children}</Container>
            <Footer copyright={title}>
                <SocialMedia links={socialMedia} />
            </Footer>
        </>
    )
}

export default Layout

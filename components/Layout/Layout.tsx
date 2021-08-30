import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import { Navigation } from '@/components/Navigation'
import { SocialMedia } from '@/components/SocialMedia'

import { LayoutType } from '@/interfaces/LayoutType'

let title = 'Aaron Uurman'
// TODO: Read navigation from config
let navbar = ['home', 'about']

// TODO: Read social media links from config
let socialMedia = [
    'https://twitter.com/aaronuurman',
    'https://www.linkedin.com/in/aaronuurman',
    'https://github.com/aaronuurman',
]
const Layout = ({ children }: LayoutType) => {
    return (
        <div className="wrapper">
            <Header title={title}>
                <Navigation links={navbar} />
            </Header>
            <Container>{children}</Container>
            <Footer copyright={title}>
                <SocialMedia links={socialMedia} />
            </Footer>
        </div>
    )
}

export default Layout

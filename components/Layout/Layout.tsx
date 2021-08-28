import { Header } from '../Header'
import { Footer } from '../Footer'
import { Container } from '../Container'
import { Navigation } from '../Navigation'
import { SocialMedia } from '../SocialMedia'

import spacing from '../../styles/spacing.module.css'

interface Props {
    children: any
}

let title = 'Aaron Uurman'
let navbar = ['home', 'about']
let socialMedia = []
const Layout = ({ children }: Props) => {
    return (
        <>
            <Header siteTitle={title}>
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

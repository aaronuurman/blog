import React from 'react'
import PropTypes from 'prop-types'

import {Footer} from '../Footer'
import {Header} from '../Header'
import {Container} from '../Container'
import {Navigation} from '../Navigation'
import {SocialMedia} from '../SocialMedia'

import {useSiteMetadata} from '../../hooks'

import '../../styles/main.css'
import spacing from '../../styles/spacing.module.css'

const Layout = ({children}) => {
  const {title, navbar, socialMedia} = useSiteMetadata()

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

import React from 'react'
import GlobalStyle from '../../styles/GlobalStyle'
import Navigation from '../Navigation'
import Footer from '../Footer'
import Page from '../Page'
import Divider from '../Divider'
import { Dataset } from '../../dataset'
import { Kernels, Network, Algorithm } from '../../settings'
import { Evolution } from '../../evolution'

const Body = () => {
  return (
    <>
      <GlobalStyle />
      <Navigation handleMenuToggle={console.log} />
      <Page>
        <Dataset />
        <div css="grid-column-start: span 4;">
          <Divider />
        </div>
        <Evolution />
        <Kernels />
        <Network />
        <Algorithm />
      </Page>
      <Footer />
    </>
  )
}

export default Body

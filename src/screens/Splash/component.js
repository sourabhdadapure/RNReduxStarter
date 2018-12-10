import React from 'react'
import styled from 'styled-components'
import Buttons from './Buttons'
import Header from './Header'

const Wrapper = styled.View`
  flex: 1;
  justify-content: space-between;
  background-color: royalblue;
`

const Splash = ({ navigateTo }) => (
  <Wrapper>
    <Header />
    <Buttons navigateTo={navigateTo} />
  </Wrapper>
)

export default Splash

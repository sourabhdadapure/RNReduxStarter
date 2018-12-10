import React from 'react'
import styled from 'styled-components'
import { Button } from '../../components'

const Wrapper = styled.View`
  bottom: 100;
`

const Buttons = ({ navigateTo }) => (
  <Wrapper>
    <Button title="Log In" onPress={() => navigateTo('LogIn')} />
    <Button title="Sign Up" onPress={() => navigateTo('SignUp')} />
  </Wrapper>
)

export default Buttons

import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-native-elements'

const Wrapper = styled.View``

const StyledButton = styled(Button)``

const Buttons = () => (
  <Wrapper>
    <StyledButton title="Log In" />
    <StyledButton title="Sign Up" />
  </Wrapper>
)

export default Buttons

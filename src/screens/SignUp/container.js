import React from 'react'
import styled from 'styled-components'
import SignUp from './component'

const Wrapper = styled.View`
  flex: 1;
`

const SignUpContainer = () => (
  <Wrapper>
    <SignUp />
  </Wrapper>
)

export default SignUpContainer

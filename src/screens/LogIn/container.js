import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.View`
  flex: 1;
`

const Text = styled.Text`
  color: red;
`

const LogIn = () => (
  <Wrapper>
    <Text>Log In</Text>
  </Wrapper>
)

export default LogIn

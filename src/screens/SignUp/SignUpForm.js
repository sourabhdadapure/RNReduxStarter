import React from 'react'
import styled from 'styled-components'
import { Input } from '../../components'
import PropTypes from 'prop-types'

const Wrapper = styled.View`
  margin-horizontal: 5%;
`

export default class SignUpForm extends React.Component {
  render() {
    return (
      <Wrapper>
        <Input
          label="Email"
          iconSource={require('../../res/images/email.png')}
        />
        <Input label="Password" />
        <Input label="Confirm Password" />
        <Input label="Phone Number" keyboardType="numeric" />
      </Wrapper>
    )
  }
}

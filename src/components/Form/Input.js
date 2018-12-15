import React from 'react'
import { Image } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Item, Input, Label } from 'native-base'

const Wrapper = styled.View``

export default class RenderInput extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    iconSource: PropTypes.node
  }

  render() {
    const { label, iconSource } = this.props
    return (
      <Wrapper>
        <Item floatingLabel>
          <Label>{label}</Label>
          <Input
            style={{
              marginLeft: -4
            }}
          />
          <Image source={iconSource} style={{ width: 25, height: 25 }} />
        </Item>
      </Wrapper>
    )
  }
}

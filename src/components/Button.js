import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button, Text } from 'native-base'

const StyledButton = styled(Button)`
  background-color: cornflowerblue;
  width: 90%;
  height: 50;
  justify-content: center;
  align-self: center;
`

const ButtonComponent = ({ title, onPress, loading }) => (
  <StyledButton onPress={onPress}>
    {loading ? <ActivityIndicator color="white" /> : <Text>{title}</Text>}
  </StyledButton>
)

ButtonComponent.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  loading: PropTypes.bool
}

export default ButtonComponent

import React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'

const SplashComponent = () => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <Text> Welcome!!! </Text>
    <Button title="Queue" />
  </View>
)

export default SplashComponent

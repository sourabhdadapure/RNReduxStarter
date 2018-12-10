import React from 'react'
import Splash from './component'

class SplashContainer extends React.Component {
  navigateTo = screen => {
    this.props.navigation.navigate(screen)
  }
  render() {
    return <Splash navigateTo={this.navigateTo} />
  }
}
export default SplashContainer

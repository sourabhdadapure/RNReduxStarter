import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Splash } from './screens'

const AppStack = createStackNavigator({
  Splash: { screen: Splash }
})
const App = createAppContainer(AppStack)
export default App

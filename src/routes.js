import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Splash, LogIn, SignUp } from './screens'

const AppStack = createStackNavigator({
  Splash: { screen: Splash },
  LogIn: { screen: LogIn },
  SignUp: { screen: SignUp }
})
const App = createAppContainer(AppStack)
export default App

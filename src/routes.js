import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import { Splash, LogIn, SignUp } from './screens'

import configureStore from './config/configureStore'

const store = configureStore()

const AppStack = createStackNavigator({
    Splash: { screen: Splash },
    LogIn: { screen: LogIn },
    SignUp: { screen: SignUp }
})
const App = createAppContainer(AppStack)

export default class Routes extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

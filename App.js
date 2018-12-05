import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './src/reducers'
import Mode from './src/screens/Mode'
import Nav from './src/nav/Navigation'

const store = createStore(reducers)

const App = props => (
  <Provider store={store}>
    <Nav />
  </Provider>
)

export default App
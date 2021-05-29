import React from 'react'
import Counter from './components/Counter'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { counterReducer } from './store/reducers'


const store = createStore(counterReducer)


export const App = () => (
  <Provider store={store}>
     <Counter/>
    
  </Provider>
  
)


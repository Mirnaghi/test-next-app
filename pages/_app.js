import '../styles/globals.css'
import App from 'next/app'
import React from 'react'
import {createWrapper} from 'next-redux-wrapper'
import store from '../redux'
import {Provider} from 'react-redux'

class MyApp extends App{
  render(){
    const { Component, pageProps } = this.props

    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>);
  }
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)

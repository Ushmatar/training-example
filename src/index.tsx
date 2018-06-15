import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import { RootApp } from './routers'
import { configureStore } from './store'

import '../assets/sass/index.scss'

const store = configureStore()

const renderApp = (Root: () => JSX.Element) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Root />
      </Provider>
    </AppContainer>,
    document.getElementById('project-mount')
  )
}

renderApp(RootApp)

if ((module as any).hot) {
  ;(module as any).hot.accept('./routers', () =>
    renderApp(require('./routers').RootApp)
  )
}

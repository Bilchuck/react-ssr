import qs from 'qs' // Add this at the top of the file
import { renderToString } from 'react-dom/server'
import App from './app/containers/app'
import { reducer } from './app/reducers'
import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

export const handleRender = (req, res) => {
  // Read the counter from the request, if provided
  // const params = qs.parse(req.query)
  // const counter = parseInt(params.counter, 10) || 0

  // Compile an initial state
  let preloadedState = { status: 'Redux state from backend is here' }

  // Create a new Redux store instance
  const store = createStore(reducer, preloadedState)

  // Render the component to a string
  const html = renderToString(
      <App store={store}/>
  )

  // Grab the initial state from our Redux store
  const finalState = store.getState()

  // Send the rendered page back to the client
  res.send(renderFullPage(html, finalState))
}


const renderFullPage = (html, preloadedState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `
}
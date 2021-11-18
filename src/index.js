import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {App} from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { TagContextProvider } from './lib/TagContextProvider'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
    <TagContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </TagContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

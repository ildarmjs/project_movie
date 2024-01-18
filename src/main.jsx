import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './assets/styles/global.scss'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'
import Context from './utils/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<BrowserRouter>
			<Context>
				<App />
			</Context>
		</BrowserRouter>
	</Provider>
)

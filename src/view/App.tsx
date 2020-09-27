import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import { Provider } from 'react-redux'
import theme from './themeConfig'
import store from '../storage/store'
import Frame from './Frame/Frame'

const App = (): React.ReactElement => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex' }}>
                <Frame />
            </div>
        </ThemeProvider>
    </Provider>
)

export default App

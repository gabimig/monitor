import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './Home/Home'
import theme from './themeConfig'
import Header from './Header/Header'
import SideMenu from './SideMenu/SideMenu'
import Report from './Report/Report'
import Settings from './Settings/Settings'
import store from '../storage/store'

const useStyles = makeStyles((th: Theme) => createStyles({
    content: {
        flexGrow: 1,
        paddingLeft: theme.spacing(10),
        paddingTop: theme.spacing(8),
        position: 'absolute',
        left: 0,
        width: '100%',

    },
    toolbar: th.mixins.toolbar,
}))
const App = (): React.ReactElement => {
    const [sideBarOpen, setSidebarOpen] = useState<boolean>(false)
    const classes = useStyles()

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div style={{ display: 'flex' }}>
                    <BrowserRouter>
                        <Header handleMenuClick={() => setSidebarOpen(!sideBarOpen)} />
                        <SideMenu />
                        <div className={classes.content}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/Report" component={Report} />
                                <Route exact path="/Settings" component={Settings} />
                            </Switch>
                        </div>

                    </BrowserRouter>
                </div>
            </ThemeProvider>
        </Provider>
    )
}

export default App

import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core'
import {
    BrowserRouter, Link, Route, Switch,
} from 'react-router-dom'
import { Provider } from 'react-redux'
import {
    Home as HomeIcon,
    Report as ReportIcon,
    Settings as SettingsIcon,
} from '@material-ui/icons'
import SideMenu, { MenuItem } from 'folding-side-menu'
import Home from './Home/Home'
import theme from './themeConfig'
import Header from './Header/Header'
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
    linkText: {
        color: 'inherit',
        textDecoration: 'none',
    },
}))
const App = (): React.ReactElement => {
    const [sideBarOpen, setSidebarOpen] = useState<boolean>(false)
    const classes = useStyles()
    const menuItems: MenuItem[] = [
        {
            text: 'Main',
            icon: <HomeIcon fontSize="large" />,
            rootingElement: ({ children }: {children: React.ReactElement}) => (
                <Link className={classes.linkText} to="/">
                    {children}
                </Link>
            ),
        },
        {
            text: 'Reports',
            icon: <ReportIcon fontSize="large" />,
            rootingElement: ({ children }: {children: React.ReactElement}) => (
                <Link className={classes.linkText} to="/Report">
                    {children}
                </Link>
            ),
        },
        {
            text: 'Settings',
            icon: <SettingsIcon fontSize="large" />,
            rootingElement: ({ children }: {children: React.ReactElement}) => (
                <Link className={classes.linkText} to="/Settings">
                    {children}
                </Link>
            ),
        },
    ]

    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <div style={{ display: 'flex' }}>
                    <BrowserRouter>
                        <Header handleMenuClick={() => setSidebarOpen(!sideBarOpen)} />
                        <SideMenu menuItems={menuItems} />
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

import {
    createStyles, Grid, makeStyles, Theme,
} from '@material-ui/core'
import SideMenu, { MenuItem } from 'folding-side-menu'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
    BrowserRouter, Link, Route, Switch,
} from 'react-router-dom'
import {
    Home as HomeIcon,
    Report as ReportIcon,
    Settings as SettingsIcon,
} from '@material-ui/icons'
import Home from '../Home/Home'
import Report from '../Report/Report'
import Settings from '../Settings/Settings'
import useRealtimeData from '../Shared/useRealtimeData'
import Header from '../Header/Header'

const useStyles = makeStyles((theme: Theme) => createStyles({
    content: {
        flexGrow: 1,
        paddingLeft: theme.spacing(10),
        paddingTop: theme.spacing(8),
        position: 'absolute',
        left: 0,
    },
    toolbar: theme.mixins.toolbar,
    linkText: {
        color: 'inherit',
        textDecoration: 'none',
    },
}))
const Frame = (): React.ReactElement => {
    const [sideBarOpen, setSidebarOpen] = useState<boolean>(false)
    const classes = useStyles()
    const dispatch = useDispatch()
    useRealtimeData(dispatch)
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
        <BrowserRouter>
            <Header handleMenuClick={() => setSidebarOpen(!sideBarOpen)} />
            <SideMenu menuItems={menuItems} />
            <Grid container className={classes.content}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Report" component={Report} />
                    <Route exact path="/Settings" component={Settings} />
                </Switch>
            </Grid>
        </BrowserRouter>
    )
}

export default Frame

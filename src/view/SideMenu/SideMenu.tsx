import React from 'react'
import clsx from 'clsx'
import {
    createStyles,
    Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme,
} from '@material-ui/core'
import { Home, Report, Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => createStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        overflowX: 'hidden',
        width: theme.spacing(10) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7em',
        justifyContent: 'center',
    },
    toolbar: theme.mixins.toolbar,
    linkText: {
        color: 'inherit',
        textDecoration: 'none',
    },
}))

const SideMenu = (): React.ReactElement => {
    const classes = useStyles()
    const [sideBarOpen, setSidebarOpen] = React.useState(false)

    const HandleSideBarOnMouseEnter = () => {
        setSidebarOpen(true)
    }

    const HandleSideBarOnMouseLeave = () => {
        setSidebarOpen(false)
    }
    return (
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
              [classes.drawerOpen]: sideBarOpen,
              [classes.drawerClose]: !sideBarOpen,
          })}
          classes={{
              paper: clsx({
                  [classes.drawerOpen]: sideBarOpen,
                  [classes.drawerClose]: !sideBarOpen,
              }),
          }}
          onMouseEnter={HandleSideBarOnMouseEnter}
          onMouseLeave={HandleSideBarOnMouseLeave}
        >
            <div id="Prueba" className={classes.toolbar} />
            <List>
                <Link to="/" className={classes.linkText}>
                    <ListItem button>
                        <ListItemIcon><Home fontSize="large" /></ListItemIcon>
                        <ListItemText primary="Main" />
                    </ListItem>
                </Link>
                <Link to="/Report" className={classes.linkText}>
                    <ListItem button>
                        <ListItemIcon><Report fontSize="large" /></ListItemIcon>
                        <ListItemText primary="Reports" />
                    </ListItem>
                </Link>
                <Link to="/Settings" className={classes.linkText}>
                    <ListItem button>
                        <ListItemIcon><Settings fontSize="large" /></ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
                </Link>
            </List>
        </Drawer>
    )
}

export default SideMenu

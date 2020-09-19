import React from 'react'
import {
    AppBar, Button, IconButton, Toolbar, Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        // zIndex: theme.zIndex.drawer + 1,
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
}))

// type envetF = {handleMenuClick(e: any):void}

interface SideMenuType {
    handleMenuClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
}

const Header = ({ handleMenuClick }: SideMenuType): React.ReactElement => {
    const classes = useStyles()
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuClick}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Aplication Inicial
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header

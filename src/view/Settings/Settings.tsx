import React from 'react'
import { Grid } from '@material-ui/core'

import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'
import { sessionInfoSelector } from '../../storage/testSlice'

const useStyles = makeStyles(() => createStyles({
    container: {
        width: '100%',
    },
    placeHolder: {
        textAlign: 'center',
    },
}))

const Settings = (): React.ReactElement => {
    const classes = useStyles()
    const testState = useSelector(sessionInfoSelector)

    return (
        <Grid container>
            <Grid item xs={12} className={classes.placeHolder}>
                <h2>Settings Page Placeholder:<br />state= {testState}</h2>
            </Grid>
        </Grid>
    )
}

export default Settings

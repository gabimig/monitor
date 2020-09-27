import React from 'react'
import { Button, Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import PaperLabeled from 'paperlabeled-material-ui'
import { metricsSelector, setMetrics } from '../../storage/metricsSlice'

const useStyles = makeStyles(() => createStyles({
    container: {
        width: '100%',
    },
    placeHolder: {
        textAlign: 'center',
    },
    labelStyle: { marginTop: -43 },
}))

const Report = (): React.ReactElement => {
    const classes = useStyles()
    const dispatch = useDispatch()

    return (
        <Grid container justify="center">
            <Grid item xs={12} className={classes.placeHolder}>
                <h2>Report Page Placeholder:</h2>
            </Grid>
        </Grid>
    )
}

export default Report

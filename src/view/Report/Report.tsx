import React from 'react'
import {
    Button, Grid, Paper,
} from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { sessionInfoSelector, setState } from '../../storage/testSlice'

const useStyles = makeStyles(() => createStyles({
    container: {
        width: '100%',
    },
    placeHolder: {
        textAlign: 'center',
    },
}))

const Report = (): React.ReactElement => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const testState = useSelector(sessionInfoSelector)
    const handleOnChange = (value: string) => () => {
        dispatch(setState(value))
    }

    return (
        <Grid container justify="center">
            <Grid item xs={12} className={classes.placeHolder}>
                <h2>Report Page Placeholder:<br />state= {testState}</h2>
            </Grid>
            <Grid item xs={4} className={classes.placeHolder}>
                <Paper>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <Button color="primary" variant="contained" onClick={handleOnChange('report-state 1')}>
                                ReportState 1
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button color="secondary" variant="contained" onClick={handleOnChange('report-state 2')}>
                                ReportState 2
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={handleOnChange('report-state 3')}>
                                ReportState 3
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Report

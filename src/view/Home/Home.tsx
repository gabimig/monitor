import React from 'react'
import { Grid, TextField } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useSelector, useDispatch } from 'react-redux'
import { sessionInfoSelector, setState } from '../../storage/testSlice'

const useStyles = makeStyles(() => createStyles({
    container: {
        width: '100%',
    },
    placeHolder: {
        textAlign: 'center',
    },
}))

const Home = (): React.ReactElement => {
    const classes = useStyles()
    const dispatch = useDispatch()
    const testState = useSelector(sessionInfoSelector)
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setState(e.target.value))
    }

    return (
        <Grid container>
            <Grid item xs={12} className={classes.placeHolder}>
                <h2>Home Page Placeholder:<br />state= {testState}</h2>
            </Grid>
            <Grid item xs={12} className={classes.placeHolder}>
                <TextField label="State" value={testState} onChange={handleOnChange} />
            </Grid>
        </Grid>
    )
}

export default Home

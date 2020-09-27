import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const Value = ({ label, value }: { label: string, value: string }) => (
    <Typography variant="body1" component="div" style={{ paddingLeft: '1em' }} gutterBottom>
        <span style={{ fontWeight: 'bold' }}>{label}</span>: {value}
    </Typography>
)
const CurrentOrder = (): React.ReactElement => (
    <Grid container spacing={2}>
        <Grid item xs={6}>
            <Value label="Lot" value="LT00319" />
        </Grid>
        <Grid item xs={6}>
            <Value label="Product" value="Pro 12 (X)" />
        </Grid>
        <Grid item xs={6}>
            <Value label="Client" value="IndustryA" />
        </Grid>
        <Grid item xs={6}>
            <Value label="Weight (Tons)" value="150.6" />
        </Grid>
    </Grid>
)

export default CurrentOrder

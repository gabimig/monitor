import {
    createStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead,
    TableRow, Theme, withStyles,
} from '@material-ui/core'
import React from 'react'

const StyledTableCell = withStyles((theme: Theme) => createStyles({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell)

const items = [
    {
        lot: 'LT00320', product: 'CF', client: 'IndustrialY', weight: 12.55,
    },
    {
        lot: 'LT00321', product: 'X', client: 'FactoryA', weight: 9.6,
    },
    {
        lot: 'LT00322', product: 'CF', client: 'IndustrialY', weight: 10.62,
    },
    {
        lot: 'LT00323', product: 'CF', client: 'BuiderZ', weight: 14.33,
    },
    {
        lot: 'LT00324', product: 'X', client: 'IndustrialY', weight: 5.6,
    },
]

const FactoryPlan = (): React.ReactElement => (
    <TableContainer component={Paper}>
        <Table size="small">
            <TableHead>
                <TableRow style={{ width: '100%' }}>
                    <StyledTableCell align="center">Lot</StyledTableCell>
                    <StyledTableCell align="center">Product</StyledTableCell>
                    <StyledTableCell align="center">Client</StyledTableCell>
                    <StyledTableCell align="center">Weight (Tons)</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {items.map((item) => (
                    <TableRow key={item.lot}>
                        <StyledTableCell align="center">{item.lot}</StyledTableCell>
                        <StyledTableCell align="center">{item.product}</StyledTableCell>
                        <StyledTableCell align="center">{item.client}</StyledTableCell>
                        <StyledTableCell align="center">{item.weight}</StyledTableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
)

export default FactoryPlan

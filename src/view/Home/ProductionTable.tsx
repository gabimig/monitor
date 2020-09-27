import {
    createStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme,
    withStyles,
} from '@material-ui/core'
import React from 'react'

export interface Production {
    name: string,
    weight: number
}
interface ProductionTableProps {
    production: Production[],
}

const StyledTableCell = withStyles((theme: Theme) => createStyles({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell)

const ProductionTable = ({ production }: ProductionTableProps): React.ReactElement => {
    const lines: React.ReactElement[] = []
    for (let i = 0; i < 8; i++) {
        let name = ''
        let weight = ''
        if (production.length > i) {
            name = production[i].name
            weight = production[i].weight.toString()
        }

        const element = (
            <TableRow>
                <StyledTableCell align="center">{name}</StyledTableCell>
                <StyledTableCell align="center">{weight}</StyledTableCell>
            </TableRow>
        )
        lines.push(element)
    }

    return (
        <TableContainer component={Paper}>
            <Table size="small">
                <TableHead>
                    <TableRow style={{ width: '100%' }}>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Weight (Kg)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {lines}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ProductionTable

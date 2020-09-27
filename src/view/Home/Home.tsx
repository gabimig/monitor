import React from 'react'
import { Grid } from '@material-ui/core'
import PowerIcon from '@material-ui/icons/Power'
import NewReleasesIcon from '@material-ui/icons/NewReleases'
import { useSelector } from 'react-redux'
import CollapsablePanel from 'collapsable-panel'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import ProductionTable, { Production } from './ProductionTable'
import { productionSelector } from '../../storage/productionSlice'
import ElectricGraphic from './ElectricGraphic'
import FactoryPlan from './FactoryPlan'
import CurrentOrder from './CurrentOrder'

const Home = (): React.ReactElement => {
    const productionRedux: Production[] = useSelector(productionSelector)

    return (
        <Grid container spacing={1}>
            <Grid item xs={7}>
                <div style={{ width: '100%' }}>
                    <CollapsablePanel title="General Elec." iconComponent={PowerIcon}>
                        <ElectricGraphic />
                    </CollapsablePanel>
                </div>
                <div style={{ width: '100%' }}>
                    <CollapsablePanel title="Future Productions" iconComponent={AccessTimeIcon} hideable>
                        <FactoryPlan />
                    </CollapsablePanel>
                </div>
            </Grid>
            <Grid item xs={5}>
                <div style={{ width: '100%' }}>
                    <CollapsablePanel title="Productions" iconComponent={NewReleasesIcon} hideable>
                        <ProductionTable production={productionRedux} />
                    </CollapsablePanel>
                </div>
                <div style={{ width: '100%' }}>
                    <CollapsablePanel title="Current Production" iconComponent={NewReleasesIcon} hideable>
                        <CurrentOrder />
                    </CollapsablePanel>
                </div>
            </Grid>
        </Grid>
    )
}

export default Home

import {
    Box, Collapse, createStyles, Divider, Grid, makeStyles, SvgIconProps, Theme, Typography,
} from '@material-ui/core'
import React, { ReactElement, useState } from 'react'
import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons'
import clsx from 'clsx'

interface SectionHeaderProps {
    title: string | ReactElement
    iconComponent: React.JSXElementConstructor<SvgIconProps>
    children: ReactElement
    hideable?: boolean
    hiddenInit?: boolean
}

const useStyles = makeStyles(() => createStyles({
    mainBox: { padding: '1.5em 1.5em 1em 1.5em' },
    title: {
        // color: '#999',
        textTransform: 'capitalize',
        fontWeight: 500,
    },
    header: {
        color: '#555',
        fontStyle: 'normal',
    },
    hiddenHeader: {
        color: '#999',
        fontStyle: 'italic',
    },

    hiddlableHeader: {
        cursor: 'pointer',
        '&:hover, &:focus': {
            backgroundColor: '#F4F4F4',
        },
    },
    icon: {
        display: 'flex',
        margin: '0em 0.5em 0.2em',
    },
    iconArrow: {
        display: 'flex',
        margin: '0.5em 0.5em 0.2em ',
    },
    content: { paddingTop: '1.3em' },
}))

const ContentPanel = ({
    title,
    iconComponent: IconComponent,
    children,
    hideable = false,
    hiddenInit = false,
}: SectionHeaderProps): React.ReactElement => {
    const [isHided, setIsHide] = useState<boolean>(hiddenInit)
    const classes = useStyles({ hideable, isHided })
    const handleHide = () => {
        setIsHide(!isHided)
    }

    return (
        <Box className={classes.mainBox}>
            <div
              className={clsx(classes.header, {
                  [classes.hiddlableHeader]: hideable,
                  [classes.hiddenHeader]: hideable && isHided,
              })}
              style={{ display: 'flex' }}
              role="button"
              aria-hidden
              onClick={handleHide}
              onKeyPress={handleHide}
            >
                <Grid container justify="flex-start">
                    <Typography
                      variant="h6"
                      gutterBottom
                      noWrap
                      className={classes.title}
                    >
                        <Box display="flex" alignItems="flex-end">
                            <Box className={classes.icon}>
                                <IconComponent />
                            </Box>
                            {title}
                        </Box>
                    </Typography>
                </Grid>
                {hideable && (
                    <Grid container justify="flex-end">
                        <Box className={classes.iconArrow}>
                            {isHided ? <ArrowDropDown /> : <ArrowDropUp />}
                        </Box>
                    </Grid>
                )}
            </div>
            <Divider />
            <Collapse className={classes.content} in={!hideable || !isHided}>{children}</Collapse>
        </Box>
    )
}

ContentPanel.defaultProps = {
    hideable: false,
    hiddenInit: false,
}

export default ContentPanel

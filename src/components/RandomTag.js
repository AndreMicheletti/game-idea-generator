import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'


const useStyles = makeStyles((theme) => ({
  tag: {
    paddingLeft: 10,
    paddingRight: 10,
    marginRight: 5,
    marginBottom: 5,
    cursor: 'pointer',
  },
  tagText: {
    fontSize: '1.6em',
    color: 'white'
  }
}))

export default function RandomTag(props) {
  const classes = useStyles()

  const { text, tooltip, color, onClick } = props

  return (
    <Tooltip title={tooltip} aria-label={tooltip}>
      <Paper className={classes.tag} style={{ backgroundColor: color }} onClick={onClick}>
        <Typography variant="body1" className={classes.tagText} style={{ color: 'white' }}>
          {text}
        </Typography>
      </Paper>
    </Tooltip>
  )
}

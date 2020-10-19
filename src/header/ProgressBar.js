import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  )
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
})

export default function LinearWithValueLabel({ completedTodosCount, allTodosCount }) {
  const classes = useStyles()

  const procentCompleted = (completedTodosCount / allTodosCount) * 100

  return (
    <div className={classes.root}>
      <Typography variant="body2" color="textSecondary">
        {`${completedTodosCount} / ${allTodosCount}`} Completed
      </Typography>

      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" value={procentCompleted} />
        </Box>
      </Box>
    </div>
  )
}

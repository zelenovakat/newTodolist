import React from "react"
import styled from "styled-components"
// import PropTypes from "prop-types"
// import { makeStyles } from "@material-ui/core/styles"
// import LinearProgress from "@material-ui/core/LinearProgress"
// import Typography from "@material-ui/core/Typography"
// import Box from "@material-ui/core/Box"

// function LinearProgressWithLabel(props) {
//   return (
//     <MainWrapper>
//       <Box display="flex" alignItems="center">
//         <Box width="100%" mr={1}>
//           <LinearProgress variant="determinate" {...props} />
//         </Box>
//         <Box minWidth={35}>
//           <Typography variant="body2" color="textSecondary">{`${Math.round(
//             props.value
//           )}%`}</Typography>
//         </Box>
//       </Box>
//     </MainWrapper>
//   )
// }

// LinearProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate and buffer variants.
//    * Value between 0 and 100.
//    */
//   value: PropTypes.number.isRequired,
// }

// const useStyles = makeStyles({
//   root: {
//     width: "100%",
//   },
// })

// export default function LinearWithValueLabel() {
//   const classes = useStyles()
//   const [progress, setProgress] = React.useState(10)

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10))
//     }, 800)
//     return () => {
//       clearInterval(timer)
//     }
//   }, [])

//   return (
//     <div className={classes.root}>
//       <LinearProgressWithLabel value={progress} />
//     </div>
//   )
// }

// const MainWrapper = styled.div`
//   margin: 20px;
// `

const ProgressBar = () => {
  return (
    <ProgressLine>
      <TrakcerLine percentage={25}></TrakcerLine>
    </ProgressLine>
  )
}

export default ProgressBar

const ProgressLine = styled.div`
  height: 10px;
  margin: 20px;
  background: #4355a982;
`
const TrakcerLine = styled.div`
  height: 5px;
  background: #4355a9;
`

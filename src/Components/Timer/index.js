import PropTypes from 'prop-types'
import Typography from "@material-ui/core/Typography"

const Timer = ({time}) => {
  return (
    <Typography type="h3">{time}</Typography>
  )
}

Timer.propTypes = {
  time: PropTypes.number.isRequired
}

export default Timer

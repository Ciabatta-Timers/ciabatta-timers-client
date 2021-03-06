import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

const Timer = ({ time }) => {
  const formatTime = (time) => {
    const timeAsDate = new Date(time)
    if (isNaN(timeAsDate.valueOf())) {
      return NaN
    }

    let minutes = timeAsDate.getMinutes()
    minutes = minutes < 10 ? `0${minutes}` : minutes

    let seconds = timeAsDate.getSeconds()
    seconds = seconds < 10 ? `0${seconds}` : seconds

    let milliseconds = timeAsDate.getMilliseconds()
    if (milliseconds < 10) {
      milliseconds = `00${milliseconds}`
    } else if (milliseconds < 100) {
      milliseconds = `0${milliseconds}`
    }

    return `${minutes}:${seconds}.${milliseconds}`
  }

  return (
    <Typography type='h3'>{formatTime(time)}</Typography>
  )
}

Timer.propTypes = {
  time: PropTypes.number.isRequired
}

export default Timer

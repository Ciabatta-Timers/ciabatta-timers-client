import PropTypes from 'prop-types'
import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const JoinTimer = ({ onSubmit, maxIdLength }) => {
  const [timerId, setTimerId] = useState('')

  const onChangeTimerId = ({ target: { value } }) => {
    setTimerId(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isTimerIdValid()) {
      onSubmit(timerId)
    }
  }

  const isTimerIdValid = () => {
    return (timerId && typeof timerId === 'string' && timerId.length === maxIdLength)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Grid item>
          <TextField value={timerId} label="Join Timer" placeholder="abc123" onChange={onChangeTimerId}/>
        </Grid>
        <Grid item>
          <Button disabled={!isTimerIdValid()} type="submit" variant="contained" color="primary">Join</Button>
        </Grid>
      </Grid>
    </form>
  )
}

JoinTimer.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  maxIdLength: PropTypes.number
}

JoinTimer.defaultProps = {
  maxIdLength: 6
};

export default JoinTimer

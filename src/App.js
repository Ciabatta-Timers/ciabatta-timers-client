import { useState } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Timer from './Components/Timer'
import JoinTimer from './Components/JoinTimer'
import { startTimer, stopTimer, subscribeToTimer, unsubscribeToTimer } from './api'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'

const useStyles = makeStyles(theme => ({
  appContainer: {
    height: '100vh'
  }
}))

function App() {
  const { appContainer } = useStyles()

  const [currentTime, setCurrentTime] = useState(0)
  const [timerId, setTimerId] = useState()

  const onTimerTick = ({timer, timerId}) => {
    setCurrentTime(timer)
    setTimerId(timerId)
  }

  const onStartTimer = () => startTimer(onTimerTick)

  const onStopTimer = () => stopTimer()

  const onJoinTimer = (timerId) => subscribeToTimer(timerId, onTimerTick)

  const onLeaveTimer = (timerId) => {
    unsubscribeToTimer(timerId)
    setTimerId()
  }

  return (
    <>
      <CssBaseline />
      <Container>
        <Grid
          className={appContainer}
          container
          direction="column"
          justify="center"
          alignItems="center"
          wrap="nowrap"
          spacing={2}
        >
          <Grid item>
            <Typography variant="h2">{timerId}</Typography>
          </Grid>
          <Grid item>
            <Timer time={currentTime}/>
          </Grid>
          <Grid item>
            {timerId ? (
              <Button variant="contained" color="primary" onClick={onLeaveTimer}>Leave Timer</Button>
            ) : (
              <JoinTimer onSubmit={onJoinTimer}/>
            )}
          </Grid>
          <Grid container item justify="center" spacing={2} >
            <Grid item>
              <Button variant="contained" color="primary" onClick={onStartTimer}>Start Timer</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={onStopTimer}>Stop Timer</Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App

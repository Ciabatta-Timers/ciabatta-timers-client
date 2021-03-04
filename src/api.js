import openSocket from 'socket.io-client'

const socket = openSocket('/')

export function startTimer (cb) {
  socket.on('timer', cb)
  socket.emit('startTimer', 1000)
}

export function stopTimer () {
  socket.emit('stopTimer')
}

export function subscribeToTimer (timerId, cb) {
  socket.on('timer', cb)
  socket.emit('subscribeToTimer', timerId)
}

export function unsubscribeToTimer (timerId) {
  socket.emit('unsubscribeToTimer', timerId)
}

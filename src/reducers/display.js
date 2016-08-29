import dispatcher from '../redux/dispatcher'
import moment from 'moment'
import buildReducer from '../redux/buildReducer'
import pomodoroTicker from '../components/main/pomodoroTicker'

export default buildReducer({
  'PomodoroStarted': (state, action) => {
    // TODO: questo e' un side-effect (meglio spostarlo da qui)
    const clientTimerId = pomodoroTicker.start(state.timer)
    return {clientTimerId: clientTimerId}
  },
  'PomodoroEnded': (state, action) => {
    // TODO: questo e' un side-effect (meglio spostarlo da qui)
    pomodoroTicker.stop(state.clientTimerId)
    return {clientTimerId: null, timer: '1:00'}
  },
  'SQUASH_TIMER': (state, action) => {
    pomodoroTicker.stop(state.clientTimerId)
    return {clientTimerId: null}
  }, 
  'UPDATE_TIMER': (state, action) => {
    return {timer: action.payload.timer}
  },
  'RESUME_TIMER': (state, action) => {
    const startedAt = moment(action.payload.startedAt)
    const elapsed = 60000 - moment().diff(startedAt)
    const timer = moment(elapsed).format('mm:ss')

    const clientTimerId = pomodoroTicker.start(timer)
    return {
      timer: timer, 
      timerId: action.payload.timerId,
      startDisabled: true, 
      squashDisabled: false,
      clientTimerId: clientTimerId
    }
  }
})


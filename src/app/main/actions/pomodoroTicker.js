import actionStream from '../../../redux/actionStream'
import nextTick from './nextTick'

let timerId = null

const pomodoroTicker = {
  start(startingTime){
    let currentTime = startingTime
    timerId = setInterval(() => {
      currentTime = nextTick(currentTime)
      actionStream.push({type: 'UPDATE_TIMER', payload: {time: currentTime}})
    }, 1000)
  },
  stop(){
    clearInterval(timerId)
    timerId = null
  }
}

export default pomodoroTicker
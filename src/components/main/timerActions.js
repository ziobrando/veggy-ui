import request from 'superagent'
import dispatcher from '../../redux/dispatcher'
import commandStore from '../../serverPush/commandStore'

const timerActions = {
  host: 'http://localhost:4000',
  startPomodoro() {
    request
      .post(`${this.host}/timer`)
      .set('Content-Type', 'application/json')
      .send({command: 'StartPomodoro', duration: 6 * 10 * 1000})
      .then(res => {
        commandStore.store(res.body.id)
      })
      .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
  }
}

export default timerActions
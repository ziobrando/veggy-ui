var timers = require('../../src/app/main/reducers/timers')
var assert = require('chai').assert

const payload = [
  {
    pomodoro_id: '1',
    status: 'ticking',
    started_at: '2010-04-11 22:10',
    with: ['users/ema']
  },{
    pomodoro_id: '2',
    status: 'squashed',
    started_at: '2015-11-28 18:00',
    with: []
  }
]

describe('Timers reducer', () => {
  
  it('TIMERS_LOADED should return the list of timers with status', () => {
    const state = timers({}, {type: 'TIMERS_LOADED', payload: payload})
    assert.equal(2, state.timers.length)
  })

  it('POMODORO_STARTED should add the pomodoro to the list', () => {
    const initialState = {timers: [], users: [{timer_id: '1', username: 'ema'}, {timer_id: '2', username: 'gabriele'}]}
    const state = timers(initialState, {type: 'POMODORO_STARTED', payload: {pomodoroId: '123', sharedWith: ['2'] }})
    assert.equal(1, state.timers.length)
    assert.equal('gabriele', state.timers[0].with)
  })

})
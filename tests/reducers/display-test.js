var display = require('../../src/reducers/display')
var assert = require('chai').assert

describe('Display reducers', () => {
  
  it('START_TIMER should return the timer id', () => {
    const state = display({}, {type: 'START_TIMER'})
    assert.isOk(state.timerId)
  })

  it('SQUASH_TIMER should return buttons status', () => {
    const state = display({}, {type: 'SQUASH_TIMER'})
    assert.isNull(state.timerId)
  })

})
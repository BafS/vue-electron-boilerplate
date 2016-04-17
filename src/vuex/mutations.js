import { INCREMENT, DECREMENT } from './mutation-types'

export default {
  [INCREMENT] (state) {
    state.count = state.count + 1
    state.history.push('increment')
  },
  [DECREMENT] (state) {
    state.count--
    state.history.push('decrement')
  }
}

import { FILTER_ORDERS } from '../actions'

const initialState = {
  orderFilter: ''
}

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_ORDERS:
      return Object.assign({}, state, {
        orderFilter: action.text
      })
    default:
      return state
  }
}

export default visibilityFilter
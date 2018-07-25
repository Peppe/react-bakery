import { combineReducers } from 'redux'
import orders from './orders'
import orderFilters from './orderFilters'

export default combineReducers({
  orders,
  orderFilters
})
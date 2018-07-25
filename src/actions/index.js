export const OPEN_ORDER = 'OPEN_ORDER'
export const FILTER_ORDERS = 'FILTER_ORDERS'

export const openOrder = id => ({
  type: OPEN_ORDER,
  id
})

export const filterOrders = text => ({
  type: FILTER_ORDERS,
  text
})
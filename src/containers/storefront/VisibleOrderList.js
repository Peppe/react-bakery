import { connect } from 'react-redux'
import OrderList from '../../components/storefront/OrderList';
import { openOrder } from '../../actions/index'

const getVisibleOrders = (orders, filter) => {
  //switch (filter) {
  return orders;
}

const mapStateToProps = state => {
  return {
    orders: getVisibleOrders(state.orders, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onOrderClick: id => {
      dispatch(openOrder(id))
    }
  }
}

const VisibleOrderList = connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList)

export default VisibleOrderList
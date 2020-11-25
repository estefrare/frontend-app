import Home from './home'
import { connect } from 'react-redux'

const mapStateToProps = (store) => {
  return {
    userName: store.auth.user ? store.auth.user.name : '',
  }
}

export default connect(mapStateToProps)(Home)
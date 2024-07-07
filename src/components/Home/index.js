import {Component} from 'react'
import './index.css'
import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogged: false}

  onClickButton = () => {
    this.setState(prevState => ({isLogged: !prevState.isLogged}))
  }

  render() {
    const {isLogged} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <Message isLogged={isLogged} />
          {isLogged ? (
            <Logout logout={this.onClickButton} />
          ) : (
            <Login login={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}
export default Home

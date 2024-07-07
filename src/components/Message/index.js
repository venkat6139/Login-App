import './index.css'

const Message = props => {
  const {isLogged} = props
  const message = isLogged ? 'Welcome User' : 'Please Login'
  return <h1 className="heading">{message}</h1>
}
export default Message

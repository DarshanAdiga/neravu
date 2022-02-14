const Header = (props) => {
  return (
    <header>
        <h1>Neravu - Your TODO Assistant</h1>
        <h2>Next priority tasks</h2>
        <ol>
            <li> {props.user_id}</li> 
        </ol>
    </header>
  )
}

Header.defaultProps = {
    user_id: '123'
}

export default Header
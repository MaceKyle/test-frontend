import './styles/header.css';

function Header(props) {
  
  return (
    <div class="div-header">
      <h1>Homepage</h1>
      {
        props.userLoggedIn ? 
        <h3>Hello, {props.username}</h3> :
        <button>Login</button>
      }
    </div>
  );
}

export default Header;
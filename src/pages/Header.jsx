import '../styles/header.css';

function Header(props) {
  
  return (
    <div class="div-header">
      <div className='logo-container'>
        <img className="logohead" src="src\assets\5a1d2d464ac6b00ff574e288.png" alt="NatWest Logo" />
        <div className="header-slogans">
          <h1 style={{fontSize: 60, margin: 0}}>NatWest</h1>
          <h2>Tomorrow Begins <u>Today</u></h2>
        </div>
      </div>
      {
        props.userLoggedIn ? 
        <a href="/account"><h3>Hi, {props.username}!</h3></a> :
        <button>Login</button>
      }
    </div>
  );
}

export default Header;


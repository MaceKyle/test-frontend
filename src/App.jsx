import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import { dummyPostTableData } from './dummyPostTableData'
import Post from './post'
import SubmitPost from './submitPostForm'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0);

  const userLoggedIn = true; // for now, will depend on session variable after.

  return (
    <>
      <Header userLoggedIn={userLoggedIn} username={"DummyUsername"} />
      {userLoggedIn ? <SubmitPost /> : <h3>Login to post!</h3>}
      {
        dummyPostTableData.map((post, i) => 
          <Post key={i} postObject={post} />
        )
      }
    </>
  )
}

export default App

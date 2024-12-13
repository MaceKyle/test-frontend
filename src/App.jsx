import { useState } from 'react'
import './styles/App.css'
import { dummyPostTableData } from './dummyPostTableData'
import Post from './post'
import SubmitPost from './submitPostForm'
import Header from './Header'

function App() {
  const [count, setCount] = useState(0);

  const [testData, setTestData] = useState(dummyPostTableData);

  console.log(testData);

  function addPost(post) {
    return setTestData((prev) => [
      post,
      ...prev
    ])
  }

  const userLoggedIn = true; // for now, will depend on session variable after.

  return (
    <>
    <Header userLoggedIn={userLoggedIn} username={"DummyUsername"} />
    <div class="app-background">
      {userLoggedIn ? 
        <SubmitPost addPost={addPost} /> : 
        <h3>Login to post!</h3>
      }
      {
        testData.map((post, i) => 
          <Post key={i} postObject={post} userLoggedIn={userLoggedIn} />
        )
      }
    </div>
    </>
  )
}

export default App

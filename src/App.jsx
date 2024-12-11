import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { dummyPostTableData } from './dummyPostTableData'
import Post from './post'
import SubmitPost from './submitPostForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Homepage</h1>
      <SubmitPost />
      {
        dummyPostTableData.map((post, i) => 
          <Post key={i} postObject={post} />
        )
      }
    </>
  )
}

export default App

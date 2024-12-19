import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function SubmitPostForm(props) {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function getDate() {
    const today = new Date();
    const year = today.getFullYear().toString();
    const month = today.getMonth().toString();
    const date = today.getDate().toString();
    
    const full_date = year+"-"+month+"-"+date;

    return full_date
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const payload = {
      // user_id: this needs to be found from the users login
      username: "DummyUsername", 
      post_id: uuidv4(), // generate random id
      title: title,
      content: text,
      published_at: getDate(),
      updated_at: getDate()
    }

    /*const url = "localhost:3000/test";

    // send payload to the backend
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      console.log(await response.json());
    } catch(e) {
      console.log(e);
    }*/

    props.addPost(payload);
    setTitle('');
    setText('');
  }
  
  return (
    <div className="add-post-card">
      <form className="add-post-form" onSubmit={handleSubmit}>
        <h1 style={{
          color:'#5A287D', 
          fontFamily: 'RN House Sans W01 Bold',
          textAlign: 'left'
        }}>Something on your mind?</h1>
        <div className="post-inputs">
          <input 
            className="post-title-input"
            type="text" 
            id="title" 
            name="title" 
            aria-label="Enter the title" 
            placeholder="Enter the title" 
            value={title}
            onChange={handleTitleChange}
            required 
          />

          <input 
            className="post-content-input"
            type="text"
            name="content"
            aria-label="Share your thoughts!"
            placeholder="Share your thoughts!"
            value={text}
            onChange={handleTextChange}
            required
          />
          <input 
            className="post-content-submit" 
            type="submit" 
            value="Submit" 
          />
        </div>
      </form>
    </div>
  );
}

export default SubmitPostForm;
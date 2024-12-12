import { useState } from "react";

function SubmitPostForm(props) {
  const [text, setText] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    console.log("About to add post");

    // This is the post object.
    const post = {
      content: text
    }

    props.addPost(post);
    setText('');
  }
  
  return (
    <form className="addPostForm" onSubmit={handleSubmit}>
      <input 
        type="text"
        aria-label="Share your thoughts!"
        placeholder="Share your thoughts!"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default SubmitPostForm;
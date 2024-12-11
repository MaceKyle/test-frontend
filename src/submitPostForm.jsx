import { useState } from "react";

function SubmitPostForm() {
  const [text, setText] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }
  
  return (
    <form>
      <input 
        type="text"
        aria-label="Share your thoughts!"
        placeholder="Share your thoughts!"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="text" />
    </form>
  );
}

export default SubmitPostForm;
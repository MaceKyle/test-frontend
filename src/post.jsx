import './post.css'

function Post(props) {

  const edited_since_published = props.postObject.published_at !== props.postObject.updated_at;

  return (
    <div class="post-card">
      <div class="post-header">
        <h2>{props.postObject.username}</h2>
        <h2>{props.postObject.title}</h2>
      </div>
      <p>{props.postObject.content}</p>
      <div class="div-time-edited">
        <h2>Published: {props.postObject.published_at}</h2>
        {edited_since_published && "(edited)"}
      </div>
    </div>
  );
}

export default Post;
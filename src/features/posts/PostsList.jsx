import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    console.log(posts);

    const renderedPosts = posts.map(post => (
            <div key={post.id}>
                <h5>{post.title}</h5>
                <p>{post.content}</p>
            </div>
        ))

  return (
    <section>
        <h2>posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList
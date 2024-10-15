import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import { useFetching } from "./hooks/useFetching";
import { Loader } from "../components/UI/Loader/Loader";
import "./../styles/App.css";

export const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchPostById, isLoadingPost, errorPost] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  const [fetchCommentsForPost, isLoadingComments, errorComments] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsForPost(id);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsForPost(params.id);
  }, [params.id]);

  return (
    <div>
      <h1>Страница поста с ID = {params.id}</h1>
      {isLoadingPost ? (
        <Loader />
      ) : (
        post && (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        )
      )}
      <div className="comments__block">
        <h1>Комментарии к посту</h1>
        {isLoadingComments ? (
          <Loader />
        ) : (
          comments && (
            <div className="comments__list">
              {comments.map((comment) => (
                <div key={comment.id}>
                  <strong><p>{comment.email}</p></strong>
                  <p>{comment.body}</p>
                </div>
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

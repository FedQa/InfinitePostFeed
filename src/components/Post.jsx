import { Button } from "./UI/Button/Button";
import { useNavigate } from "react-router-dom";

export const Post = (props) => {

  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="post">
        <div className="post__title">
          <strong>{props.post.id}. {props.post.title}</strong>
        </div>
        <div className="post__content">{props.post.body}</div>

        <div className="post__btns">
          <Button onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</Button>
          <Button onClick={() => props.remove(props.post)}>Удалить</Button>
        </div>
      </div>
    </div>
  );
};

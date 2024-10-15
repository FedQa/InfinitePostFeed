import { Input } from "./UI/Input/Input"
import { Button } from "./UI/Button/Button"
import { useState } from "react";

export const PostForm = ({create}) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
      });


      const addNewPost = (e) => {
        e.preventDefault();

        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost);
        setPost({title: '', body: ''});
    
      }


    return (
        <form>
            
        <Input
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text" 
        placeholder="Название поста" />

        <Input 
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text" 
        placeholder="Описание поста" />

        <Button onClick={addNewPost}>Добавить пост</Button>
        </form>
    )
}
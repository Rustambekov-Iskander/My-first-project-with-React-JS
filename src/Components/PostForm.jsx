import React from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ( {create} ) => {

    const [post, setPost] = React.useState({title: '', body: ''});


    const addNewPost = (e) => {
      e.preventDefault();
  
      const newPost = { ...post, id: Date.now() };
      create(newPost);
      setPost({title: '', body: ''})
    }

    return (
    <div>
      <h1>Форма для создания поста</h1>
      <form className='form-post-create'>
          
        <MyInput 
            value={post.title} 
            onChange={e => setPost({...post, title: e.target.value})} 
            placeholder='Название поста'
            type='text'
        />

        <MyInput 
            value={post.body} 
            onChange={e => setPost({...post, body: e.target.value})} 
            placeholder='Описание поста'
            type='text'
        />

        <MyButton onClick={addNewPost}>Создать</MyButton>
      </form>
    </div>  
    );
};

export default PostForm;
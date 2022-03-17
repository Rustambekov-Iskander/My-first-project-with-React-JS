import React, {useEffect, useState} from 'react';
import { Link, useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import MyLoader from '../Components/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';

const PostPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching( async() => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });

    const [comments, setComments] = useState([]);
    const [fetchComments, isComLoading, comError] = useFetching( async() => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);

    return (
        <div>
            <h1>Вы попали на страницу поста {params.id}</h1>
            {isLoading
            ? <MyLoader/>
            : <div>{post.id} {post.title}</div>
            }

            <h1>Комментарии</h1>
            {isComLoading
            ? <MyLoader/>
            : comments.map(comment => (
                <div key={comment.id} className='border-teal'>   name: {comment.email} <br/>Body: {comment.body}</div>
            ))
            }
            <Link to='/posts'>Вернуться к постам</Link>
        </div>
    );
};

export default PostPage;
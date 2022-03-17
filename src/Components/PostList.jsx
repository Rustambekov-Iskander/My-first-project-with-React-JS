import React from 'react';
import PostItem from './PostItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const PostList = ({posts, remove, title}) => {
    
    if(!posts.length){
        return (
            <div className='border-teal'>
            <h1>Посты не найдены...</h1>
            </div>
        )
    }

    return (
        <div className='border-teal'>

            <h1>{title}</h1>
            <TransitionGroup>
            {posts.map((post, index) => (
                <CSSTransition
                    key={post.id}
                    timeout={500}
                    classNames="post"
                    >
                    <PostItem remove={remove} number={index + 1} post={post}/>
                </CSSTransition>
            ))}
            </TransitionGroup>

        </div>
    );
};

export default PostList;
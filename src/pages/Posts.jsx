import React, { useEffect, useMemo, useRef, useState } from 'react';
import '../styles/App.css';
import PostList from '../Components/PostList';
import PostForm from '../Components/PostForm';
import PostFilter from '../Components/PostFilter';
import MyModal from '../Components/UI/modal/MyModal';
import MyButton from '../Components/UI/button/MyButton';
import {usePosts} from '../hooks/usePosts.js';
import PostService from '../API/PostService';
import MyLoader from '../Components/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../Components/UI/pagination/Pagination';
import { useObserver } from '../hooks/useObserver';

function Posts() {

  const [posts, setPosts] = useState([]);

  // Sorted and searched posts
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  // Pagination
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(async() => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  }

  const changePage = (p) => {
    setPage(p);
  }

  return (
    <div className="App">

    <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
    </MyModal>

      <MyButton 
      style={{margin: '15px 0px'}}
      onClick={() => setModal(true)}>
        Добавить новый пост
      </MyButton>

      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
        <h1>Произошла ошибка: ${postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
      <div ref={lastElement}/>

      {isPostLoading &&
        <div style={{display: 'flex', justifyContent: 'center'}}><MyLoader/></div> 
      }

      <Pagination
        totalPages={totalPages}
        changePage={changePage}
        page={page}
      />

    </div>
  );
}

export default Posts;

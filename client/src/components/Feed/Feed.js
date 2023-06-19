import React, { useEffect, useState } from 'react';
import './feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('');
  const [postContent, setPostContent] = useState('');

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleNewUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleNewPost = (e) => {
    setPostContent(e.target.value);
  };

  const handlePostSubmit = () => {
    const newPost = {
      username: username,
      content: postContent,
      createdAt: new Date().toLocaleString(),
    };

    setPosts([newPost, ...posts]);
    setUsername('');
    setPostContent('');
  };

  const deletePost = (id) => {
    const removePost = posts.filter((post) => post.id !== id);

    setPosts(removePost);
  };

    // Currently effects all posts not just the targeted post...
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount((count - 1));
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='container bg-slate-800 flex justify-center absolute inset-y-24 border-2 w-8/12'>
        <div className='feed-cont flex inline-flex flex-col w-7/12 h-128 overflow-y-scroll'>
          <div className='flex justify-center'>
            <input
              type='text'
              className='py-3 px-5 m-3 block w-5/12 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
              placeholder='Name Thyself'
              value={username}
              onChange={handleNewUsername}
            />
          </div>
          <textarea
            className='bitter-post py-3 px-5 block w-104 h-24 border-gray-200 rounded-3xl text-xl focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
            cols='80'
            rows='10'
            maxLength='280'
            placeholder='Spread the Bitterness'
            value={postContent}
            onChange={handleNewPost}
          />
          <div className='flex justify-end'>
            <button
              className='flex w-1/12 items-center justify-center px-4 py-2 m-3 text-3xl font-bold leading-6 text-stone-200 whitespace-no-wrap bg-transparent border-2 border-stone-200 rounded-full shadow-sm hover:bg-slate-100 hover:text-stone-950 hover:bg-transparent focus:outline-none'
              onClick={handlePostSubmit}
            >
              +
            </button>
          </div>
          <div className='post-container overflow-y-scroll'>
            {posts.map((post, index) => (
              <div className='feedCard' key={index}>
                <div>
                  <h3 className='post-title'>{post.username}</h3>
                  <p className='post-content'>{post.content}</p>
                  <p className='post-info'>Defiled at {post.createdAt}</p>
                  <div className='flex justify-end'>
                    <button className='comment' onClick>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 pt-2 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                      </svg>
                    </button>
                    <button className='dislike' onClick={addCount}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 pt-2 mx-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                      </svg>
                    </button>
                    <p className='w-8 h-8 pt-2'> {count} </p>
                    <button className='delete' onClick={deletePost}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 pt-2 mx-1"> 
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
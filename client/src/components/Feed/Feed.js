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
      createdAt: new Date().toLocaleString()
    };

    setPosts([newPost, ...posts]);
    setUsername('');
    setPostContent('');
  };

  return (
    <div className='container bg-slate-800 flex justify-center absolute ml-64 inset-y-20 border-2 w-8/12'>
      <div className='feed-cont flex inline-flex flex-col h-128 overflow-y-scroll'>
        <input
          type='text'
          className='py-3 px-5 m-3 block w-40 border-gray-200 rounded-full text-m text-center focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
          placeholder='Name Thyself'
          value={username}
          onChange={handleNewUsername}
        />
        <textarea
          className='bitter-post py-3 px-5 block w-104 h-24 border-gray-200 rounded-3xl text-xl focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
          cols='80'
          rows='10'
          maxLength='280'
          placeholder='Spread the Bitterness'
          value={postContent}
          onChange={handleNewPost}
        />
        <button
          className='flex items-center justify-center px-4 py-2 m-3 text-3xl font-bold leading-6 text-stone-200 whitespace-no-wrap bg-transparent border-2 border-stone-200 rounded-full shadow-sm hover:bg-white hover:text-stone-950 hover:bg-transparent focus:outline-none'
          onClick={handlePostSubmit}
        >
          +
        </button>
        <div className='post-container overflow-y-scroll'>
          {posts.map((post, index) => (
            <div className='feedCard' key={index}>
              <div>
                <h3 className='post-title'>{post.username}</h3>
                <p className='post-content'>{post.content}</p>
                <p className='post-info'>Posted on {post.createdAt}</p> {/* Use the stored creation timestamp */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
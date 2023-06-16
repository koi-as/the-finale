import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './feed.css';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='container bg-slate-800 absolute ml-56 inset-y-20 w-2/4'>
      <div className='feed-cont inline-flex flex-col'>
        {posts.map((post) => (
          <div className='feedCard' key={post._id}>
            <div>
              <h3 className='post-title'>{post.title}</h3>
              <p className='post-content'>{post.content}</p>
              <p className='post-info'>
                Posted by{' '}
                <span style={{ fontWeight: 'bold'}}>{post.username}</span>{' '}
                on {post.createdAt}
              </p>
            </div>
          </div>
        ))}
        <input
          type='text'
          className='py-3 px-5 block w-72 border-gray-200 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
          placeholder='Input text'
        />
      </div>
    </div>
  );
};

export default Feed;

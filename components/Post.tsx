import React from 'react';

export function Post(props) {
  return (
    <div className='text-violet-700'>
      <h2>{props.header}</h2>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
import React from 'react';
import styles from '../src/styles/HotPosts.module.css';

const HotPosts = ({ post }) => {
  return (
    <div className={styles.verticalRectanglePost}>
      <div className={`${styles.rectangle} shadowDefault roundedDefault`}>
        <div className={styles.postContent}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
    
  );
};

export default HotPosts;
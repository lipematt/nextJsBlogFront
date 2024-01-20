import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import styles from '../src/styles/Posts.module.css';

const Posts = ({ post }) => {
    return (
        <div className={styles.postContainer}>
            <div className={styles.imageContainer}>
                <Image
                    src={"/coffee.jpg"}
                    alt={post.header}
                    className={`${styles.postImage} roundedDefault`}
                    width={60}
                    height={60}
                />
            </div>
            <div className={styles.textContainer}>
                <h3>{post.header}</h3>
            </div>
            <div className={styles.iconContainer}>
                <h3>12 min</h3>
            </div>
            <div className={styles.iconContainer}>
                <h3>tech</h3>
            </div>
        </div>
    );
};

export default Posts;
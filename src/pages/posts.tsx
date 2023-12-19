import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Post } from '../../components/Post';
import HotPost from '../../components/HotPost';

const inter = Inter({ subsets: ['latin'] });

export default function Home(props) {
  return (
    <div className="bg-white-900 py-20 px-4 lg:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="max-w-lg">
          <h1 className="siteTitle text-4xl lg:text-6xl font-bold mb-4">Lorem Ipsum!</h1>
          <p className="text-white text-lg lg:text-xl">Lorem Ipsum sit amet.</p>
        </div>

        <div className="mt-10 lg:mt-0 flex flex-wrap justify-center gap-6">
          <HotPost posts={props.posts} />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/api/get/posts');
  const data = await response.json();

  return {
    props: {
      posts: data.posts,
    },
  };
};

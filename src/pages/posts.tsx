import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Post } from '../../components/Post';
import Search from '../../components/Search';
import FeaturedSection from '../../components/FeaturedSection';

const inter = Inter({ subsets: ['latin'] });

export default function Home(props) {
  return (
    <div className="p-8">
      <Search />
      <FeaturedSection />
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

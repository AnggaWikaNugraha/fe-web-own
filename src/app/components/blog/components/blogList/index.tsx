'use client';

import { Fragment, useEffect, useState } from 'react';
import BlogCard from './components/blogCard';
import { FeedPostType } from '../../types';
import { getBlogFeed } from '../../services';

const BlogList = () => {
  const [posts, setPosts] = useState<FeedPostType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getBlogFeed();
      setPosts(data);
    };
    fetchData();
  }, []);

  return (
    <div className="space-y-6">
      {posts.map((post, key) => (
        <Fragment key={key}>
            <BlogCard key={post.id} post={post} />
        </Fragment>
      ))}
    </div>
  );
};

export default BlogList;
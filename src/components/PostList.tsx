import type { PostProps } from '@/types/Types';
import { useEffect, useState } from 'react';
import PostCard from '@/components/PostCard';

const PostList = () => {
    const [posts, setPosts] = useState<PostProps[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data);
                setPosts(data);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError('An unknown error occurred');
                }
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className='postList'>
            {error && <p>Error: {error} </p>}
            {posts.length === 0 ? (
                <p>Loading...</p>
            ) : (
                posts.map((post) => <PostCard key={post.id} {...post} />)
            )}
        </div>
    );
};

export default PostList;

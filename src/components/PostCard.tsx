import type { PostProps } from '@/types/Types';

const PostCard = (props: PostProps) => {
    return (
        <div key={props.id} className='postCard'>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    );
};

export default PostCard;

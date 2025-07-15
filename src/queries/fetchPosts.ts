import axios from 'axios';
import type { Post } from '../types/post';

export const fetchPosts = async ({ pageParam }: { pageParam: number }) => {
    return await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts',
        {
            params: { _limit: 10, _page: pageParam },
        },
    );
};

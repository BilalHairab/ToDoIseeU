import { useCallback, useState, useEffect } from 'react';
import { UIState } from '../utils/state';
import {
  getSpecificPostFromAPI,
  getSpecificUserFromAPI,
} from '../../data/api';
import { Post, User } from '../../data/models';

type PostDetailData = {
  user: User;
  post: Post;
};
export function usePostDetails(postId: number) {
  const [state, setState] = useState<UIState<PostDetailData>>({
    status: 'init',
  });

  const fetchPostDetail = useCallback(async () => {
    setState({ status: 'loading' });
    try {
      const post = await getSpecificPostFromAPI(postId);
      const user = await getSpecificUserFromAPI(post.userId);
      setState({
        status: 'success',
        data: {
          user,
          post,
        },
      });
    } catch (error) {
      setState({ status: 'error', error: `${error}` });
    }
  }, [postId]);

  useEffect(() => {
    fetchPostDetail();
  }, [fetchPostDetail]);

  return { state, retry: fetchPostDetail };
}

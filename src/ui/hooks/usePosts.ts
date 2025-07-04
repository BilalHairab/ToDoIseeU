import { useCallback, useState, useEffect } from 'react';
import { UIState } from '../utils/state';
import { getPostsFromAPI } from '../../data/api';
import { Post } from '../../data/models';

export function usePosts() {
  const [state, setState] = useState<UIState<Post[]>>({ status: 'init' });

  const fetchPosts = useCallback(() => {
    setState({ status: 'loading' });
    getPostsFromAPI()
      .then(ps => {
        setState({ status: 'success', data: ps });
      })
      .catch(e => {
        setState({ status: 'error', error: e });
      });
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return { state, retry: fetchPosts };
}

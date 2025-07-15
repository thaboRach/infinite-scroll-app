import React, { useRef, useCallback } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';

import { Card, ScrollToTop, Spinner } from './components';
import { fetchPosts } from './queries';

function App() {
  const observer = useRef<IntersectionObserver | null>(null);

  const {
    data,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      if (lastPage['data'].length === 0) {
        return undefined
      }
      return lastPageParam + 1
    },
  })


  const lastPostElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasNextPage) {
            fetchNextPage();
          }
        },
        { threshold: 1.0 }
      );
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, hasNextPage]
  );

  return (
    <main className="vertical center-h w-full min-h-screen">
      <h1 className="text-3xl font-extrabold text-center py-6">
        Infinite Scrolling
      </h1>

      {
        status === 'pending' && (
          <div className='vertical center-h'>
            <Spinner />
            <p className='text-xl text-slate-700'>Loading, please wait</p>
          </div>
        )
      }

      <div className='max-w-[80%] center-h vertical gap-4'>
        {
          data?.pages.map((group, index) => (
            <React.Fragment key={index}>
              {
                group.data.map((post) => (
                  <Card key={post.id} ref={lastPostElementRef} id={post.id.toString()} title={post.title} body={post.body} />
                ))
              }

            </React.Fragment>
          ))
        }

        {isFetchingNextPage && <Spinner />}
        {error && <p className="text-center text-red-500 py-4">{error.message}</p>}

      </div>

      <ScrollToTop />
    </main>
  );
}

export default App;

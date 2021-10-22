import { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchValue) => {
  const [videos, setVideos] = useState([]);

  // used to set default search term
  useEffect(() => {
    search(defaultSearchValue);
  }, [defaultSearchValue]);

  const search = async (searchValue) => {
    const { data } = await youtube.get('/search', {
      params: {
        q: searchValue,
      },
    });

    setVideos(data.items);
  };

  return { videos, search };
};

export default useVideos;

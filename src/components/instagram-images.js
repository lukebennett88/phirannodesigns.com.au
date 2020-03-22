import React, { useEffect, useState } from 'react';

import { useGraphQL } from '../hooks/use-graphql';
import { InstagramImage } from './instagram-image';

export default function Instagram() {
  const [data, setData] = useState(Array(6).fill({}));
  const {
    site: {
      siteMetadata: { instagramAccessToken },
    },
  } = useGraphQL();

  useEffect(() => {
    async function fetchInstagramPosts() {
      const res = await fetch(
        `https://graph.instagram.com/me/media?fields=id,username,caption,media_type,media_url,permalink&access_token=${instagramAccessToken}`
      );
      const json = await res.json();
      setData(
        json.data.filter(item => item.media_type === 'IMAGE').slice(0, 6)
      );
    }

    fetchInstagramPosts();
  }, [instagramAccessToken]);

  return data.map((item, index) => {
    return <InstagramImage key={index} item={item} />;
  });
}

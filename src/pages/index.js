import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ClientLogos from '../components/client-logos';
import Instagram from '../components/instagram';

export default function IndexPage() {
  return (
    <Layout isHome>
      <SEO
        title="Creative Solutions to Your Online Presence | Phiranno Designs"
        description="Phiranno Designs is a digital company in Port Macquarie offering creative solutions to build your online presence that stands out from the rest."
      />
      <ClientLogos />
      <Instagram />
    </Layout>
  );
}

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental:{
    ppr:'incremental', // 允许对特定路由采用 PPR
  }
};

export default nextConfig;

// This file sets a custom Next.js client environment
// See: https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables

/** @type {import('next').NextConfig} */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}
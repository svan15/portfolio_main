
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite';

const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html'
    }),

    paths: {
      base: process.env.BASE_PATH || ''
    }
  }
};

export default config;

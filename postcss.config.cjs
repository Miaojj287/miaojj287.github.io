module.exports = {
  plugins: [
    require('autoprefixer')
  ],
};

// astro.config.ts
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yijunmiao.tech',
  base: '/',
});
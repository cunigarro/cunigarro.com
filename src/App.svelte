<script>
  import Init from './pages/Init.svelte';
  import Article from './pages/Article.svelte';
  import ErrorPage from './pages/ErrorPage.svelte';
  import AboutMe from './pages/AboutMe.svelte';
  import {
    getArticlesData,
    getAssetsData
  } from './services/contentfulApi.js';
  import articlesStore from './services/articlesStore.js';
  import { DateTime } from 'luxon';
  import { onMount } from 'svelte';
  import { darkTheme } from './store.js';
  import showdown from 'showdown';
  import router from 'page';

  let page;
  let params;

  router('/', () => page = Init);
  router('/blog', () => page = Init);
  router('/about-me', () => page = AboutMe);
  router('/error-400', () => page = ErrorPage);
  router(
    '/post/:slug',
    (ctx, next) => {
      params = ctx.params
      next()
    },
    () => page = Article
  );
  router('/*', () => page = ErrorPage);

  onMount(() => {
    darkTheme.subscribe(darkTheme => {
      const appWrapper = document.querySelector('.app-wrapper');

      if (darkTheme) {
        appWrapper.classList.add('dark-theme');
      } else {
        appWrapper.classList.remove('dark-theme');
      }
    });

    getArticlesData().then(data => {
      const converter = new showdown.Converter();

      let articles = data.items
        .filter(item => item.sys.contentType.sys.id === 'blogPost')
        .map((item, i) => ({
          title: item.fields.title,
          date: DateTime.fromISO(item.fields.publishDate).setLocale('en').toLocaleString({month: 'long', day: '2-digit'}),
          category: 'Web',
          imageUrl: '',
          body: '',
          resume: item.fields.description,
          opened: i === 0,
          articleId: item.sys.id,
          articleSlug: item.fields.slug,
          tags: item.fields.tags
        }));

      let profile = data.items
        .filter(item => item.sys.contentType.sys.id === 'profile')
        .map((item, i) => ({
          title: item.fields.title,
          body: converter.makeHtml(item.fields.body)
        }))[0];

      getAssetsData().then(assets => {
        const imagesItems = assets.items.reverse();
        articles = imagesItems.map((asset, i) => {
          return {
            ...articles[i],
            imageUrl: `https:${asset.fields.file.url}`
          };
        });

        articlesStore.setArticles(articles);
        articlesStore.setProfile(profile);
        router.start();
      });
    });
  });
</script>

<svelte:component this={page} params={params} />

<style global>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
  }

  .app-wrapper {
    --body-background: 255, 255, 255;
    --font-color: 0, 0, 0;

    background-color: rgb(var(--body-background));
    color: rgb(var(--font-color));
  }

  .dark-theme {
    --body-background: 0, 0, 0;
    --font-color: 255, 255, 255;
  }

  .text-color {
    color: rgb(var(--font-color));
  }

  hr.cu-hr {
    width: 80px;
    border-bottom: 2px solid orange;
    border-top: 0;
  }

  @media screen and (min-width: 540px) {
    hr.cu-hr {
      width: 115px;
    }
  }
</style>

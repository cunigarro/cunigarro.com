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
  import router from 'page';

  let page;
  let params;

  router('/', () => page = Init);
  router('/blog', () => page = Init);
  router(
    '/articulo/:slug',
    (ctx, next) => {
      console.log(ctx);
      params = ctx.params
      next()
    },
    () => page = Article
  );
  router('/acerca-de-mi', () => page = AboutMe);
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
      DateTime.local().setLocale('es-CO');
      let articles = data.items
        .filter(item => item.sys.contentType.sys.id === 'blogPost')
        .map((item, i) => ({
          name: item.fields.title,
          date: DateTime.fromISO(item.fields.publishDate, {setZone: true}).toLocaleString({month: 'long', day: '2-digit'}),
          category: 'Web',
          imageUrl: '',
          resume: item.fields.description,
          opened: i === 0,
          articleId: item.sys.id,
          articleSlug: item.fields.slug
        }));

      getAssetsData().then(assets => {
        articles = assets.items.map((asset, i) => {
          return {
            ...articles[i],
            imageUrl: `https:${asset.fields.file.url}`
          };
        });

        articlesStore.setArticles(articles);
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

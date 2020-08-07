<script>
  import Init from './pages/Init.svelte';
  import Article from './pages/Article.svelte';
  import ErrorPage from './pages/ErrorPage.svelte';
  import AboutMe from './pages/AboutMe.svelte';
  import { onMount } from 'svelte';
  import { darkTheme } from './store.js';
  import router from 'page';

  let page;
  let params;

  router('/', () => page = Init);
  router('/blog', () => page = Init);
  router(
    '/articulo/:id',
    (ctx, next) => {
      params = ctx.params
      next()
    },
    () => page = Article
  );
  router('/acerca-de-mi', () => page = AboutMe);
  router('/*', () => page = ErrorPage);

  router.start();

  onMount(() => {
    darkTheme.subscribe(darkTheme => {
      const appWrapper = document.querySelector('.app-wrapper');

      if (darkTheme) {
        appWrapper.classList.add('dark-theme');
      } else {
        appWrapper.classList.remove('dark-theme');
      }
    });
  });
</script>

<div class="app-wrapper">
  <svelte:component this={page} params={params} />
</div>

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
    --body-background: #fff;

    background-color: var(--body-background);
  }

  .dark-theme {
    --body-background: #000;
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

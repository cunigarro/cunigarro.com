<script>
  import Init from './pages/Init.svelte';
  import Articles from './pages/Articles.svelte';
  import ErrorPage from './pages/ErrorPage.svelte';
  import AboutMe from './pages/AboutMe.svelte';
  import router from 'page';

  let page;
  let params;

  router('/', () => page = Init);
  router('/articulos', () => page = Articles);
  router('/acerca-de-mi', () => page = AboutMe);
  router('/*', () => page = ErrorPage);

  router.start();
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

  hr.cu-hr {
    width: 80px;
    border-bottom: 3px solid orange;
  }
</style>

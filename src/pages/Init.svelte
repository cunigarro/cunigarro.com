<script>
  import { onMount } from 'svelte';

  import Header from './../components/Header.svelte';
  import Tags from './../components/Tags.svelte';
  import Accordion from './../components/Accordion.svelte';
  import Footer from './../components/Footer.svelte';
  import Switch from './../components/Switch.svelte';

  import { mdiCheckboxBlankCircle } from '@mdi/js';
  import { DateTime } from 'luxon';

  import { getArticlesData } from './../services/contentfulApi.js';

  let articles = [];

  function openArticlesController(event) {
    articles.forEach((v, i) => {
      articles[i].opened = event.detail.id == i + 1;
    });
  }

  onMount(() => {
    if (window.location.pathname == '/blog') {
      const blog = document.querySelector('#blog');
      const blogTopPos = blog.offsetTop;
      window.scrollTo(0, blogTopPos);
    }

    getArticlesData().then(data => {
      DateTime.local().setLocale('es-CO');

      articles = data.items
        .filter(item => item.sys.contentType.sys.id === 'blogPost')
        .map((item, i) => ({
          name: item.fields.title,
          date: DateTime.fromISO(item.fields.publishDate, {setZone: true}).toLocaleString({month: 'long', day: '2-digit'}),
          category: 'Web',
          imageUrl: 'https://picsum.photos/200/300',
          resume: item.fields.description,
          opened: i === 0,
          articleId: item.sys.id
        }));
    });
  });
</script>

<div class="init-wrapper">
  <div class="container mx-auto h-screen z-10 relative flex flex-col">
    <Header></Header>
    <div class="flex flex-grow items-center px-6 d sm:px-20 justify-center sm:justify-start">
      <h1 class="font-thin leading-none text-5xl sm:text-6xl text-white mb-40 tracking-tighter">
        Christian
        <br>
        Unigarro
        <svg class="w-2 h-2 sm:w-3 sm:h-3 inline -mb-5 sm:-mb-6 -ml-2 sm:-ml-3 text-white fill-current" viewBox="0 0 24 24">
          <path d={mdiCheckboxBlankCircle} />
        </svg>
      </h1>
    </div>
  </div>
  <div class="init-wrapper__image-screen absolute z-0 w-full h-full top-0"></div>
</div>

<div
  id="blog"
  class="container mx-auto px-4 pt-8"
>
  <Tags></Tags>
  <hr class="cu-hr mt-4 mb-6">

  <div class="grid grid-cols-12">
    <div class="mb-6 col-span-12 md:col-span-4 xl:col-span-3">
      <div class="flex items-center mb-6">
        <Switch></Switch>
        <span class="font-semibold inline-block ml-2">
          Blog
        </span>
      </div>
      <h2 class="text-2xl font-semibold leading-none">
        Este es mi blog
        <br>
        de noticias
      </h2>
    </div>
  </div>

  <div  class="grid grid-cols-12">
    <div class="col-start-1 md:col-start-5 xl:col-start-4 col-end-13">
      {#each articles as article, index}
        <Accordion
          id={index + 1}
          name={article.name}
          date={article.date}
          category={article.category}
          imageUrl={article.imageUrl}
          resume={article.resume}
          open={article.opened}
          articleId={article.articleId}
          on:opened={openArticlesController}
        ></Accordion>
      {/each}
      <Footer></Footer>
    </div>
  </div>
</div>

<style>
  .init-wrapper {
    background: url(https://picsum.photos/200/300);
    background-size: cover;
    height: 100vh;
  }

  .init-wrapper__image-screen {
    background-color: rgba(0, 0, 0, .5);
  }
</style>

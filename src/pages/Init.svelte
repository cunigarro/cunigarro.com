<script>
  import { onMount } from 'svelte';

  import Header from './../components/Header.svelte';
  import Tags from './../components/Tags.svelte';
  import Accordion from './../components/Accordion.svelte';
  import Footer from './../components/Footer.svelte';
  import Switch from './../components/Switch.svelte';
  import SocialNetWorks from './../components/SocialNetWorks.svelte';
  import { darkTheme } from './../store.js';
  import { mdiCheckboxBlankCircle } from '@mdi/js';
  import articlesStore from './../services/articlesStore.js';
  import page from 'page';

  let articles = [];
  let darkThemeChecked = false;

  function openArticlesController(event) {
    articles.forEach((v, i) => {
      articles[i].opened = event.detail.id == i + 1;
    });
  }

  function darkModeAction(event) {
    darkTheme.set(event.detail);
  }

  onMount(() => {
    articles = articlesStore.getArticles();
  });
</script>

<div class="relative h-screen">
  <div class="container mx-auto h-screen z-20 relative flex flex-col">
    <Header></Header>
    <div class="flex flex-grow items-center px-4 lg:px-16">
      <h1 class="font-thin leading-none text-5xl sm:text-6xl text-white mb-20 md:mb-20 w-full text-color">
        Christian
        <br>
        Unigarro
        <svg class="w-2 h-2 sm:w-3 sm:h-3 inline -mb-5 sm:-mb-6 -ml-2 sm:-ml-3 text-color fill-current" viewBox="0 0 24 24">
          <path d={mdiCheckboxBlankCircle} />
        </svg>
        <div class="flex justify-between">
          <hr class="cu-hr w-20 mt-4 mb-0 md:mb-8">
          <p class="text-xs mt-20 md:mt-8 font-normal">
            <span class="text-sm block mb-5 text-background py-1 px-2">
              {#if articles.length > 0}
                {articles[0].title}
              {/if}
            </span>
            <a class="text-background py-1 px-2 inline-flex items-center" href="/post/{articles.length > 0 ? articles[0].articleSlug : ''}">
              <span class="mr-3">
                Go to post
              </span>
              <img src="/static/images/goto-post-arrow.png" alt="">
            </a>
          </p>
        </div>
        <div class="hidden md:block">
          <SocialNetWorks></SocialNetWorks>
        </div>
      </h1>
    </div>
  </div>
  <div class="init-wrapper__image-screen absolute z-10 w-full h-full top-0"></div>
  <img class="absolute z-0 w-full h-full top-0 init-wrapper__image" src={articles.length > 0 ? articles[0].imageUrl : ''} alt="">
</div>

<div
  id="blog"
  class="container mx-auto px-4 pt-8"
>
  <!-- <Tags></Tags> -->

  <div class="grid grid-cols-12 mt-0 sm:mt-6">
    <div class="mb-6 col-span-12 md:col-span-4 xl:col-span-3">
      <div class="flex items-center mb-6">
        <Switch on:checked={darkModeAction}></Switch>
        <span class="font-semibold inline-block ml-2">
          Blog
        </span>
      </div>
      <h2 class="text-2xl font-semibold leading-6 font-normal">
        This is my
        <br>
        blog
      </h2>
    </div>
  </div>

  <div  class="grid grid-cols-12">
    <div class="col-start-1 md:col-start-5 xl:col-start-4 col-end-13">
      {#each articles as article, index}
        <Accordion
          id={index + 1}
          title={article.title}
          date={article.date}
          category={article.category}
          imageUrl={article.imageUrl}
          resume={article.resume}
          open={article.opened}
          articleSlug={article.articleSlug}
          on:opened={openArticlesController}
        ></Accordion>
      {/each}
      <Footer iconsCentered={true}></Footer>
    </div>
  </div>
</div>

<style>
  .init-wrapper__image-screen {
    background-color: rgba(var(--body-background), .4);
  }

  .text-background {
    background-color: rgba(var(--body-background), .6);
  }

  .init-wrapper__image {
    object-fit: cover;
  }
</style>

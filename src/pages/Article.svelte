<script>
  import { onMount } from 'svelte';
  import Header from './../components/Header.svelte';
  import Switch from './../components/Switch.svelte';
  import Footer from './../components/Footer.svelte';
  import { darkTheme } from './../store.js';
  import { getArticleData } from './../services/contentfulApi.js';
  import articlesStore from './../services/articlesStore.js';
  import page from 'page';
  import showdown from 'showdown';

  export let params;
  let articles = [];
  let article;

  function darkModeAction(event) {
    darkTheme.set(event.detail);
  }

  onMount(() => {
    articles = articlesStore.getArticles();
    article = articles.find(art => art.articleSlug === params.slug);

    if (article !== undefined) {
      getArticleData(article.articleId).then(resp => {
        const converter = new showdown.Converter();
        article.body = converter.makeHtml(resp.fields.body);
      });
    } else {
      page.redirect('/error-400');
    }

    scroll(0,0);
  });
</script>

<div class="container mx-auto">
  <Header dynamicColor={true}></Header>
  <hr class="border-t mb-5">
</div>

<div class="container mx-auto px-4">
  <div class="flex items-center mb-6 block md:hidden">
    <Switch on:checked={darkModeAction}></Switch>
    <span class="font-semibold inline-block ml-2">
      Blog
    </span>
  </div>
  <h2 class="text-2xl font-semibold leading-none mb-6">
    {#if article}
      {article.title}
    {/if}
  </h2>
  <img class="w-full h-48 mb-4 object-cover mb-6 rounded-lg lg:rounded-none" src={article ? article.imageUrl: ''} alt="">
  <div class="grid-cols-12 hidden md:grid">
    <div class="col-span-12 md:col-span-4 xl:col-span-3 text-sm">
      {#if article}
        {article.date}
      {/if} - by Christian Unigarro
      <!-- <br>
      Innovación -->
    </div>
  </div>

  <div  class="grid grid-cols-12 items-center mb-6">
    <div class="col-span-12 md:col-span-4 xl:col-span-3 hidden md:block">
      <Footer></Footer>
    </div>
    <div class="col-span-12 md:col-span-8 xl:col-span-9">
      <div class="-mb-3 article text-sm md:text-base pb-0 md:pb-8">
        {#if article}
          {@html article.body}
        {/if}
      </div>
      <div class="block md:hidden">
        <Footer></Footer>
      </div>
    </div>
  </div>
</div>

<style>
  :global(.article) {
    line-height: 30px;
  }

  :global(.article p) {
    margin-bottom: .75rem;
  }

  :global(.article ul) {
    list-style-type: disc;
    list-style-position: inside;
  }

  :global(.article ul li) {
    margin-bottom: .75rem;
  }
</style>

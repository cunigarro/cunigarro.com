<script>
  import { onMount } from 'svelte';

  import Header from './../components/Header.svelte';
  import Switch from './../components/Switch.svelte';
  import Footer from './../components/Footer.svelte';

  import { getArticleData } from './../services/contentfulApi.js';

  import showdown from 'showdown';

  export let params;
  let article = '';

  onMount(() => {
    getArticleData(params.id).then(resp => {
      const converter = new showdown.Converter();
      article = resp;
      article.fields.body = converter.makeHtml(resp.fields.body);
    });
  });
</script>

<div class="article-wrapper flex flex-col">
  <Header></Header>
</div>

<div class="container mx-auto px-4 pt-8">
  <div class="flex items-center mb-6">
    <Switch></Switch>
    <span class="font-semibold inline-block ml-2">
      Blog
    </span>
  </div>
  <h2 class="text-2xl font-semibold leading-none mb-6">
    {#if article.fields}
      {article.fields.title}
    {/if}
  </h2>
  <div class="-mb-3 article text-sm">
    {#if article.fields}
      {@html article.fields.body}
    {/if}
  </div>
  <Footer></Footer>
</div>

<style>
  .article-wrapper {
    background: url(https://picsum.photos/200/300);
    background-size: cover;
    height: 50vh;
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

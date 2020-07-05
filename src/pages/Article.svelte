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

<div class="about-me-wrapper flex flex-col">
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
  <div class="-mb-3">
    {#if article.fields}
      {@html article.fields.body}
    {/if}
  </div>
  <Footer></Footer>
</div>

<style>
  .about-me-wrapper {
    background: url(https://picsum.photos/200/300);
    background-size: cover;
    height: 50vh;
  }

  .about-me-wrapper__image-screen {
    background-color: rgba(0, 0, 0, .5);
  }
</style>

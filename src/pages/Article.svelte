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
<div class="container px-4 mx-auto">
  <Header></Header>

  <hr class="border-t mb-5">

  <div class="flex items-center mb-6 block md:hidden">
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
  <img class="w-full h-48 mb-4 object-cover mb-6" src="https://picsum.photos/200/300" alt="">
  <div class="grid-cols-12 hidden md:grid">
    <div class="col-span-12 md:col-span-4 xl:col-span-3 text-sm">
      Jun 1 - por Christian Unigarro
      <br>
      Innovación
    </div>
  </div>

  <div  class="grid grid-cols-12 items-center">
    <div class="col-span-12 md:col-span-4 xl:col-span-3 hidden md:block">
      <Footer></Footer>
    </div>
    <div class="col-span-12 md:col-span-8 xl:col-span-9">
      <div class="-mb-3 article text-sm md:text-base pb-0 md:pb-8">
        {#if article.fields}
          {@html article.fields.body}
        {/if}
      </div>
      <div class="block md:hidden">
        <Footer></Footer>
      </div>
    </div>
  </div>
</div>

<style>
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

<script>
	import Header from '$lib/Header.svelte';
  import Tags from '$lib/Tags.svelte';
  import Accordion from '$lib/Accordion.svelte';
  import Footer from '$lib/Footer.svelte';
  import Switch from '$lib/Switch.svelte';
  import SocialNetWorks from '$lib/SocialNetWorks.svelte';
	import {
    mdiCheckboxBlankCircle,
    mdiChevronDown
  } from '@mdi/js';
  import { onMount } from 'svelte';

  let articles = [];

  onMount(() => {

  });
</script>

<div class="relative h-screen">
  <div class="container mx-auto h-screen z-20 relative flex flex-col">
    <!-- <Header dynamicColor={false}></Header> -->
    <div class="flex flex-wrap flex-grow items-center px-4 lg:px-16">
      <h1 class="font-thin leading-none text-5xl sm:text-6xl text-white w-full mt-16">
        Christian
        <br>
        Unigarro
        <svg class="w-2 h-2 sm:w-3 sm:h-3 inline -mb-5 sm:-mb-6 -ml-2 sm:-ml-3 fill-current" viewBox="0 0 24 24">
          <path d={mdiCheckboxBlankCircle} />
        </svg>
        <div class="flex justify-between">
          <div>
            <div class="cu-hr w-20 mt-4 mb-4"></div>
            <p class="text-base sm:text-xl mb-0 md:mb-8 font-light">
              Frontend Developer
            </p>
          </div>
          <p class="text-sm mt-20 md:mt-8 py-2 font-normal">
            <a class="py-1 px-2 inline-flex items-center" href="/blog/{articles.length > 0 ? articles[0].articleSlug : ''}">
              <span class="mr-3 no-underline hover:underline">
                <span class="hidden sm:inline">
                  Go to the last
                </span>
                <span class="inline sm:hidden">
                  Last
                </span>
                post
              </span>
              <img src="/static/images/goto-post-arrow.png" alt="">
            </a>
          </p>
        </div>
        <div class="hidden md:block">
          <SocialNetWorks></SocialNetWorks>
        </div>
      </h1>
      <div class="text-center self-end w-full">
        <div
          class="inline-block px-2 py-1 cursor-pointer"
          on:click={goToBlog}
        >
          <svg class="w-5 h-5 text-light-orange" viewBox="0 0 24 24">
            <path fill="currentColor" d={mdiChevronDown} />
          </svg>
        </div>
      </div>
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

  <div  class="grid grid-cols-12 mb-6">
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
    background-color: rgba(45, 49, 71, .4);
  }
  .init-wrapper__image {
    object-fit: cover;
  }
</style>

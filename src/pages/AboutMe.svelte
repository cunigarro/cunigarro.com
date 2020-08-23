<script>
  import { onMount } from 'svelte';
  import Header from './../components/Header.svelte';
  import Switch from './../components/Switch.svelte';
  import Footer from './../components/Footer.svelte';
  import articlesStore from './../services/articlesStore.js';
  import { darkTheme } from './../store.js';
  import { mdiCheckboxBlankCircle } from '@mdi/js';

  let profile;

  function darkModeAction(event) {
    darkTheme.set(event.detail);
  }

  onMount(() => {
    profile = articlesStore.getProfile();
  });
</script>

<div class="about-me-wrapper mx-auto flex flex-col mb-5">
  <div class="container flex-grow flex flex-col flex-grow mx-auto z-10">
    <Header dynamicColor={true}></Header>
    <div class="flex sm:hidden flex-grow mb-16 items-center px-6 d sm:px-20 justify-center sm:justify-start">
      <h1 class="font-thin leading-none text-5xl sm:text-6xl text-white tracking-tighter">
        Christian
        <br>
        Unigarro
        <svg class="w-2 h-2 sm:w-3 sm:h-3 inline -mb-5 sm:-mb-6 -ml-2 sm:-ml-3 text-white fill-current" viewBox="0 0 24 24">
          <path d={mdiCheckboxBlankCircle} />
        </svg>
        <div class="cu-hr w-20 mt-4"></div>
      </h1>
    </div>
    <hr class="hidden sm:block border-t mb-0">
  </div>
  <div class="about-me-wrapper__image-screen absolute z-0 w-full h-full top-0"></div>
</div>

<div class="container mx-auto px-4">
  <div class="grid-cols-12 md:grid">
    <div class="col-span-12 md:col-span-4 xl:col-span-3 text-sm">
      <div class="flex items-center mb-6">
        <Switch on:checked={darkModeAction}></Switch>
        <span class="font-semibold inline-block ml-2">
          About me
        </span>
      </div>
      <h2 class="text-2xl font-semibold leading-6 mb-10 md:mb-16">
        {#if profile}
          {@html profile.title}
        {/if}
      </h2>
    </div>
  </div>

  <div  class="grid grid-cols-12 items-center">
    <div class="col-span-12 md:col-span-4 xl:col-span-3 hidden md:block">
      <Footer></Footer>
    </div>
    <div class="col-span-12 md:col-span-8 xl:col-span-9">
      <div class="-mb-3 article text-sm md:text-base pb-0 md:pb-8">
        {#if profile}
          {@html profile.body}
        {/if}
      </div>
      <div class="block md:hidden">
        <Footer></Footer>
      </div>
    </div>
  </div>
</div>

<style>
  .about-me-wrapper {
    background: url(https://picsum.photos/200/300);
    background-size: cover;
    height: 50vh;
    position: relative;
  }

  .about-me-wrapper__image-screen {
    background-color: rgba(0, 0, 0, .5);
  }

  @media screen and (min-width: 540px) {
    .about-me-wrapper {
      background: transparent;
      height: auto;
    }

    .about-me-wrapper__image-screen {
      background-color: transparent;
    }
  }
</style>

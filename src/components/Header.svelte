<script>
  import { onMount } from 'svelte';
  import Switch from './Switch.svelte';
  import { darkTheme } from './../store.js';
  import page from 'page';

  let menuOpened = false;
  let btnActive = {
    aboutMe: false,
    blog: false
  }

  function toggleMenu() {
    menuOpened = !menuOpened;
  }

  function goToBlog() {
    const blog = document.querySelector('#blog');

    if (blog != null) {
      const target = document.querySelector('#blog') || document.body;
      const blogTopPos = target.getBoundingClientRect().top + window.pageYOffset;

      scroll({
        top: blogTopPos,
        behavior: 'smooth'
      });
    } else {
      page('/blog');
    }
  }

  function darkModeAction(event) {
    darkTheme.set(event.detail);
  }

  onMount(() => {
    if (window.outerWidth >= 768 ) {
      menuOpened = true;
    }

    btnActive.blog = page.current == '/' || page.current == '/blog' ||page.current.indexOf('articulo') != -1;
    btnActive.aboutMe = page.current == '/acerca-de-mi';
  });
</script>

<nav class="flex items-center justify-between flex-wrap px-4 py-6 md:py-12 xl:py-16 relative z-10">
  <div class="flex items-center flex-shrink-0 text-white mr-6 order-first">
    <a class="text-color" href="/">
      Cunigarro
    </a>
  </div>
  <div class="flex items-center order-first md:order-last">
    <Switch on:checked={darkModeAction}></Switch>
    <button
      on:click={toggleMenu}
      class="flex items-center ml-2 -mr-3 text-white block md:hidden"
    >
      <svg class="w-8 h-8" viewBox="0 0 24 24">
        <path fill="currentColor" d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" />
      </svg>
    </button>
  </div>
  <div class="w-full md:w-auto block md:flex flex-grow lg:items-center">
    {#if menuOpened}
      <div class="text-sm flex-grow flex flex-col md:flex-row flex-no-wrap md:flex-wrap items-end justify-end">
        <button
          on:click|preventDefault="{goToBlog}"
          class="block mt-4 md:mt-0 text-color order-first md:order-last mx-0 md:mx-8 btn-menu"
          class:active = {btnActive.blog}
        >
          Blog
        </button>
        <a
          href="/acerca-de-mi"
          class="block mt-4 md:mt-0 text-color btn-menu"
          class:active = {btnActive.aboutMe}
        >
          Acerca de mi
        </a>
      </div>
    {/if}
  </div>

</nav>

<span class="hidden btn-menu active"></span>

<style>
  .btn-menu {
    position: relative;
  }

  .btn-menu.active::after {
    display: block;
    position: absolute;
    left: 50%;
    margin-left: -5px;
    bottom: -14px;
    content: none;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: orange;
  }

  @media screen and (min-width: 720px) {
    .btn-menu.active::after {
      content: '';
    }
  }
</style>

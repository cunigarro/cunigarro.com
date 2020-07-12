<script>
  import { onMount } from 'svelte';
  import Switch from './Switch.svelte';
  import page from 'page';

  let menuOpened = false;

  function toggleMenu() {
    menuOpened = !menuOpened;
  }

  function goToBlog() {
    const blog = document.querySelector('#blog');

    if (blog != null) {
      const blogTopPos = blog.offsetTop;
      window.scrollTo(0, blogTopPos);
    } else {
      page('/blog');
    }
  }

  onMount(() => {
    console.log(window.outerWidth);
    if (window.outerWidth >= 768 ) {
      menuOpened = true;
    }
  });
</script>

<nav class="flex items-center justify-between flex-wrap p-6 relative z-10">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="/">
      Cunigarro
    </a>
  </div>
  <div class="block md:hidden flex items-center">
    <Switch></Switch>
    <button
      on:click={toggleMenu}
      class="flex items-center ml-2 -mr-4 text-white"
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
          class="block mt-4 md:mt-0 text-teal-200 hover:text-white order-first md:order-last ml-0 md:ml-3"
        >
          Blog
        </button>
        <a
          href="/acerca-de-mi"
          class="block mt-4 md:mt-0 text-teal-200 hover:text-white"
        >
          Acerca de mi
        </a>
      </div>
    {/if}
  </div>

</nav>

<style>
</style>

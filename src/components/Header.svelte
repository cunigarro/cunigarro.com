<script>
  let menuOpened = false;

  function toggleMenu() {
    menuOpened = !menuOpened;
  }
</script>

<nav class="flex items-center justify-between flex-wrap p-6 relative z-10">
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="/">
      Cunigarro
    </a>
  </div>
  <div class="block lg:hidden flex items-center">
    <button
      class="bg-transparent hover:bg-transparent text-white hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded mr-3"
    >
      toggle icon
    </button>
    <button
      on:click={toggleMenu}
      class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
    >
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    {#if menuOpened}
      <div class="text-sm lg:flex-grow text-right">
        <a
          href="#blog"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Blog
        </a>
        <a
          href="/acerca-de-mi"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Acerca de mi
        </a>
      </div>
    {/if}
  </div>

</nav>

<style>
</style>

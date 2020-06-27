<script>
  import Header from './../components/Header.svelte';
  import Breadcrumb from './../components/Breadcrumb.svelte';
</script>

<div class="init-wrapper flex flex-col">
  <Header></Header>
  <div class="flex flex-grow items-center justify-center text-2xl pb-16 z-10 text-white">
    Christian
    <br>
    Unigarro.
  </div>
  <div class="init-wrapper__image-screen absolute z-0 w-full h-full"></div>
</div>

<div class="news-wrapper">
  <Breadcrumb></Breadcrumb>
</div>

<style>
  .init-wrapper {
    background: url(https://picsum.photos/200/300);
    background-size: cover;
    height: 100vh;
  }

  .init-wrapper__image-screen {
    background-color: rgba(0, 0, 0, .5);
  }
</style>

<script>
  import Header from './../components/Header.svelte';
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
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, aliquam! Sequi libero adipisci ad aperiam dicta magnam incidunt dolorum recusandae? Natus laboriosam, ad quisquam porro commodi est quia incidunt assumenda.
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

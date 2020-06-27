<script>
  import Header from './../components/Header.svelte';
  import Tags from './../components/Tags.svelte';
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

<div class="container mx-auto px-4 pt-8">
  <Tags></Tags>
  <hr class="cu-hr mt-4 mb-6">
  <div class="mb-6">
    <a href="#responsive-header" class="inline-block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
      Blog
    </a>
    <span class="font-semibold">
      Blog
    </span>
  </div>
  <h2 class="text-2xl font-semibold leading-none mb-6">
    Este es mi blog
    <br>
    de noticias
  </h2>
  <hr class="mb-4">
  <div class="article">
    <p class="text-xs mb-4">
      Jun 1 - Innovación
    </p>
    <h2 class="text-lg mb-4 font-semibold">
      ¿En que va la innovación?
    </h2>
    <img class="w-full h-48 rounded-lg mb-4" src="https://picsum.photos/200/300" alt="">
    <div class="text-sm">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nobis labore autem, corrupti natus blanditiis voluptate voluptates numquam deleniti neque doloremque illum doloribus sunt adipisci possimus accusamus ipsa eius itaque!
    </p>
    </div>
  </div>
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

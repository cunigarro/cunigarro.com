<script>
  import Header from './../components/Header.svelte';
  import Switch from './../components/Switch.svelte';
  import Footer from './../components/Footer.svelte';
</script>

<div class="about-me-wrapper mb-5">
  <div class="container mx-auto flex flex-col">
    <Header></Header>
    <hr class="hidden md:block border-t mb-0">
  </div>
  <div class="about-me-wrapper__image-screen absolute z-0 w-full h-full top-0"></div>
</div>

<div class="container mx-auto px-4">
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
        <p class="text-sm mb-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus neque perferendis, dolorum saepe ipsum hic fugiat corrupti, ipsa atque molestiae, nulla recusandae corporis deleniti omnis aperiam vitae accusamus nesciunt. Corrupti?
        </p>
        <p class="text-sm mb-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus neque perferendis, dolorum saepe ipsum hic fugiat corrupti, ipsa atque molestiae, nulla recusandae corporis deleniti omnis aperiam vitae accusamus nesciunt. Corrupti?
        </p>
        <p class="text-sm mb-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus neque perferendis, dolorum saepe ipsum hic fugiat corrupti, ipsa atque molestiae, nulla recusandae corporis deleniti omnis aperiam vitae accusamus nesciunt. Corrupti?
        </p>
      </div>
      <div class="block md:hidden">
        <Footer></Footer>
      </div>
    </div>
  </div>

  <!-- <div class="flex items-center mb-6">
    <Switch></Switch>
    <span class="font-semibold inline-block ml-2">
      Acerca de mi
    </span>
  </div>
  <h2 class="text-2xl font-semibold leading-none mb-6">
    Hola
    <br>
    soy Christian
  </h2>
  <div class="-mb-3">
    <p class="text-sm mb-3">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus neque perferendis, dolorum saepe ipsum hic fugiat corrupti, ipsa atque molestiae, nulla recusandae corporis deleniti omnis aperiam vitae accusamus nesciunt. Corrupti?
    </p>
    <p class="text-sm mb-3">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus neque perferendis, dolorum saepe ipsum hic fugiat corrupti, ipsa atque molestiae, nulla recusandae corporis deleniti omnis aperiam vitae accusamus nesciunt. Corrupti?
    </p>
    <p class="text-sm mb-3">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus neque perferendis, dolorum saepe ipsum hic fugiat corrupti, ipsa atque molestiae, nulla recusandae corporis deleniti omnis aperiam vitae accusamus nesciunt. Corrupti?
    </p>
  </div>
  <Footer></Footer> -->
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

  @media screen and (min-width: 720px) {
    .about-me-wrapper {
      background: transparent;
      height: auto;
    }

    .about-me-wrapper__image-screen {
      background-color: transparent;
    }
  }
</style>

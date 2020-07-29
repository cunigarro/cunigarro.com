<script>
  import Header from './../components/Header.svelte';
  import Switch from './../components/Switch.svelte';
  import Footer from './../components/Footer.svelte';
  import { mdiCheckboxBlankCircle } from '@mdi/js';
</script>

<div class="about-me-wrapper mx-auto flex flex-col mb-5">
  <div class="container flex-grow flex flex-col flex-grow mx-auto z-10">
    <Header></Header>
    <div class="flex sm:hidden flex-grow mb-16 items-center px-6 d sm:px-20 justify-center sm:justify-start">
      <h1 class="font-thin leading-none text-5xl sm:text-6xl text-white tracking-tighter">
        Christian
        <br>
        Unigarro
        <svg class="w-2 h-2 sm:w-3 sm:h-3 inline -mb-5 sm:-mb-6 -ml-2 sm:-ml-3 text-white fill-current" viewBox="0 0 24 24">
          <path d={mdiCheckboxBlankCircle} />
        </svg>
        <hr class="cu-hr w-20 mt-4">
      </h1>
    </div>
    <hr class="hidden sm:block border-t mb-0">
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

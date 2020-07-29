<script>
  import Header from './../components/Header.svelte';
  import Switch from './../components/Switch.svelte';
  import Footer from './../components/Footer.svelte';
</script>

<div class="about-me-wrapper">
  <div class="container mx-auto flex flex-col">
    <Header></Header>
    <hr class="hidden md:block border-t mb-5">
  </div>
  <div class="about-me-wrapper__image-screen absolute z-0 w-full h-full top-0"></div>
</div>

<div class="container mx-auto px-4 pt-8">
  <div class="flex items-center mb-6">
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
  <Footer></Footer>
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

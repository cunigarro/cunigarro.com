<script>
  import Header from './../components/Header.svelte';
  import Switch from './../components/Switch.svelte';
  import Footer from './../components/Footer.svelte';
</script>

<div class="about-me-wrapper flex flex-col">
  <Header></Header>
</div>

<div class="container mx-auto px-4 pt-8">
  <div class="flex items-center mb-6">
    <Switch></Switch>
    <span class="font-semibold inline-block ml-2">
      Blog
    </span>
  </div>
  <h2 class="text-2xl font-semibold leading-none mb-6">
    Artículo 1
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
  }

  .about-me-wrapper__image-screen {
    background-color: rgba(0, 0, 0, .5);
  }
</style>

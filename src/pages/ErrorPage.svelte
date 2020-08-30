<script>
  import {
    mdiCheckboxBlankCircle,
    mdiChevronDown
  } from '@mdi/js';
  import SocialNetWorks from './../components/SocialNetWorks.svelte';
  import Header from './../components/Header.svelte';
</script>

<div class="relative h-screen">
  <div class="container mx-auto h-screen z-20 relative flex flex-col">
    <Header dynamicColor={false}></Header>
    <div class="flex flex-wrap flex-grow items-center px-4 lg:px-16">
      <h1 class="font-thin leading-none text-5xl sm:text-6xl text-white w-full -mt-24">
        Don't get
        <br>
        lost :)
        <div class="flex justify-between">
          <div>
            <div class="cu-hr w-20 mt-4 mb-4"></div>
            <p class="text-base sm:text-xl mb-0 md:mb-8 font-light">
              <a class="py-1 px-2 inline-flex items-center" href="/">
                <span class="mr-3 no-underline hover:underline">
                  Back to Cunigarro
                </span>
                <img src="/static/images/goto-post-arrow.png" alt="">
              </a>
            </p>
          </div>
        </div>
        <div class="hidden md:block">
          <SocialNetWorks></SocialNetWorks>
        </div>
      </h1>
    </div>
  </div>
  <div class="init-wrapper__image-screen absolute z-10 w-full h-full top-0"></div>
</div>

<style>
  .init-wrapper__image-screen {
    background-color: rgba(45, 49, 71, .4);
  }
</style>

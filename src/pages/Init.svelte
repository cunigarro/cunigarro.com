<script>
  import { onMount } from 'svelte';

  import Header from './../components/Header.svelte';
  import Tags from './../components/Tags.svelte';
  import Accordion from './../components/Accordion.svelte';
  import Footer from './../components/Footer.svelte';
  import Switch from './../components/Switch.svelte';

  let articles = [
    {
      name: 'Artículo 1',
      date: 'May 20',
      category: 'Web',
      imageUrl: 'https://picsum.photos/200/300',
      resume: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nobis labore autem, corrupti natus blanditiis voluptate voluptates numquam deleniti neque doloremque...',
      opened: true
    },
    {
      name: 'Artículo 2',
      date: 'Jun 20',
      category: 'IOT',
      imageUrl: 'https://picsum.photos/200/300',
      resume: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nobis labore autem, corrupti natus blanditiis voluptate voluptates numquam deleniti neque doloremque...',
      opened: false
    },
    {
      name: 'Artículo 3',
      date: 'Jun 20',
      category: 'Mobile',
      imageUrl: 'https://picsum.photos/200/300',
      resume: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nobis labore autem, corrupti natus blanditiis voluptate voluptates numquam deleniti neque doloremque...',
      opened: false
    }
  ];

  function openArticlesController(event) {
    articles.forEach((v, i) => {
      articles[i].opened = event.detail.id == i + 1;
    });
  }

  onMount(() => {
    if (window.location.pathname == '/blog') {
      const blog = document.querySelector('#blog');
      const blogTopPos = blog.offsetTop;
      window.scrollTo(0, blogTopPos);
    }
  });
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

<div
  id="blog"
  class="container mx-auto px-4 pt-8"
>
  <Tags></Tags>
  <hr class="cu-hr mt-4 mb-6">
  <div class="flex items-center mb-6">
    <Switch></Switch>
    <span class="font-semibold inline-block ml-2">
      Blog
    </span>
  </div>
  <h2 class="text-2xl font-semibold leading-none mb-6">
    Este es mi blog
    <br>
    de noticias
  </h2>
  {#each articles as article, index}
    <Accordion
      id={index + 1}
      name={article.name}
      date={article.date}
      category={article.category}
      imageUrl={article.imageUrl}
      resume={article.resume}
      open={article.opened}
      on:opened={openArticlesController}
    ></Accordion>
  {/each}
  <Footer></Footer>
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

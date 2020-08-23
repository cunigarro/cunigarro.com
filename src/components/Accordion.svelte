<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let id;
  export let articleSlug;
  export let title;
  export let date;
  export let category;
  export let imageUrl;
  export let resume;
  export let open = false;

  function toggleSection() {
    if (!open) {
      open = !open;
      dispatch('opened', {
        open,
        id
      });
    }
  }
</script>

<div class="border-t py-5">
  <div class="flex mb-1 block sm:hidden">
    <p class="text-xs flex-grow">
      {date} - {category}
    </p>
    <div class="flex-grow-0">
      <button
        on:click={toggleSection}
        class="block {open ? 'cursor-default' : 'cursor-pointer'}"
      >
        {#if open}
          <svg class="w-6 h-6 text-orange" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,13H5V11H19V13Z" />
          </svg>
        {:else}
          <svg class="w-6 h-6 text-orange" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        {/if}
      </button>
    </div>
  </div>
  <div class="grid grid-cols-12">
    <p class="text-xs col-span-4 xl:col-span-3 pt-1 hidden sm:block">
      {date} - {category}
    </p>

    <div class="col-span-12 sm:col-span-8 xl:col-span-9">
      <div class="flex items-center {open ? 'mb-4' : ''}">
        <h2 class="text-lg font-semibold flex-grow">
          {title}
        </h2>

        <button
          on:click={toggleSection}
          class="hidden sm:block {open ? 'cursor-default' : 'cursor-pointer'}"
        >
          {#if open}
            <svg class="w-6 h-6 text-orange" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H5V11H19V13Z" />
            </svg>
          {:else}
            <svg class="w-6 h-6 text-orange" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
            </svg>
          {/if}
        </button>
      </div>

      {#if open}
        <img class="w-full h-48 rounded-lg mb-4 object-cover" src={imageUrl} alt="">
        <p class="text-sm mb-3">
          {resume}
        </p>
        <p class="mb-0 text-sm text-right">
          <a class="text-orange no-underline hover:underline" href="/blog/{articleSlug}">
            Go to post
          </a>
        </p>
      {/if}
    </div>
  </div>
</div>

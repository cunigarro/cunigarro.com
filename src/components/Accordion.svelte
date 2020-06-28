<script>
  export let name;
  export let date;
  export let category;
  export let imageUrl;
  export let resume;

  let open = false;

  function toggleSection() {
    open = !open;
  }
</script>

<div class="border-t py-5">
  <div class="flex mb-1">
    <p class="text-xs flex-grow">
      {date} - {category}
    </p>
    <div class="flex-grow-0">
      <button
        on:click={toggleSection}
        class="block"
      >
        {#if open}
          <svg class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,13H5V11H19V13Z" />
          </svg>
        {:else}
          <svg class="w-6 h-6" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
          </svg>
        {/if}
      </button>
    </div>
  </div>
  <h2
    class="text-lg font-semibold {open ? 'mb-4' : ''}"
  >
    {name}
  </h2>

  {#if open}
    <img class="w-full h-48 rounded-lg mb-4" src={imageUrl} alt="">
    <p class="text-sm mb-0">
      {resume}
    </p>
  {/if}
</div>

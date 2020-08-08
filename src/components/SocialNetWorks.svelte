<script>
  export let iconsCentered = false;

  import {
    mdiInstagram,
    mdiTwitter,
    mdiLinkedin
  } from '@mdi/js';
</script>

<div class="py-8 flex justify-center {!iconsCentered ? 'md:justify-start' : ''}">
  <a class="text-color" href="">
    <svg class="w-8 h-8 mx-2" viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiInstagram} />
    </svg>
  </a>

  <a class="text-color" href="">
    <svg class="w-8 h-8 mx-2" viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiTwitter} />
    </svg>
  </a>

  <a class="text-color" href="">
    <svg class="w-8 h-8 mx-2" viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiLinkedin} />
    </svg>
  </a>
</div>

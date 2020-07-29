<script>
  export let iconsCentered = false;

  import {
    mdiInstagram,
    mdiTwitter,
    mdiLinkedin
  } from '@mdi/js';
</script>

<div class="py-8 flex justify-center {!iconsCentered ? 'md:justify-start' : ''}">
  <a href="">
    <svg class="w-8 h-8 mx-2" viewBox="0 0 24 24">
      <path fill="#000000" d={mdiInstagram} />
    </svg>
  </a>

  <a href="">
    <svg class="w-8 h-8 mx-2" viewBox="0 0 24 24">
      <path fill="#000000" d={mdiTwitter} />
    </svg>
  </a>

  <a href="">
    <svg class="w-8 h-8 mx-2" viewBox="0 0 24 24">
      <path fill="#000000" d={mdiLinkedin} />
    </svg>
  </a>
</div>

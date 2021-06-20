<script>
  export let iconsCentered = false;

  import {
    mdiLinkedin,
    mdiTwitter,
    mdiGithub
  } from '@mdi/js';
</script>

<div class="py-8 flex justify-center {!iconsCentered ? 'md:justify-start' : ''}">
  <a
    href="https://medium.com/@cunigarro"
    target="_blank">
    <svg class="w-8 h-8 mx-2" viewBox="0 0 45 45">
      <path fill="currentColor" d="M 5 40 V 5 h 35 v 35 H 5 Z m 8.56 -12.63 c 0 0.56 -0.03 0.69 -0.32 1.03 L 10.8 31.4 v 0.4 h 6.97 v -0.4 L 15.3 28.4 c -0.29 -0.34 -0.34 -0.5 -0.34 -1.03 v -8.95 l 6.13 13.36 h 0.71 l 5.26 -13.36 v 10.64 c 0 0.3 0 0.35 -0.19 0.53 l -1.85 1.8 v 0.4 h 9.2 v -0.4 l -1.83 -1.8 c -0.18 -0.18 -0.2 -0.24 -0.2 -0.53 V 15.94 c 0 -0.3 0.02 -0.35 0.2 -0.53 l 1.82 -1.8 v -0.4 h -6.47 l -4.62 11.55 l -5.2 -11.54 h -6.8 v 0.4 l 2.15 2.63 c 0.24 0.3 0.29 0.37 0.29 0.77 v 10.35 Z" />
    </svg>
  </a>

  <a
    href="https://twitter.com/_cunigarro"
    target="_blank"
  >
    <svg class="w-8 h-8 mx-2" viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiTwitter} />
    </svg>
  </a>

  <a
    href="https://github.com/cunigarro"
    target="_blank"
  >
    <svg class="w-8 h-8 mx-2" viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiGithub} />
    </svg>
  </a>

  <a
    href="https://linkedin.com/in/cunigarro"
    target="_blank"
  >
    <svg class="w-8 h-8 mx-2" viewBox="0 0 24 24">
      <path fill="currentColor" d={mdiLinkedin} />
    </svg>
  </a>
</div>

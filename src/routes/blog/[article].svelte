<script context="module">
	export async function load({ page, fetch, session, context }) {
    const data = page.params.article;

    return {
      props: {
        article: data
      }
    };
	}
</script>

<script>
  export let article;
</script>

<div>
  {article}
</div>

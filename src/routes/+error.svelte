<script>
  import { page } from '$app/stores';
  import error from '$lib/assets/icons/error.svg';
</script>

<svelte:head>
  <title>The Pony Express - {$page.status}</title>
</svelte:head>

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%;">
  <img style="width: 80px; height: 80px" src="{error}" alt="Page with question mark over it">
  <h1 style="text-align: center;">{$page.status}: {$page.error?.message ?? 'Something went wrong...'}</h1>
</div>


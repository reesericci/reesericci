<script>
	import avatarUrl from "$lib/assets/avatar.png"
</script>

<svelte:head>
	<title>reeseric.ci</title>
	<link rel="icon" type="image/png" href={avatarUrl}>
</svelte:head>

<a href="/"><h1>reeseric.ci</h1></a>

<slot></slot>

<style>
  @import url("$lib/assets/fonts/pp-editorial-new/pp-editorial-new.css");
  @import url('simpledotcss/simple.min.css');

 :global(:root) {
   font-family: "PP Editorial New", sans-serif;
 }
  
  a {
    text-decoration: none;
    color: orange;
  }
</style>

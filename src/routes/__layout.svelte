<svelte:head>
	<title>reeseric.ci</title>
	<link rel="icon" type="image/png" href="/src/lib/assets/avatar.png">
</svelte:head>

<a href="/"><h1>reeseric.ci</h1></a>

<slot></slot>

<style>
  @import url("$lib/assets/fonts/pp-editorial-new/pp-editorial-new.css");

 :global(:root) {
   font-family: "PP Editorial New", sans-serif;
 }
  
  a {
    text-decoration: none;
    color: black;
  }
</style>

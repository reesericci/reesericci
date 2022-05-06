<script>
	import Part from "$lib/tools/flagmaker/Part.svelte"
	import html2canvas from "html2canvas"
  import ColorPicker from "$lib/tools/flagmaker/ColorPicker.svelte"
  import { onMount } from "svelte"
	let parts = 1
	let partsArray = []
	
	function getRandomInt(min, max) {
  		min = Math.ceil(min);
  		max = Math.floor(max);
  		return Math.floor(Math.random() * (max - min + 1) + min);
	}
	
  function randomHex() {
    return "#" + Math.floor(Math.random()*16777215).toString(16)
  }

	function randomFlag() {
		partsArray = []
		parts = getRandomInt(1,6)
	}

	async function downloadFlag() {
		html2canvas(document.querySelector("#flag")).then(canvas => {
			const img = canvas.toDataURL('image/png')
			window.location.href = img
		})
	}

  $: if(parts > partsArray.length) {
      while(partsArray.length < parts) {
          partsArray = [...partsArray, randomHex()]
      }
    }

  $: if(parts < partsArray.length) {
      while(partsArray.length > parts) {
          partsArray.length = partsArray.length - 1;
      }
  }

  let colorpicker = {}


</script>

<main>
  <h2>flag maker</h2>
	<label for="parts">Number of parts:</label>
	<div style="display: flex;">
		<input name="parts" style="" type="range" min="1" max="6" bind:value={parts}>
		<label for="parts" style="padding: 0 1rem;">{parts}</label>
	</div>

	{#each partsArray as color,i}
  <div style="margin-bottom: 1rem;">
	  <label for={`part-color-${i+1}`} style="padding-bottom: 0.5rem;">part color #{i + 1}</label>
    <ColorPicker name={`part-color-${i+1}`} bind:value={color}></ColorPicker>
  </div>
	{/each}

  <div id="flag">
	  {#each partsArray as color}
		  <Part color={color}></Part>
		{/each}
	</div>


	<div style="display: flex; gap: 0.5rem;">
		<button on:click={randomFlag}>Random flag</button>
		<button on:click={downloadFlag}>
			Download flag
		</button>
	</div>
</main>

<style>

	#flag {
		width:50%;
		aspect-ratio: 3 / 2;
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
	}
	label {
		display: block;
	}
	main {
		padding-bottom: 1rem;
	}
	
</style>

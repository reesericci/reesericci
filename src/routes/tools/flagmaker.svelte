<script>
	import Part from "$lib/tools/flagmaker/Part.svelte"
	import html2canvas from "html2canvas"
	let parts = 1
	let partsArray = []

	async function downloadFlag() {
		html2canvas(document.querySelector("#flag")).then(canvas => {
			const img = canvas.toDataURL('image/png')
			window.location.href = img
		})
	}

	$: {
		partsArray = partsArray;
		if(partsArray.length > parts) {
			for (let i = 0; i < partsArray.length - parts; i++) {
				partsArray.pop()
			}
		} else if(partsArray.length < parts) {
			for (let i = 0; i < parts - partsArray.length; i++) {
				partsArray.push("#" + Math.floor(Math.random()*16777215).toString(16))
			}
		}

	}

</script>

<main>
  <h2>flag maker</h2>
	<label for="parts">Number of parts:</label>
	<div style="display: flex;">
		<input name="parts" style="" type="range" min="1" max="6" bind:value={parts}>
		<label for="parts" style="padding: 0 1rem;">{parts}</label>
	</div>

	{#each partsArray as color,i}
	<label for={`part-color-${i+1}`} style="padding-bottom: 0.5rem;">part color #{i + 1}</label>
	<div>
		<input name={`part-color-${i+1}`} bind:value={color}>
	</div>
	{/each}

	<div id="wrapper">
		<div id="flag">
		{#each partsArray as color}
			<Part color={color}></Part>
		{/each}
		</div>
	</div>

	<button on:click={downloadFlag}>
		Download Flag
	</button>
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

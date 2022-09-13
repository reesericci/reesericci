<script>
	import { writable } from 'svelte/store';
	import InputRange from "./InputRange.svelte"
	
	export let heading;
	export let unit;
	export let store = writable([]);
	
	let inputs = 0;
	let inputsArray = [];
	
	$: if(inputs > inputsArray.length) {
		while(inputsArray.length < inputs) {
				inputsArray = [...inputsArray, {grade: 100, enabled: true}]
		}
	}
  $: if(inputs < inputsArray.length) {
      while(inputsArray.length > inputs) {
          inputsArray.length = inputsArray.length - 1;
      }
  }
	
	$: store.set(inputsArray)
	
</script>

<div>
	<label for="assignments">{@html heading}</label>
	<InputRange name={unit + "s"} bind:value={inputs} min="0" max="20"></InputRange>
</div>

{#each inputsArray as input,i}
	<div class="flex-gap-1">
		<input bind:checked={input.enabled} type="checkbox">
		<input class={input.enabled} name={`${unit}-${i}`} disabled={!input.enabled} bind:value={input.grade} type="range" min="0" max="100">
		{#if input.enabled}
		<label class="input-label" for={`${unit}-${i}`}>{input.grade}</label>
		{/if}
	</div>
{/each}

<style>
	.flex-gap-1 {
		display: flex;
		gap: 1rem;
	}
	
	label {
		display: block;
	}
	
	.input-label {
		padding-top: 0.3rem;
	}
	
	.false {
		opacity: 0.5;
	}
	
	.true {
		opacity: 1;
	}
	
	.short {
		width:3rem;
		text-align: center;
	}
	

</style>

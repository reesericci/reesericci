<script>
	export let value;
	export let max;
	export let min;
	export let name;
	
</script>

<div class="flex-gap-1">
	<input name={name} bind:value={value} type="range" min={min} max={max}>
	<input for={name} class="input-label short" bind:value>
</div>

<style>
	.flex-gap-1 {
		display: flex;
		gap: 1rem;
	}
	
	.input-label {
		padding-top: 0.3rem;
	}
	
	.short {
		width:3rem;
		text-align: center;
	}
</style>


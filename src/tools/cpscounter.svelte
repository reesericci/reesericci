<script>
	let clicks = 0;
	let cps = "counting"
	let done = false
	let start = false

	function finished() {
		cps = clicks / 10
		done = true
	}

	let clickTimeout = null


	function startCps() {
		start = true;
		clickTimeout = setTimeout(finished, 10000)
	}

	let cooldown = false

	function reset() {
		if(cooldown == false) {
			window.clearTimeout(clickTimeout)
			clickTimeout = setTimeout(finished,10000)
			done = false;
			clicks = 0;
		}
	}

	$: {
		if(done == true)  {
			cooldown = true

			const timeout = setTimeout(() => { cooldown = false }, 1000)
		}
	}

</script>

{#if start == false}
<button on:click={startCps}>Start CPS</button>
{:else if done == true}
	<button on:click={reset}>
	Start over
</button>
{:else}
<button class="click" on:click={() => { clicks++ }}>
	Click
</button>
{/if}

{#if done == true}
<h3>
	CPS: {cps}
	<br>
	<br>
	Total clicks: {clicks}
</h3>
{/if}

<style>
	.click {
		width:5rem;
		height:5rem;
	}
</style>

<script>
    export let copied;
    export let text;
    async function copy() {
        await navigator.clipboard.writeText(copied)
    }

</script>

<button on:click={copy}>{text}</button>

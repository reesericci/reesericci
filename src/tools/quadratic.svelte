<script>
	let a = 0;
	let b = 0;
	let c = 0;
	
	$: solved1 = ((0-b) + Math.sqrt((b*b) - 4*a*c)) / (2*a)
	$: solved2 = ((0-b) - Math.sqrt((b*b) - 4*a*c)) / (2*a)
</script>

<label for="a">A-value</label>
<input name="a" type="number" bind:value={a}>
<br>
<label for="b">B-value</label>
<input name="b" type="number" bind:value={b}>
<br>
<label for="c">C-value</label>
<input name="c" type="number" bind:value={c}>

<h3>
	Solution #1: <b>{solved1}</b><br>
	Solution #2: <b>{solved2}</b>
</h3>

<code>

\<script\>
    let a = 0;
    let b = 0;
    let c = 0;
    
    $: solved1 = ((0-b) + Math.sqrt((b*b) - 4*a*c)) / (2*a)
    $: solved2 = ((0-b) - Math.sqrt((b*b) - 4*a*c)) / (2*a)
\</script\>

\<label for="a"\>A-value\</label\>
\<input name="a" type="number" bind:value=\{a\}\>
\<br\>
\<label for="b"\>B-value\</label\>
\<input name="b" type="number" bind:value=\{b\}\>
<br>
\<label for="c"\>C-value\</label\>
\<input name="c" type="number" bind:value=\{c\}\>

\<h3\>
    Solution #1: \<b\>\{solved1\}\</b>\<br>
    Solution #2: \<b\>{solved2\}\</b\>
\</h3\>

</code>

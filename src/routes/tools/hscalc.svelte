<script>
	import { writable } from 'svelte/store';
	import InputGroup from "$lib/tools/hscalc/InputGroup.svelte"
	import InputRange from "$lib/tools/hscalc/InputRange.svelte"
	
	function avg(arr) {
		let total = 0;
		let disabled = 0;
		arr.forEach((assignment) => {
			if(assignment.enabled) total += assignment.grade
			else disabled++
		})
				
		return isNaN(total/(arr.length - disabled)) ? 100 : total/(arr.length - disabled)
	}

	let dailyWorkArr = writable([]);
	let quizzesArr = writable([]);
	let testsArr = writable([]);
	
	let prevGradeAvg = 100
	
	let finals = 100;
	
	$: dailyWork = avg($dailyWorkArr)
	$: quizzes = avg($quizzesArr)
	$: tests = avg($testsArr)
	$: curGradeAvg = Math.round(tests * 0.15 + quizzes * 0.1 + dailyWork * 0.75)
	$: grade = (curGradeAvg * 0.4) + (prevGradeAvg * 0.4) + (finals * 0.2)
	
	
</script>

<h2>
	HS Grade Calculator AISD
</h2>

<div>
	<label for="prevgrade">Previous grading period grade:</label>
	<InputRange name="prevgrade" bind:value={prevGradeAvg} min="0" max="100"></InputRange>
</div>

<h3>
	Current grading period:
</h3>

<InputGroup store={dailyWorkArr} unit="assignment" heading="Number of <b>daily work</b> assignments:"></InputGroup>

<InputGroup store={quizzesArr} unit="quiz" heading="Number of <b>quizzes</b>:"></InputGroup>

<InputGroup store={testsArr} unit="test" heading="Number of <b>tests</b>:"></InputGroup>

<p class="big-p">
	Daily Work: {Math.round(dailyWork)}<br>
	Quizzes: {Math.round(quizzes)}<br>
	Tests: {Math.round(tests)}<br>
	<b>9wks Grade: {curGradeAvg}</b>
</p>

<div>
	<label for="finals" class="big-p">Finals grade:</label>
	<InputRange name="finals" bind:value={finals} min="0" max="100"></InputRange>
</div>


<h1>
	Semester Grade: {grade}
</h1>

<style>
	
	label {
		display: block;
	}
	
	br {
		margin-bottom: 0.5rem;
	}
	
	.big-p {
		font-size: 1.25rem;
		font-weight: 700;
	}
</style>

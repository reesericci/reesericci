<script>
	import { writable } from 'svelte/store';
	import InputGroup from "./InputGroup.svelte"
	
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
	
	$: dailyWork = avg($dailyWorkArr)
	$: quizzes = avg($quizzesArr)
	$: tests = avg($testsArr)
	
	$: grade = Math.round(tests * 0.15 + quizzes * 0.1 + dailyWork * 0.75)
	
	
</script>

<InputGroup store={dailyWorkArr} unit="assignment" heading="Number of <b>daily work</b> assignments:"></InputGroup>

<InputGroup store={quizzesArr} unit="quiz" heading="Number of <b>quizzes</b>:"></InputGroup>

<InputGroup store={testsArr} unit="test" heading="Number of <b>tests</b>:"></InputGroup>

<h3>
	Daily Work: {Math.round(dailyWork)}<br>
	Quizzes: {Math.round(quizzes)}<br>
	Tests: {Math.round(tests)}
</h3>

<h1>
	Total Grade: {grade}
</h1>

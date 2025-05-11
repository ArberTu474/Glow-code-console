function runExercise(exercise) {
  printPrompt()

  exercise()
}

const exerciseList = [d1ex1, d1ex2, 
                      d2ex1, d2ex2, d2ex3, 
                      d3ex1, d3ex2, d3ex3, d3ex4, d3ex5, d3ex6
                    ]

runButton.addEventListener('click', () => {
  const selectedExercise = getCookie('exerciseNumber')

  runExercise(exerciseList[selectedExercise - 1])
})

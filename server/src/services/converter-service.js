function converterService(digitString) {
	const digitMap = {
  	0: ' ',
		1: '.',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  let possibilities = ['']

  ;[...digitString].forEach(digit => {
    const letters = digitMap[digit]
    let temp = []

    possibilities.forEach(possibility => {
      [...letters].forEach(letter => {
        temp.push(possibility + letter)
      })
    })
    possibilities = temp.slice()
    temp = []
  })
  return possibilities
}

module.exports = converterService

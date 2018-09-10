let solution = require('./sticks');

describe('Tests for sticks', () => {
  
  const testCases = [
    {
      input: [5,4,4,2,2,8],
      answer: [6,4,2,1]
    },
    {
      input: [1,2,3,4,3,3,2,1],
      answer: [8,6,4,1]
    },
    {
      input: [1,5,5,15,2,9,5,18,22,35,42,1],
      answer: [12,10,9,6,5,4,3,2,1]
    },
    {
      input: [52,83,94,94,15,52,8,8,8,15,52,94,94],
      answer: [13,10,8,5,4]
    },
    {
      input: null,
      answer: []
    },
    {
      input: undefined,
      answer: []
    },
    {
      input: {
        sticks: [5,2,32,1,8]
      },
      answer: []
    },
  ];

  testCases.forEach(test => {
    it (`sticks functions with input: ${test.input}`, () => {
      const answer = solution(test.input);
      expect(answer).toEqual(test.answer);
    })
  })


})
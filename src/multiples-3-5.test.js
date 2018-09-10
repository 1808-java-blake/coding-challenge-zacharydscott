let solution = require('./multiples-3-5');

describe('Tests for multiples-3-5', () => {
  
  const testCases = [
    {
      input: 10,
      answer: 23
    },
    {
      input: 0,
      answer: 0
    },
    {
      input: null,
      answer: -1
    }, 
    {
      input: 25,
      answer: 143
    },
    {
      input: 5002,
      answer: 5839169
    },
    {
      input: 9251,
      answer: 19972293
    }, 
    {
      input: 14,
      answer: 45
    },
    {
      input: 3,
      answer: 0
    },
    {
      input: "633",
      answer: -1
    }, 
  ];

  testCases.forEach(test => {
    it (`multiplies-3-5 functions with input: ${test.input}`, () => {
      const answer = solution(test.input);
      expect(answer).toEqual(test.answer);
    })
  })
  


})
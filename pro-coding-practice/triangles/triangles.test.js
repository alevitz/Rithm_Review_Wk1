// DON'T WORRY ABOUT WRITING THESE TESTS!

// This test file is just here for you to help you think about
// how you can break apart the logic of the application into
// smaller, more easily testable pieces.

it('should validate edge lengths', function () {
  expect(validateEdge(2)).toBe(true);
  // TODO: handle more validation cases here
  expect(validateEdge(20)).toBe(true);
  expect(validateEdge(0)).toBe(false);
  expect(validateEdge(55)).toBe(false);
  expect(validateEdge(-2)).toBe(false);
  expect(validateEdge(2.5)).toBe(false);
});

it('should calculate areas', function () {
  // TODO
  expect(getArea(3,6)).toEqual(9);
  
});

it('should calculate hypotenuses', function () {
  // TODO
expect(getHypot(3,4)).toEqual(5);
expect(getHypot(5,5)).toEqual(7);
});

it('should craft correct message', function () {
  // we'd like to have tests like this:  
  //
  // expect(printHypotenuseAndArea(5, 6)).toEqual(
  //     "Hypotenuse is 5 and area is 6.");
  //
  expect(printHypotenuseAndArea(5, 6)).toEqual(  
    "Hypotenuse is 5 and area is 6.");
  // TODO test "big triangles" here
  expect(printHypotenuseAndArea(5, 60)).toEqual(  
    "Hypotenuse is 5 and area is 60. That's a really big triangle!");
});

it('should generate correct results', function () {
  // we'd like to have tests like this:
  // 
  // expect(getResultsFromSideLengths(3, 4)).toEqual(
  //   {aMsg: "", bMsg: "", msg: "Hypotenuse is 5 and area is 6."});
  //   
  // TODO test an invalid submission here
  expect(getResultsFromSideLengths(3, 4)).toEqual(
       {aMsg: "", bMsg: "", msg: "Hypotenuse is 5 and area is 6."});
});



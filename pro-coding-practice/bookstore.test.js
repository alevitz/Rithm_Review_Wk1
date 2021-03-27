it('should price books correctly', function () {
  // TODO
  expect(getPrice(books[1])).toEqual(10.80);    
  expect(getPrice(books[0])).toEqual(5.40);    
    
});

// TODO: additional tests here ...
it('should get number of books on hand correctly', function(){
  expect(sellBook(books[3])).toEqual(3); 
});

it('should throw error when number of books is below 1 already', function() {
  expect(function(){sellBook(books[2])}).toThrow(new Error("Not enough copies on hand!")); 
});
  

const fetchBreedDescription = require('../breedFetcher');
const assert = require('chai').assert;
// { ***...*** } this is import as OBJECT

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  
  it('returns null when breed passed in is invalid/non-existent', (done) => {
    fetchBreedDescription(null, (err, desc) => {
      assert.equal(err, "Breed not found."); 
                   /// (actual, expected)

      assert.equal(desc, null)

      done();
    })
  })
});
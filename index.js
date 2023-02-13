// Code your solution here

function filter(collection, cb) {
    const newCollection = [];

    for (const user of collection) {
        if (cb(user)) {
            newCollection.push(user);
        }
    }
    return newCollection
}


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function findMatching(drivers, driverToFind) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === driverToFind.toLowerCase()
    })
  }

  function fuzzyMatch(drivers, driverToFind) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, driverToFind.length) === driverToFind.toLowerCase()
    })
  }

function matchName(drivers, driverToFind) {
    return drivers.filter(function (driver) {
        return driver.name === driverToFind
    })
}


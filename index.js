// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (arr) {
  return arr.slice(0, 2);
}

const returnLastTwoDrivers = function (arr) {
  return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(factor) {
  return function (x) {
    return x * factor
  }
}

const fareMultiplier = createFareMultiplier(2)

function createFareMultiplier(factor) {
  return function (x) {
    return x * factor
  }
}

const fareQuintupler = createFareMultiplier(5)
fareQuintupler(5)

function fareDoubler(x) {
  return x * 2
}

function fareTripler(x) {
  return x * 3
}

function selectDifferentDrivers(arr, options) {
  return options(arr)
};

selectDifferentDrivers(drivers, returnFirstTwoDrivers)

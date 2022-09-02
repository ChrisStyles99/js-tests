exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    const index = arr.indexOf(item);
    return index;
  },

  sum: function(arr) {
    const sum = arr.reduce((acc, item) => {
      return acc + item;
    }, 0);
    return sum;
  },

  remove: function(arr, item) {
    return arr.filter(val => val !== item);
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    // arr.push(item);
    // return arr;
    return [...arr, item];
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr; 
  },

  prepend: function(arr, item) {
    return [item, ...arr];
  },

  curtail: function(arr) {
    const [first, ...rest] = arr;
    // const newArr = arr.slice(1);
    return rest;
  },

  concat: function(arr1, arr2) {
    // return arr1.concat(arr2);
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};

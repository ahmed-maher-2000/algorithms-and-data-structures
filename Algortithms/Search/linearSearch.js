function linearSearch(arr, value) {
  for (let item of arr) {
    if (item === value) return true;
  }
  return false;
}

module.exports = { linearSearch };

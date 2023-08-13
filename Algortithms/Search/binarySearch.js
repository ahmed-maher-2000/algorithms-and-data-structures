function binarySearch(arr, value) {
  let low = 0,
    high = arr.length;
  while (low < high) {
    const mid = Math.floor((high + low) / 2);
    if (arr[mid] === value) return true;
    else if (arr[mid] < value) low = mid + 1;
    else high = mid;
  }

  return false;
}

module.exports = { binarySearch };

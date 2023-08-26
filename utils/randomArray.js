module.exports = (n) => {
  let randomArray = [];
  for (let i = 0; i < n; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
  }
  return randomArray;
};

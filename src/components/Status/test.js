const value = 12;
const arr = [1, 2, 12];

const contain = (inputNum, arrOfNum) => {
  //Convert arg to strings
  const input = inputNum.toString(); //?
  const arr = arrOfNum.map(el => el.toString()); //?
  //loop over de ArrOfNum
  let result = arr.filter(element => {
    //Compare using regEx if inputNum is contained in the present element of ArrOfNUm
    const reg = new RegExp("^" + value + "*"); //?
    const isContained = reg.test(element); //?
    return isContained;
  });
  return result;
};

contain(value, arr); //?

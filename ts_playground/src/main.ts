type all = number | string | boolean;
function moveZeros(arr:all[]) {
  // без нулей
  let newArr: all[] = arr.filter((element) => element !== 0);// нули
  const zeros: all[] = arr.filter((element) => element === 0);// нули
  newArr = [...newArr, ...zeros];
  return newArr;
}
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]
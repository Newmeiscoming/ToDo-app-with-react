let arr = ("1 2 3 4 5 6").split(" ").map(Number);
arr = arr.filter((element)=>{
      return (element!==3);
})
console.log(arr);

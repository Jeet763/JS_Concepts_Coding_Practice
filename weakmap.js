let weakmap = new WeakMap();
let obj = { name : "adam "};
weakMap.set(obj , "Employee");

obj = null ; 
console.log(weakMap.get(obj));

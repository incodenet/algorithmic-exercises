// Data types / variables

// var a;
// a = 1;
// var a = 2;
// console.log(a)

// let b;
// b = 1;
// // let b = 3; // 'SyntaxError: 'b' has already been declared
// console.log(b);

// const c;  // SyntaxError: Missing initializer in const declaration
// c = 1;        // TypeError: Assignment to constant variable
// const c = 5;  // SyntaxError: Indextifier 'c' has already been declared

// Scope/Hoisting

// console.log(x) // ReferenceError: x is not defined

// function foo() {
//   console.log(x) // RefferenceError: x is not defined - when nowhere x defined in the function, or undefined when there is x in somewhere in the foo scope

//   if(true) {
//     var x = 1; // hoisted to top of foo
//   }

//   console.log(x) // 1
// }

// foo()

// Context

// const obj = {
//   f: function(){ console.log(this) },
//   j: () => console.log(this)
// }

// obj.f(); // retruned obj
// obj.j(); // Will return the context when called, Window in this case

// let a = obj.f;
// a();            // Will return Window
// let b = obj.j;
// b();            // Also will return Window

// Closures

// function a(x) {
//   return function b() {
//     return x
//   }
// }

// let c = a(1);

// console.log(c())

// Event loop

console.log(1);

setTimeout(() => console.log(2), 0);

console.log(3);

let p = new Promise((res, rej) => {
  console.log(4);
  rej();
});

console.log(5);

p.then(() => console.log(6)).catch(() => console.log(7));

console.log(8);

# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.
// The result of this code will be "1" displayed on the console
// In that instance x works as a global variable
// If function f1() is called the result will be "2" displayed on the console,
// as x will work as a local variable (inside the f1() function).

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

// The output will be:
// 10
// undefined
// f1() is called and displays on the console the value
// of global variable x
// y variable is 'called' by console.log(y) OUTSIDE the
/ function and thus it's undefined

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

// The output will be:
// 9 (global variable x is 'called' on line 63)
// from f1(x) the value of the LOCAL val becomes 10;
// As we go out of the function f1 the val loses its value (it's undefined)
// With line 65 y becomes an object with a key x with value of 9
// Function f2 with y as an argument returns { x: 10 };
// but y is still { x: 9 } ???????
// TOTALLY CONFUSED
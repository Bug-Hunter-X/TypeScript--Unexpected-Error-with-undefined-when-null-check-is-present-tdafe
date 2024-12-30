function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); //Output: Hello, world!
console.log(greet("John")); //Output: Hello, John!
console.log(greet(undefined)); //Error: Argument of type 'undefined' is not assignable to parameter of type 'string | null'.
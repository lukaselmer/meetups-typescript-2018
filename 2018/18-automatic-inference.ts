export function demo() { }

//#region automatic inference: assignment
let a = 4;
let b = 'string';
let c = { some: 'object' };

a = b;
a = c;

b = a;
b = c;

c = a;
c = b;
//#endregion

//#region automatic inference: function calls
export class Some {
  some: string;
}

export class Other {
  other: string;
}

function printOther(other: Other) {
  console.log(other);
}

const someA = new Some();
printOther(someA);
//#endregion

//#region careful with any types
// the any on this line...
const someB: any = new Some();
// ...is like a cast on that line!
printOther(someB);
//#endregion

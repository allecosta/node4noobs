import { sayHello, sayGoodBye } from "./greetings.mjs";
import { add, div } from "./math.mjs";
import main, { version } from "./mixed.mjs";

import mainFunction from "./main.mjs";


sayHello();

console.log(add(25, 5));
console.log(mainFunction());
console.log(version);

main();

// or import all
import * as math from './math.mjs';

console.log(math.div(16, 2));
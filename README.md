# 3D-MATH-LIB

#### by -> Ezequiel Sperafico

### An easy to use, object oriented 3D and 2D math lib.

## Install

### Obs: project use pnpm, but you can use by one of your choice (npm, yarn, ...).

`git clone https://github.com/Ezequiel-Sperafico/3D-math-lib.git`
`pnpm install`
`pnpm build`

### This will clone and build the typescript into a js build; you can either embed the `src` folder into a typescript project or use the `build` folder generated with `pnpm build` for vanilla javascript projects.

## Modules

### **Vector**

### The `Vector` class represents a vector with 2, 3 and 4 dimensions, and expose all operations between vectors

### Example:

``
import { Vector } from "src/vector/vector";
// OR, for js
import { Vector } from "build/vector/vector.js";'

const vec2A = new Vector([41, 52]);
``

### **Sum**

``
const vec3A = new Vector([6, 17, 3]);
const vec3B = new Vector([16, 8, 34]);

const vec3C = vec3A.sum(vec3B);

console.log(vec3C.toArr());

// Log: [22, 25, 37]
// The result of the operation is a brand new Vector object
``

### **Sum - assign**

``
const vec3A = new Vector([6, 17, 3]);
const vec3B = new Vector([16, 8, 34]);

vec3A.sumAssign(vec3B);

console.log(vec3A.toArr());

// Log: [22, 25, 37]
// The result of the operation is stored inside the caller Vector object
``

### **Subtract**

``
const vec3A = new Vector([6, 17, 3]);
const vec3B = new Vector([16, 8, 34]);

const vec3C = vec3A.subtract(vec3B);

console.log(vec3C.toArr());

// Log: [-10, 9, -31]
``

### **Subtract - assign**

``
const vec3A = new Vector([6, 17, 3]);
const vec3B = new Vector([16, 8, 34]);

vec3A.subtractAssign(vec3B);

console.log(vec3A.toArr());

// Log: [-10, 9, -31]
``

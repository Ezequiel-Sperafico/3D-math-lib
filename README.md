# 3D-MATH-LIB

#### An easy to use, object oriented 3D and 2D math lib.

## Install

Obs: project use pnpm, but you can use any package manager (npm, yarn, ...).

```bash
git clone https://github.com/Ezequiel-Sperafico/3D-math-lib.git
pnpm install
pnpm build
```

This will clone and build the typescript into a js build; you can either embed the `src` folder into a typescript project or use the `build` folder generated with `pnpm build` for vanilla javascript projects.

## Using

### **Vector** module

The `Vector` class represents a vector with 2, 3 and 4 dimensions.

#### Creating a vector

```typescript
import { Vector } from "src/vector/vector";
// OR, for js
import { Vector } from "build/vector/vector.js";

const vec2_new = new Vector([41, 52]);
// or
const vec3_from = Vector.from([3, 38, 9]);
```

#### **Sum**

Add one Vector to another, returning a new Vector object. Vectors sizes must match for the operation.

```typescript
const vec3A = Vector.from([6, 17, 3]);
const vec3B = Vector.from([16, 8, 34]);

const vec3C = vec3A.sum(vec3B);

console.log(vec3C.toArr());

// Result log: [22, 25, 37]
// The result of the operation is a brand new Vector object
```

Or you can just shortcut as below:

```typescript
const vec3 = Vector.from([6, 17, 3]).sum([16, 8, 34]);

console.log(vec3.toArr());

// Result log: [22, 25, 37]
// The result of the operation is a brand new Vector object
```

### **Sum - assign**

Add one Vector to another, storing, and replacing, the result in the caller object; the return is the caller object. Vectors sizes must match for the operation.

```typescript
const vec3 = Vector.from([6, 17, 3]);

vec3.sumAssign([16, 8, 34]);

console.log(vec3.toArr());

// Log: [22, 25, 37]
// The result of the operation is stored inside the caller Vector object
```

### **Subtract**

Subtract one Vector from another, returning a new Vector object. Vectors sizes must match for the operation.

```typescript
const vec3A = Vector.from([6, 17, 3]);

const vec3B = vec3A.subtract([16, 8, 34]);

console.log(vec3B.toArr());

// Log: [-10, 9, -31]
```

### **Subtract - assign**

Subtract one Vector from another, storing, and replacing, the result in the caller object; the return is the caller object. Vectors sizes must match for the operation.

```typescript
const vec3 = Vector.from([6, 17, 3]);

vec3.subtractAssign([16, 8, 34]);

console.log(vec3.toArr());

// Log: [-10, 9, -31]
```

### **Multiply by scalar**

Multiply one Vector by a scalar (i. e. number), returning a new Vector object.

```typescript
const vec3 = Vector.from([6, 17, 3]).multiply(3);

console.log(vec3.toArr());

// Log: [18, 51, 9]
```

### **Multiply by scalar - assign**

Multiply one Vector by a scalar (i. e. number), storing, and replacing, the result in the caller object.

```typescript
const vec3 = Vector.from([6, 17, 3]).multiply(3);

console.log(vec3.toArr());

// Log: [18, 51, 9]
```

### **Divide by scalar**

Divide one Vector by a scalar (i. e. number), returning a new Vector object.

```typescript
const vec3 = Vector.from([6, 17, 3]).divide(3);

console.log(vec3.toArr());

// Log: [2, 5.666666666666667, 1]
```

### **Divide by scalar - assign**

Divide one Vector by a scalar (i. e. number), storing, and replacing, the result in the caller object.

```typescript
const vec3 = Vector.from([6, 17, 3]).divide(3);

console.log(vec3.toArr());

// Log: [2, 5.666666666666667, 1]
```

### **Cross product**

Does the cross product between two vectors, returning a new Vector object; This operation can only be performed between Vector objects of dimension (i. e. length) of 3 and 4.

```typescript
const vec3 = Vector.from([6, 17, 3]).crossProduct([16, 8, 34]);

console.log(vec3.toArr());

// Log: [554, -156, -224]
```

### **Cross product - assign**

Does the cross product between two vectors, storing, and replacing, the result in the caller object. This operation can only be performed between Vector objects of dimension (i. e. length) of 3 and 4.

```typescript
const vec3 = Vector.from([6, 17, 3]);

vec3.crossProductAssign([16, 8, 34]);

console.log(vec3.toArr());

// Log: [554, -156, -224]
```

### **Dot product**

Does the dot product between two vectors, returning a scalar (i. e. number).

```typescript
const result = Vector.from([6, 17, 3]).dotProduct([16, 8, 34]);

console.log(result);

// Log: 334
```

##Coming next: Matrices...

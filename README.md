##
[![NPM Version](https://img.shields.io/npm/v/simple-aes-crypto.svg)](https://www.npmjs.org/package/simple-aes-crypto)
[![license](https://img.shields.io/npm/l/simple-aes-crypto)](https://www.npmjs.org/package/simple-aes-crypto)
[![Downloads](https://img.shields.io/npm/dt/simple-aes-crypto)](https://www.npmjs.com/package/simple-aes-crypto)
[![Install Size](https://packagephobia.now.sh/badge?p=simple-aes-crypto)](https://packagephobia.now.sh/result?p=simple-aes-crypto)


## Installation

```bash
npm install simple-aes-crypto
```
Common JS
```javascript
const SimpleAes = require("simple-aes-crypto").default;
```

ES modules

```javascript
import SimpleAes from "simple-aes-crypto";
```

### Example

```javascript
import SimpleAes from "simple-aes-crypto";

const aes = new SimpleAes({
  key: "YOUR_SECRET_KEY",
  salt: "YOUR_SALT", // optional by default auto generate
  bit: 256 // optional by default 256
});

const encrypt = aes.encrypt({ foo: ["Cat", "Dog"] });
const decrypt = aes.decrypt(encrypt);

console.log("encrypt:", encrypt); // encrypt: nE7W6IAVLHc4fLw8QgDjDhz372TbxpvIQiM2HX2Q/pqSgrXsq3xLvbAt9UY/bg7hLhgBpdw=
console.log("decrypt:", decrypt); // decrypt:  { foo: ["Cat", "Dog"] }
```
<br/>

```javascript
import SimpleAes from "simple-aes-crypto";

const aes = new SimpleAes({
  key: "YOUR_SECRET_KEY",
  salt: "YOUR_SALT",
  bit: 256
});

// Define new for invalid output
const newAes = new SimpleAes({
  key: "WRONG_SECRET_KEY",
  salt: "YOUR_SALT",
  bit: 256
});

const encrypt = aes.encrypt({ foo: ["Cat", "Dog"] });
const decrypt = aes.decrypt(encrypt);

const newEncrypt = aes.encrypt("Lorem Ipsum is simply dummy text");
const newDecrypt = newAes.decrypt(newEncrypt);

// Valid
console.log({ encrypt }); // encrypt: nE7W6IAVLHc4fLw8QgDjDhz372TbxpvIQiM2HX2Q/pqSgrXsq3xLvbAt9UY/bg7hLhgBpdw=
console.log({ decrypt }); // decrypt:  { foo: ["Cat", "Dog"] }

// Invalid
console.log({ newEncrypt }); // encrypt: nE7W6IAVLHc4fLw8RQBRUBz372SkSsOFnhkMx+r61L3rc+X4jEABehZV3UkyOYg=
console.log({ newDecrypt }); // decrypt: Invalid continuation byte
```
### Usage
Suggestions usage with function to maximize random results. Here's an example:
```javascript
import SimpleAes from "simple-aes-crypto";

function encrypt(data) {
  const aes = new SimpleAes({ key: "YOUR_SECRET_KEY" }); 
  return aes.encrypt(data);
}

function decrypt(encryption) {
  const aes = new SimpleAes({ key: "YOUR_SECRET_KEY" });
  return aes.decrypt(encryption);
}

const encrypted = encrypt({foo: ["Cat", "Dog"]});
const decrypted = decrypt(encrypted);

console.log({ encrypted }); // encrypted: T58DdEGPnxCULmVOZQLSp5KpHGVS7ywgeJ1eB5KJfpUSLPPnJUuxGF4=
console.log({ decrypted }); // decrypted: { foo: [ 'Cat', 'Dog' ] }
```
or with lambda:
```js
const aes = () => new SimpleAes({ key: "YOUR_SECRET_KEY" })

const encrypt = (data) => aes().encrypt(data);

const decrypt = (encryption) => aes().decrypt(encryption);

const encrypted = encrypt({ foo: ["Cat", "Dog"] }); // encrypted: bxDUTrAOgAgwdbN8tgOXFlEzIGXl9pkmn0HfXHJnof6YjklXh/geKrU=
const decrypted = decrypt(data); // decrypted: { foo: [ 'Cat', 'Dog' ] }
```

#### Thanks & Enjoy 😊


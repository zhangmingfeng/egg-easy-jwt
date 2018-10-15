# egg-easy-jwt
jsonwebtoken plugin for Egg.js.

> NOTE: This plugin just for integrate jsonwebtoken into Egg.js, more documentation please visit [node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken).

# Install

```bash
$ npm i --save egg-easy-jwt
```

## Usage & configuration

- `config/plugin.js`

``` js
exports.jwt = {
  enable: true,
  package: 'egg-easy-jwt'
}
```

### example

```js
// controller.js or service.js
const token = await this.ctx.jwt.sign({
            a: 1,
            b: 2
        }, "secret");
const verify = await this.ctx.jwt.verify(token, "secret");
const decode = this.ctx.jwt.decode(token);
```
more example please visit https://github.com/auth0/node-jsonwebtoken.

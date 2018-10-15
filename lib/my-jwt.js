const jwt = require('jsonwebtoken');
const {merge} = require('lodash');

class MyJwt {
    constructor(app) {
        this.app = app;
        this.JsonWebTokenError = jwt.JsonWebTokenError;
        this.NotBeforeError = jwt.NotBeforeError;
        this.TokenExpiredError = jwt.TokenExpiredError;
    }

    sign(payload, secretOrPrivateKey, options) {
        options = merge(this.app.config.jwt.sign, options || {});
        return new Promise((resolve, reject) => {
            jwt.sign(payload, secretOrPrivateKey, options, (err, token) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(token);
                }
            });
        });
    }

    verify(token, secretOrPrivateKey, options) {
        options = merge(this.app.config.jwt.verify, options || {});
        return new Promise((resolve, reject) => {
            jwt.verify(token, secretOrPrivateKey, options, (err, decoded) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(decoded);
                }
            });
        });

    }

    decode(token, options) {
        options = merge(this.app.config.jwt.decode, options || {});
        return jwt.decode(token, options);
    }
}

module.exports = MyJwt;
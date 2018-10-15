const MyJwt = require('./my-jwt');

module.exports = app => {
    app.jwt = new MyJwt(app);
};

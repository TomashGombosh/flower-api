'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var port = process.env.PORT || 8080;

app.set('view engine', 'ejs');

app.use(_express2.default.static(__dirname + '/public'));

app.use((0, _cors2.default)());

app.use(_passport2.default.initialize());

require('./config/passport')(_passport2.default);

app.get('/', function (req, res) {
    return res.send("Hello my world");
});

var server = app.listen(port, function () {
    var host = server.address().address;
    var post = server.address().port;

    console.log('App on the port at http://%s:%s', host, port);
});
//# sourceMappingURL=index.js.map
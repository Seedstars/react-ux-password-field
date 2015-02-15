'use strict';

var React         = require('react'),
    InputPassword = require('../src/js/react-password-field');

require('normalize.css/normalize.css')
require('./style.scss');

React.render(<InputPassword />, document.getElementById('content'));
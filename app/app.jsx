<<<<<<< HEAD
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
=======
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

//app css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div><h1>React bolier plate 3</h1></div>,
  document.getElementById('app')
);
>>>>>>> d850cb03d65edd895368b68dfaa1812df6bc40c2

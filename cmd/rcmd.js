var Remote = require('ripple-lib').Remote;
var Server = require('ripple-lib').Server;
var Request = require('ripple-lib').Request;
var Transaction = require('ripple-lib').Transaction;

var server = { host: 's-west.ripple.com', port: 443, secure: true };
var server = { host: 'localhost', port: 9002, secure: false };
var tim;

var remote = new Remote({
    servers: [ server ],
    trace: true
});

remote.on('transaction', function(t){

  console.log('transaction', t);
  remote.disconnect();

});

remote.on('connect', function(t){

  console.log('connected', t);
  remote.disconnect();
  clearTimeout(tim);

});

remote.on('onerror', function(t){

  console.log('my onerror', t);
  remote.disconnect();
  process.exit(1);

});

remote.on('error', function(t){

  console.log('! my error', t);
  remote.disconnect();
  process.exit(1);

});


console.log('waiting for connect');

remote.connect();

tim = setTimeout(function() {
  //if (isConnected()
  console.log('timed out');
  remote.disconnect();
  process.exit(1);
}, 8000);

//while (true);

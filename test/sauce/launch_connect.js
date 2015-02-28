
var fs = require("fs");
var sauceConnectLauncher = require('sauce-connect-launcher');

var options = {
	username: 'tonga',
	accessKey: '1553f141-1258-4319-b20d-7743def99fbb',
	verbose: true,
	logger: console.log
};

if (process.env.TRAVIS_JOB_NUMBER) {
    options.tunnelIdentifier = process.env.TRAVIS_JOB_NUMBER;
}

sauceConnectLauncher(, function (err, sauceConnectProcess) {
	console.log("Started Sauce Connect Process", err, sauceConnectProcess != null);
    if (err) {
        process.exit(1);
    } else {
        // keep sc running in background
        //console.log('keep sc running in background');
        //sauceConnectProcess.unref();
        //process.exit(0);
        console.log('gut');
        fs.writeFile('./sc-launcher-readyfile.tmp', '', function(err) {
            if (err) console.log('error writing to sc-launcher-readyfile.tmp', err);
          //if (err) throw err;
        });
    }
    /*
	sauceConnectProcess.close(function () {
		console.log("Closed Sauce Connect process");
	});
    */
});

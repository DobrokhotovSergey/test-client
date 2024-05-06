const ngrok = require('@ngrok/ngrok');

if (process.env.NGROK_ENABLED !== 'true') {
    console.info('Ngrok is not enabled.');
    process.exit(0);
}

ngrok.connect({
    addr: 4000,
    authtoken: 'mz5duxz39lUKGHgXuImNuXmSyAM0p5zMRibQj9UsdwfeSI7SBiFY4bbAmu5xDFyQ',
    domain: 'black-quick-bison-405.mypinata.cloud'
})
.then(listener => console.info(`Exposed to ${listener.url()}`));

process.stdin.resume();

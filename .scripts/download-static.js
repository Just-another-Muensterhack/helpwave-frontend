const path = require('path');
const wget = require('node-wget-js');

const CDN = "https://cdn.helpwave.de";
const dest = path.join(__dirname, '../assets/');

wget({url: `${CDN}/banner.svg`, dest});

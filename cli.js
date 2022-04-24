#!/usr/bin/env node
const commandLineArgs = require('command-line-args')

const optionDefinitions = [
    { name: 'host', alias: 'h', type: String },
    { name: 'port', alias: 'p',type: Number },
    { name: 'origin', alias: 'o', type: String }
]

const options = commandLineArgs(optionDefinitions)
console.log(options)
const {host, port = 3080, origin = 'http://localhost:3000'} = options;
const pat = /^https?:\/\//i;

if (!host) {
    console.log('Api url is required');
    return;
} else if (!pat.test(host)) {
    console.log('Url not valid');
    return;
}
const whitelist = [origin]
const corsOptions = {
    credentials: true,
    origin: function(origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors(corsOptions))
app.use('/', createProxyMiddleware({
    target: host,
    changeOrigin: true
}));
app.listen(port);
console.log('Your new URL is http://localhost:' + port);
console.log('From origin: ' + origin);

#!/usr/bin/env node

const [, , target, port = 3080] = process.argv;
const pat = /^https?:\/\//i;

if (!target) {
    console.log('Api url is required');
    return;
} else if (!pat.test(target)) {
    console.log('Url not valid');
    return;
}

const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors())
app.use('/', createProxyMiddleware({
    target,
    changeOrigin: true
}));
app.listen(port);
console.log('Your new URL is http://localhost:' + port);

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
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
    target,
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers["Access-Control-Allow-Methods"] = "DELETE, POST, GET, OPTIONS, PUT";
        proxyRes.headers["Access-Control-Allow-Headers"] = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With";
    }
}));
app.listen(port);
console.log('Your new URL is http://localhost:'+ port)

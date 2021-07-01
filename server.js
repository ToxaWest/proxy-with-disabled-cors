const express = require('express');
const {createProxyMiddleware} = require('http-proxy-middleware');

const app = express();

const target = process.env.npm_config_API;

app.use('/', createProxyMiddleware({
    target,
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
        proxyRes.headers['Access-Control-Allow-Origin'] = '*';
        proxyRes.headers["Access-Control-Allow-Methods"] = "DELETE, POST, GET, OPTIONS, PUT";
        proxyRes.headers["Access-Control-Allow-Headers"] = "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With";
    }
}));
app.listen(3080);

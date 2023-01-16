
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api/', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }));
app.use('/api/', createProxyMiddleware({ target: 'http://localhost:6000', changeOrigin: true }));

app.listen(1234, () => {
    console.log("Proxy Server Is Running");
});
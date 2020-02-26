const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', { 
       target: 'http://localhost:8080' ,
       secure: false,
       changeOrigin: true,
       pathRewrite: {
        "^/api": ""
       },
    }));
    app.use(createProxyMiddleware('/foo', { 
      target: 'https://m.you.163.com' ,
      secure: false,
      changeOrigin: true,
      pathRewrite: {
       "^/foo": ""
      },
   }));
};
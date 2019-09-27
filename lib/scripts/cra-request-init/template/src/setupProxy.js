// https://create-react-app.dev/docs/proxying-api-requests-in-development
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', proxy({
    target: process.env.REACT_APP_BASE_URL,
    pathRewrite: {
      '^/api': ''
    },
    changeOrigin: true
  }));
};
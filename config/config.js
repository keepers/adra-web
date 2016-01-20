'use strict';

module.exports = {
  PORT: process.env.PORT || 8080,
  ENV: process.env.NODE_ENV || 'development',
  API_URL: process.env.API_URL || 'http://localhost:9090'
};

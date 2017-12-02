/* eslint no-console: 0 */
const path = require('path');

const config = {
  service: [
    require.resolve('./idl/aService.thrift'),
    require.resolve('./idl/bService.thrift'),
    require.resolve('./idl/extendsService.thrift'),
  ],
  output: {
    path: path.resolve(__dirname, 'mockapi'),
  },
};

module.exports = config;

if (require.main === module) {
  console.info(module.exports);
}


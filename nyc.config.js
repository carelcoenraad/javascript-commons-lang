// eslint-disable-next-line no-undef
module.exports = {
  all: true,
  branches: 80,
  'check-coverage': true,
  exclude: ['src/index.js', '**/*.{spec,test}.js'],
  functions: 80,
  include: ['src'],
  lines: 80,
  require: '@babel/register',
  statements: 80
};

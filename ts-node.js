'use strict';

module.exports = {
  extends: [
    require.resolve('./ts'),
    'plugin:node/recommended',
  ],
  env: {
    node: true,
  },
};

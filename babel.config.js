module.exports = function(api) {
  // api.cache(true);
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
          'module-resolver',
          {
              alias: {
                  '@src': './src',
                  '@node_modules': './node_modules',
                  '@assets': './src/assets',
                  '@components': './src/components',
                  '@config': './src/config',
                  '@context': './src/context',
                  '@navigation': './src/navigation',
                  '@screens': './src/screens',
                  '@schemas-validation': './src/schemas-validation',
                  '@hooks': './src/hooks',
                  'navigation': './src/navigation',
                  'schemas-validation': './src/schemas-validation',
                  'screens': './src/screens',
              },
          },
      ],
  ],
  };
  
};

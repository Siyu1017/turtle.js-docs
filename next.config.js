const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra()

exports.isCI = !!( 
  env.CI || 
  env.CONTINUOUS_INTEGRATION || 
  env.BUILD_NUMBER || 
  env.RUN_ID || 
  exports.name || 
  false
)
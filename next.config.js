const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  title: ({ title }) => `${title} | My Custom Site`,
})

module.exports = withNextra()

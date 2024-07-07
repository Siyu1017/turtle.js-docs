import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Turtle.js</span>,
  project: {
    link: 'https://github.com/siyu1017/turtle.js',
  },
  docsRepositoryBase: 'https://github.com/siyu1017/turtle.js-docs',
  footer: {
    
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Turtle.js'
      }
    } else {
      return {
        titleTemplate: '%s'
      }
    }
  }
}

export default config

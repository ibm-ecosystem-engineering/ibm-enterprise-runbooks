const pathPrefix = process.env.TRAVIS_BRANCH === 'master' ? '/' : (process.env.PATH_PREFIX || '/');

module.exports = {
  siteMetadata: {
    title: 'IBM Cloud Enterprise Run Books',
    description: 'IBM Cloud Enterprise Sandbox Run Books',
    keywords: 'ibm,cloud,runbooks',
  },
  pathPrefix: "/ibm-enterprise-runbooks",
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl:
              'https://github.com/ibm-gsi-ecosystem/ibm-enterprise-runbooks',
          subDirectory: '/',
        },
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'data',
        path: './src/data'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-155887541-3",
        head: true
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              `gatsby-remark-autolink-headers`,
              `gatsby-remark-copy-linked-files`,
              `gatsby-remark-smartypants`,
              {
                  // Using gatsby-remark-embed-video before gatsby-remark-images & gatsby-remark-responsive-iframe plugins.
                  resolve: `gatsby-remark-embed-video`,
                  options: {
                      maxWidth: 800,
                      ratio: 1.77,
                      height: 400,
                      related: false,
                      noIframerder: true,
                  },
              },
              {
                  resolve: `gatsby-remark-prismjs`,
                  options: {
                      classPrefix: 'language-',
                      inlineCodeMarker: null,
                      aliases: { bash: 'zsh' },
                      showLineNumbers: false,
                      noInlineHighlight: false,
                  },
              },
              {
                  resolve: `gatsby-remark-images`,
                  options: {
                      maxWidth: 590,
                  },
              },
              {
                  resolve: `gatsby-remark-responsive-iframe`,
                  options: {
                      wrapperStyle: `margin-bottom: 1.0725rem`,
                  },
              },
          ],
      },
  }
  
  ]
};

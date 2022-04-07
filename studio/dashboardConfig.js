export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '624e748cccbf68234a36ca4d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-opc-studio',
                  apiId: '35efd498-2c35-4df2-9e1c-1d5827a71022'
                },
                {
                  buildHookId: '624e748c1579c41fe9fa2773',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-opc',
                  apiId: 'dc302d82-a21b-45d7-9dfa-ff6ef057449e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maccuswell/sanity-gatsby-opc',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-opc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

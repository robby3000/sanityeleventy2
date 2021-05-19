export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '60a578eb2b11d100911aa9a8',
                  title: 'Sanity Studio',
                  name: 'sanityeleventy-2-studio',
                  apiId: '80303dad-29dc-499d-82af-3bcd6a379c39'
                },
                {
                  buildHookId: '60a578ebbf68b100c997e120',
                  title: 'Blog Website',
                  name: 'sanityeleventy-2',
                  apiId: 'fbecd265-1e62-4c7a-b7c6-b15d67b7e79e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/robby3000/sanityeleventy2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanityeleventy-2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

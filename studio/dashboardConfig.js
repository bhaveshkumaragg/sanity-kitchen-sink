export default {
  widgets: [
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
                  buildHookId: '609a91a82b488329ab157bcf',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nqxhyd5m',
                  apiId: '1d445be0-f9fd-4d16-bac2-be87d1427379'
                },
                {
                  buildHookId: '609a91a8abddeb22c9ec1260',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8kp35gfj',
                  apiId: '9e91a3d2-76f0-4992-8f5f-a1e44316e967'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bhaveshkumaragg/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8kp35gfj.netlify.app', category: 'apps'}
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

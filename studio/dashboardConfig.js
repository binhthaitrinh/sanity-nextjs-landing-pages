export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '620cb74d2cccedc6a32d23e8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-325wqjf5',
                  apiId: 'f7b2a4c5-90b6-4206-a680-a758cd1dfff5'
                },
                {
                  buildHookId: '620cb74d6b11dfc4a162eebc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ibw6c4pe',
                  apiId: '949f2937-66bf-456a-b210-112c536c61be'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/binhthaitrinh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ibw6c4pe.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}

import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [ {
  name: 'Docs',
  url: '/docs',
  iconComponent: { name: 'cil-puzzle' },
  children: [
    {
      name: 'List',
      url: '/docs/list'
    }
  ]
},
];

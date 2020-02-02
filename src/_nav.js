export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'DATA CENTER',
      url: '/base',
      icon: 'icon-puzzle',
    },
    {
      name: 'CHANGE REQUEST',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor',
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor',
        },
      ],
    },
    {
      name: 'INFRASTRUCTURE',
      url: '/charts',
      icon: 'icon-pie-chart',
      children: [
        {
          name: 'SERVER',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'NETWORK',
          url: '/icons/flags',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'DEPLOYMENT',
      url: '/notifications',
      icon: 'icon-bell',
    },
    {
      divider: true,
    },
  ],
};

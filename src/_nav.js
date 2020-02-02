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
      children: [
        {
          name: 'SERVER',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'DEVICES',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        },
      ]
    },
    {
      name: 'CHANGE REQUEST',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'CPU',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'RAM MEMORY',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        } 
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
      children: [
        {
          name: 'NETWORKS',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'REQUIRED THINGS',
          url: '/icons/flags',
          icon: 'icon-star',
        },
        {
          name: 'REQUIRED THINGS',
          url: '/icons/flags',
          icon: 'icon-star',
        },
      ],
    },
    {
      name: 'WIDGET',
      url: '/notifications',
      icon: 'icon-bell',
    },
    {
      divider: true,
    },
  ],
};

import {NavigationModelInterface} from '@gaxon/components';

export class NavigationModel implements NavigationModelInterface {
  public navigation: any[];

  constructor() {
    this.navigation = [
      {
        id: 'main',
        title: 'Main',        
        type: 'group',
        icon: '',
        children: [
          {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            icon: 'dashboard',
            url: '/dashboard'
          },
          {
            id: 'feeschedule',
            title: 'Fee Schedule',
            type: 'collapse',
            icon: 'assignment',
            children:[
              {
                id: 'feepassenger',
                title: 'Passenger',
                type: 'item',
                icon: '',
                url: '/feepassenger-list'
              },
              {
                id: 'feedriver',
                title: 'Driver',
                type: 'item',
                icon: '',
                url: '/feedriver-list'
              }
            ]
          },
          {
            id: 'paymentgateway',
            title: 'Payment Gateway',
            type: 'item',
            icon: 'price-list',
            url: '/paymentgateway'
          },
          {
            id: 'accountsummary',
            title: 'Account Summary',
            type: 'item',
            icon:'dollar',
            url: '/account-summary'
          },
          {
            id: 'ride',
            title: 'Ride Details',
            type: 'item',
            icon: 'apps',
            url:'/ride-details'
          },
          {
            id: 'drivers',
            title: 'Drivers',
            type: 'collapse',
            icon: 'users',
            children: [
              {
                id: 'addnewdriver',
                title: 'Add New',
                type: 'item',
                icon: '',
                url:'/driver-Create'
              },
              {
                id: 'listdrivers',
                title: 'All Drivers',
                type: 'item',
                icon: '',
                url: '/driver-list'
              }
            ]
          },
          {
            id: 'passengers',
            title: 'Passengers',
            type: 'item',
            icon: 'customers',
            url: '/passenger-list'
          },
          {
            id:'admin',
            title:'Admin',
            type:'collapse',
            icon:'customer',
            children:[
              {
                id:'admin-create',
                title:'Create Admin',
                type:'item',
                icon:'',
                url:'/admin-create'
              },
              {
                id:'admin-list',
                title:'Admin List',
                type:'item',
                icon:'',
                url:'/admin-list'
              }
            ]
          },
          {
            id:'setting-master',
            title:'Masters',
            type:'collapse',
            icon:'settings',
            children:[
              {
                id:'language',
                title:'Language',
                type:'item',
                icon:'',
                url:'/lang-list'
              },
              {
                id:'blood-group',
                title:'Blood Group',
                type:'item',
                icon:'',
                url:'/bloodgroup-list'
              },
              {
                id:'status',
                title:'Status',
                type:'item',
                icon:'',
                url:'/ridestatus-list'
              },
            ]
          }
         
        ]
      }
    ];
  }
}

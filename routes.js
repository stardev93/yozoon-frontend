// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';

import {
  Briefcase as BriefcaseIcon,
  Calendar as CalendarIcon,
  ShoppingCart as ShoppingCartIcon,
  Folder as FolderIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  UserPlus as UserPlusIcon,
  AlertCircle as AlertCircleIcon,
  Trello as TrelloIcon,
  User as UserIcon,
  Layout as LayoutIcon,
  Edit as EditIcon,
  DollarSign as DollarSignIcon,
  Mail as MailIcon,
  MessageCircle as MessageCircleIcon,
  PieChart as PieChartIcon,
  Share2 as ShareIcon,
  Users as UsersIcon
} from 'react-feather';


const dashboardRoutes = [
  {
    subheader: 'Reports',
    items: [
      {
        title: 'Dashboard',
        rtlTitle: "لوحة القيادة",
        icon: PieChartIcon,
        href: '/admin/dashboard',

        layout: "/admin",
      },
      // {
      //   title: 'Alternative',
      //   rtlTitle: "لوحة القيادة",
      //   icon: BarChartIcon,
      //   href: '/admin',

      //   layout: "/admin",
      // }
    ]
  },
  {
    subheader: 'Management',
    items: [
      // {
      //   title: 'Customers',
      //   icon: UsersIcon,
      //   href: '/app/management/customers',
      //   items: [
      //     {
      //       title: 'List Customers',
      //       href: '/app/management/customers'
      //     },
      //     {
      //       title: 'View Customer',
      //       href: '/app/management/customers/1'
      //     },
      //     {
      //       title: 'Edit Customer',
      //       href: '/app/management/customers/1/edit'
      //     }
      //   ]
      // },
      {
        title: 'Products',
        icon: ShoppingCartIcon,
        href: '/admin/products',
        items: [
          {
            title: 'All Products',
            href: '/admin/products'
          },
          {
            title: 'Create Product',
            href: '/admin/product/create'
          }
        ]
      },
      // {
      //   title: 'Orders',
      //   icon: FolderIcon,
      //   href: '/app/management/orders',
      //   items: [
      //     {
      //       title: 'List Orders',
      //       href: '/app/management/orders'
      //     },
      //     {
      //       title: 'View Order',
      //       href: '/app/management/orders/1'
      //     }
      //   ]
      // },
      // {
      //   title: 'Invoices',
      //   icon: ReceiptIcon,
      //   href: '/app/management/invoices',
      //   items: [
      //     {
      //       title: 'List Invoices',
      //       href: '/app/management/invoices'
      //     },
      //     {
      //       title: 'View Invoice',
      //       href: '/app/management/invoices/1'
      //     }
      //   ]
      // }
    ]
  },
  {
    subheader: 'Applications',
    items: [
  //     {
  //       title: 'Projects Platform',
  //       href: '/app/projects',
  //       icon: BriefcaseIcon,
  //       items: [
  //         {
  //           title: 'Overview',
  //           href: '/app/projects/overview'
  //         },
  //         {
  //           title: 'Browse Projects',
  //           href: '/app/projects/browse'
  //         },
  //         {
  //           title: 'Create Project',
  //           href: '/app/projects/create'
  //         },
  //         {
  //           title: 'View Project',
  //           href: '/app/projects/1'
  //         }
  //       ]
  //     },
      {
        title: 'Social Platform',
        href: '/app/social',
        icon: ShareIcon,
        items: [
          {
            title: 'Profile',
            href: '/admin/user-profile'
          },
          // {
          //   title: 'Feed',
          //   href: '/app/social/feed'
          // }
        ]
      },
  //     {
  //       title: 'Kanban',
  //       href: '/app/kanban',
  //       icon: TrelloIcon
  //     },
  //     {
  //       title: 'Mail',
  //       href: '/app/mail',
  //       icon: MailIcon
  //     },
    ]
  },
  // {
  //   subheader: 'Auth',
  //   items: [
  //     {
  //       title: 'Login',
  //       href: '/login-unprotected',
  //       icon: LockIcon
  //     },
  //     {
  //       title: 'Register',
  //       href: '/register-unprotected',
  //       icon: UserPlusIcon
  //     }
  //   ]
  // },
  // {
  //   subheader: 'Pages',
  //   items: [
  //     {
  //       title: 'Account',
  //       href: '/app/account',
  //       icon: UserIcon
  //     },
  //     {
  //       title: 'Error',
  //       href: '/404',
  //       icon: AlertCircleIcon
  //     },
  //     {
  //       title: 'Pricing',
  //       href: '/pricing',
  //       icon: DollarSignIcon
  //     }
  //   ]
  // },
  // {
  //   subheader: 'Extra',
  //   items: [
  //     {
  //       title: 'Charts',
  //       href: '/app/extra/charts',
  //       icon: BarChartIcon,
  //       items: [
  //         {
  //           title: 'Apex Charts',
  //           href: '/app/extra/charts/apex'
  //         }
  //       ]
  //     },
  //     {
  //       title: 'Forms',
  //       href: '/app/extra/forms',
  //       icon: EditIcon,
  //       items: [
  //         {
  //           title: 'Formik',
  //           href: '/app/extra/forms/formik'
  //         },
  //         {
  //           title: 'Redux Forms',
  //           href: '/app/extra/forms/redux'
  //         },
  //       ]
  //     },
  //     {
  //       title: 'Editors',
  //       href: '/app/extra/editors',
  //       icon: LayoutIcon,
  //       items: [
  //         {
  //           title: 'DraftJS Editor',
  //           href: '/app/extra/editors/draft-js'
  //         },
  //         {
  //           title: 'Quill Editor',
  //           href: '/app/extra/editors/quill'
  //         }
  //       ]
  //     }
  //   ]
  // }
];

export default dashboardRoutes;

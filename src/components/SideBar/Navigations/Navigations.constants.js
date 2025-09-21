// import OrdersList from '../../../pages/OrdersList';
import UserProfileGroupIcon from '../../../svgs/user_profile_gorup.svg?react';
import AccountGroupIcon from '../../../svgs/account_group.svg?react';
import BlogGroupIcon from '../../../svgs/blog_group.svg?react';
import CorporateGroupIcon from '../../../svgs/corporate_group.svg?react';
import SocialGroupIcon from '../../../svgs/social_group.svg?react';

import { lazy } from 'react';

const OrdersList = lazy(() => import('../../../pages/OrdersList'));


export const GROUPS = {
  DASHBOARDS: 'Dashboards',
  PAGES: 'Pages',
};

export const OVERVIEW = 'overview';
export const PROJECTS = 'projects';
export const CAMPAIGNS = 'campaigns';
export const DOCUMENTS = 'documents';
export const FOLLOWERS = 'followers';
export const ORDERS = 'orders';

export const PAGES_GROUP = [
  {
    label: 'User Profile',
    Icon: UserProfileGroupIcon,
    pages: [OVERVIEW, PROJECTS, CAMPAIGNS, DOCUMENTS, FOLLOWERS]
  },
  {
    label: 'Accounts',
    Icon: AccountGroupIcon,
    pages: [OVERVIEW, PROJECTS, CAMPAIGNS, DOCUMENTS, FOLLOWERS]
  },
  {
    label: 'Corporate',
    Icon: CorporateGroupIcon,
    pages: [OVERVIEW, PROJECTS, CAMPAIGNS, DOCUMENTS, FOLLOWERS]
  },
  {
    label: 'Blog',
    Icon: BlogGroupIcon,
    pages: [OVERVIEW, PROJECTS, CAMPAIGNS, DOCUMENTS, FOLLOWERS]
  },
  {
    label: 'Social',
    Icon: SocialGroupIcon,
    pages: [OVERVIEW, PROJECTS, CAMPAIGNS, DOCUMENTS, FOLLOWERS]
  },
]

export const PAGES_MAP = {
  [OVERVIEW]: {
    label: 'Overview',
   Component: () => ''
  },
  [PROJECTS]: {
    label: 'Projects',
   Component: () => ''
  },
  [CAMPAIGNS]: {
    label: 'Campaigns',
   Component: () => ''
  },
  [DOCUMENTS]: {
    label: 'Documents',
   Component: () => ''
  },
  [FOLLOWERS]: {
    label: 'Followers',
   Component: () => ''
  },
  [ORDERS]: {
    label: 'Orders',
    Component: OrdersList,
  },
}
import DefaultDashboardIcon from '../../../../svgs/default_dashboard.svg?react';
import EcommerceDashboardIcon from '../../../../svgs/ecommerce_dashboard.svg?react';
import ProjectsDashboardIcon from '../../../../svgs/projects_dashboard.svg?react';
import OnlineCoursesDashboardIcon from '../../../../svgs/online_courses_dashboard.svg?react';

import { lazy } from 'react';

const DefaultDashboard = lazy(() => import('../../../../pages/DefaultDashboard'));

export const DEFAULT = "default";
export const E_COMMERCE = "ecommerce";
export const PROJECTS = "projects";
export const ONLINE_COURSES = "online-cources";

export const DASHBOARDS_MAP = {
  [DEFAULT]: {
    id: DEFAULT,
    label: 'Default',
    Component: DefaultDashboard,
    Icon: DefaultDashboardIcon,
  },
  [E_COMMERCE]: {
    id: E_COMMERCE,
    label: 'eCommerce',
    Component: () => '',
    Icon: EcommerceDashboardIcon,
    hasSubDashboards: true,
  },
  [PROJECTS]: {
    id: PROJECTS,
    label: 'Projects',
    Component: () => '',
    Icon: ProjectsDashboardIcon,
    hasSubDashboards: true,
  },
  [ONLINE_COURSES]: {
    id: ONLINE_COURSES,
    label: 'Online Courses',
    Component: () => '',
    Icon: OnlineCoursesDashboardIcon,
    hasSubDashboards: true,
  }
}
import { create } from "zustand";
import { MOCK_USER_DETAILS } from "../mocks/user";
import { MOCK_ACTIVITIES, MOCK_CONTACTS, MOCK_E_COMMERCE_DATA, MOCK_FAVORITES, MOCK_MAP_DATA, MOCK_NOTIFICATIONS, MOCK_ORDERS, MOCK_PRODUCTS_DATA, MOCK_PROJECTION_VS_ACTUAL_DATA, MOCK_RECENTLY_VISITED, MOCK_REVENUE_TREND, SALES_DATA } from "../mocks/app";
import { GROUPS } from "../components/SideBar/Navigations/Navigations.constants";
import { DEFAULT } from "../components/SideBar/Navigations/Dashboards/Dashboards.constants";

const useAppStore = create((set) => ({
  isDarkThemeEnabled: false,
  setIsDarkThemeEnabled: (isDarkThemeEnabled) => {
    if (isDarkThemeEnabled) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }

    set({ isDarkThemeEnabled })
  },
  userDetails: MOCK_USER_DETAILS,

  showSideBar: true,
  setShowSideBar: (showSideBar) => set({ showSideBar }),

  showUpdates: true,
  setShowUpdates: (showUpdates) => set({ showUpdates }),

  favorites: MOCK_FAVORITES,
  recentlyVisited: MOCK_RECENTLY_VISITED,
  selectedContent: {
    group: GROUPS.DASHBOARDS,
    content: DEFAULT,
  },
  setSelectedContent: (selectedContent) => set({ selectedContent }),

  notifications: MOCK_NOTIFICATIONS,

  contacts: MOCK_CONTACTS,

  activities: MOCK_ACTIVITIES,

  eCommerceData: MOCK_E_COMMERCE_DATA,

  revenueProjectionResult: MOCK_PROJECTION_VS_ACTUAL_DATA,

  revenueTrend: MOCK_REVENUE_TREND,

  salesData: SALES_DATA,

  productsData: MOCK_PRODUCTS_DATA,

  mapData: MOCK_MAP_DATA,

  ordersDataCount: 200,

  getOrdersData: ({ searchText, offset, limit }) => {
    let filteredByQuery = MOCK_ORDERS;
    if (searchText) {
      const query = searchText.toLocaleLowerCase();
      filteredByQuery = MOCK_ORDERS.filter(({ orderID, user: { name }, project, address, status }) => orderID.toLocaleLowerCase().includes(query) || name.toLocaleLowerCase().includes(query) || project.toLocaleLowerCase().includes(query) || address.toLocaleLowerCase().includes(query) || status.toLocaleLowerCase().includes(query));
    }

    set({ ordersDataCount: filteredByQuery.length })

    return filteredByQuery.slice(offset, offset+limit);
  }

}))

export default useAppStore;

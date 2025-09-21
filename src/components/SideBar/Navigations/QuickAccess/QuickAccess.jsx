import React, { useMemo, useState } from 'react'
import './QuickAccess.css';
import Button from '../../../../components/Button';
import { useShallow } from 'zustand/shallow';
import { PAGES_MAP } from '../Navigations.constants';
import useAppStore from '../../../../stores/app';

const FAVORITES = 'favorites';
const RECENTLY = 'recently';

const QuickAccess = () => {
  const [active, setActive] = useState(FAVORITES);

  const { favorites, recentlyVisited } = useAppStore(useShallow(state => ({
    favorites: state.favorites,
    recentlyVisited: state.recentlyVisited,
  })));

  const PAGES = useMemo(() => active === FAVORITES ? favorites : recentlyVisited, [active, favorites, recentlyVisited]);

  return (
    <section className="quickAccessContainer">
      <header>
        <Button
          className={active === FAVORITES ? 'switchButton active' : 'switchButton'}
          onClick={() => setActive(FAVORITES)}
        >
          Favorites
        </Button>
        <Button
          className={active === RECENTLY ? 'switchButton active' : 'switchButton'}
          onClick={() => setActive(RECENTLY)}
        >
          Recently
        </Button>
      </header>
      <ul>
        {PAGES.map(page => (
          <li key={page}>{PAGES_MAP[page]?.label}</li>
        ))}
      </ul>
    </section>
  )
}

export default QuickAccess
import { store } from '@risingstack/react-easy-state';

const state = store({
  isOpen: false,
  links: [
    { id: 0, url: '/dashboard', label: 'dashboard', isActive: true },
    { id: 1, url: '/profile', label: 'profile', isActive: false },
    { id: 2, url: '/settings', label: 'settings', isActive: false },
  ],
});

export default state;
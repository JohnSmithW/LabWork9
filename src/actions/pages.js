import state from '../store';

export default function pages(page) {
  if (page === 'dashboard') {
    state.pages.dashboard = true;
    state.pages.profile = false;
    state.pages.settings = false;
  }
  if (page === 'profile') {
    state.pages.dashboard = false;
    state.pages.profile = true;
    state.pages.settings = false;
  }
  if (page === 'settings') {
    state.pages.dashboard = false;
    state.pages.profile = false;
    state.pages.settings = true;
  }
}

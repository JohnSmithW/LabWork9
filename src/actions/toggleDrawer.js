import state from '../store';

export default function toggleDrawer() {
  state.isDrawerOpen = !state.isDrawerOpen;
}

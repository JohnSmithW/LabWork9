import state from '../store';

export default function handleDrawer() {
  state.isOpen = !state.isOpen;
}

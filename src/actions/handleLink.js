import state from '../store';

export default function handleLink(id) {
  for (let i = 0; i < state.links.length; i += 1) {
    state.links[i].isActive = false;
  }
  state.links[id].isActive = true;
}

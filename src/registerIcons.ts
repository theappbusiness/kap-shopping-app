import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faCheckSquare,
  faMagnifyingGlass,
  faShoppingBag,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export const registerIcons = (): void => {
  library.add(faCheckSquare, faShoppingBag, faXmark, faMagnifyingGlass, faBars);
};

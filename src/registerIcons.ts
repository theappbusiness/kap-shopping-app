import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCheckSquare,
  faShoppingBag,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

export const registerIcons = () => {
  library.add(faCheckSquare, faShoppingBag, faXmark);
};

import {
  zoomImageFigcaption, zoomImageItem
} from "./constants.js";
import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  open(data) {
    zoomImageFigcaption.textContent = data.title;
    zoomImageItem.src = data.url;
    zoomImageItem.alt = data.altCaption;
    super.open();
  };
};

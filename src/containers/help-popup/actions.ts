import {ADD_POPUP} from "./constants";
import {IActionAddPopup, Position} from "./types";


export const addPopup = (
    id: string,
    text: string,
    position: Position,
    el: any
): IActionAddPopup => ({
    type: ADD_POPUP,
    id,
    el,
    text,
    position,
});
import {ADD_POPUP} from "./constants";
import {IActionAddPopup, Position} from "./types";
import {RefObject} from "react";


export const addPopup = (
    id: string,
    text: string,
    position: Position,
    ref: RefObject<HTMLDivElement>
): IActionAddPopup => ({
    type: ADD_POPUP,
    id,
    text,
    position,
    ref
});
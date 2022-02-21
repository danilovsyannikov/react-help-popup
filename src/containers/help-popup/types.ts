import {ADD_POPUP} from "./constants";
import React from "react";

export interface IShowHelpPopupsBtnState {
    style: { //данные для позиционирования к нужному DOM-элементу
        top?: number,
        left?: number,
        height?: number,
        width?: number
    },
    showed: boolean, //флаг, отображается ли в данный момент подсказка
    position: string, //позиционирование подписи относительно элемента, см type 'Position'
    text: string, //подпись в подсказке
    cur: number, //текущая активная подсказка
}

export type Position = 'top' | 'right' | 'bottom' | 'left';

export interface IHelpPopup {
    id: string,
    position: Position,
    text: string,
    el?: any
}

export interface IActionAddPopup extends IHelpPopup {
    type: typeof ADD_POPUP
}

export interface IHelpPopupProps {
    helpPopups: Array<IHelpPopup>,
    children: React.ReactNode,
    addPopup: (
        id : string,
        text: string,
        position: Position,
        el: any
    ) => IActionAddPopup,
    id: string,
    text: string,
    position: Position,
}

export interface IHelpPopupState{

}


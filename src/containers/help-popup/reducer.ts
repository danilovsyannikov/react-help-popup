import {ADD_POPUP} from "./constants";
import {IActionAddPopup, IHelpPopup} from "./types";

const helpPopups = (state:Array<IHelpPopup> = [], {type, id, el, text, position}:IActionAddPopup) => {
    switch (type) {
        case ADD_POPUP :
            return state.filter((el) => (el.id === id)).length
                ? state
                : [
                    ...state, {
                        id,
                        position,
                        el,
                        text
                    }];
        default:
            return state;
    }
}

export default helpPopups;
import {ADD_POPUP} from "./constants";
import {IActionAddPopup, IHelpPopup} from "./types";

const helpPopups = (state:Array<IHelpPopup> = [], {type, id, text, position, ref}:IActionAddPopup) => {
    switch (type) {
        case ADD_POPUP :
            return [
                    ...state, {
                        id,
                        position,
                        text,
                        ref
                    }];
        default:
            return state;
    }
}

export default helpPopups;
import {addPopup} from "./actions";
import React, {RefObject, useEffect, useRef} from "react";
import {connect} from "react-redux";
import {IHelpPopup, IHelpPopupProps} from "./types";

/**
 * Компонент-обертка для элемента, к которому нужно показать подсказку
 * После инициализации добавляет нужные данные в store 'helpPopups'
 *
 * Пример использования:
 *
 * <HelpPopup id={"BlockItem1"} position={"left"} text={"Просмотреть контакты"}>
 *     <div>Нужный элемент</div>
 * </HelpPopup>
 *
 * Необходимые атрибуты:
 * id :string - уникальный id подсказки, при дублировании добавления в коллекцию не произойдет
 * position :string 'top'|'right'|'bottom'|'left' - с какой стороны от элемента отобразится текст подсказки
 * text :string - текст подсказки
 *
 */

const HelpPopup: React.FC<IHelpPopupProps> = (props) => {

    const elRef: RefObject<HTMLDivElement> = useRef(null);
    useEffect(() => {
        const {addPopup, id, text, position} = props;
        addPopup(id, text, position, elRef);
    }, [])
    return (
        <div ref={elRef}>
            {props.children}
        </div>
    );
    // }
}

export default connect(({helpPopups}: { helpPopups: Array<IHelpPopup> }) => ({
    helpPopups
}), {addPopup})(HelpPopup);
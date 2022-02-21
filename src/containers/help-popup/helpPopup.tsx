import {addPopup} from "./actions";
import React, {Component, RefObject} from "react";
import {connect} from "react-redux";
import {IHelpPopup, IHelpPopupProps, IHelpPopupState} from "./types";

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

class HelpPopup extends Component<IHelpPopupProps, IHelpPopupState> {

    elRef: RefObject<HTMLDivElement>;

    constructor(props: IHelpPopupProps) {
        super(props);
        this.elRef = React.createRef();
    }

    componentDidMount(): void {
        const {addPopup, id, text, position} = this.props;
        const elCur : any = this.elRef.current;
        const el = {
            top: elCur.offsetTop,
            left: elCur.offsetLeft,
            height: elCur.offsetHeight,
            width: elCur.offsetWidth
        }
        addPopup(id, text, position, el);
    }

    render() {
        const {children}: any = this.props;
        return (
            <div ref={this.elRef} {...children.props}>
                {children}
            </div>
        );
    }
}

export default connect(({helpPopups}: { helpPopups: Array<IHelpPopup> }) => ({
    helpPopups
}), {addPopup})(HelpPopup);
import React, {Component} from "react";
import {IHelpPopup, IShowHelpPopupsBtnState} from "./types";
import {connect} from "react-redux";
import './help-popup.scss';

/**
 * Компонент для запуска отображения подсказок
 * !!!Временное решение
 * !!!Код данного компонента избыточен, неотрефакторен и местами глуп.
 *
 * При onClick берет данные из store 'helpPopups' и запускает просмотр подсказок по очереди
 * !!!DOM элементов отображения подсказки рендерятся внутри этого компонента
 *
 * Пример использования:
 *
 * <ShowHelpPopupsBtn>
 *     <span className={'show-popup-btn'}>Показать подсказки</span>
 * </ShowHelpPopupsBtn>
 *
 * Компонент генерит строковый элемент с onClick().
 * Внутри компонента можно дабавить и стилизовать элемент кнопки по желанию
 *
 */

class ShowHelpPopupsBtn extends Component<{ helpPopups: Array<IHelpPopup>, children: React.ReactNode }, IShowHelpPopupsBtnState> {

    state: IShowHelpPopupsBtnState = {
        style: {},
        showed: false,
        position: 'bottom',
        text: 'text',
        cur: 0,
    }

    showAllPopups = (): void => {
        const {helpPopups}: { helpPopups: Array<IHelpPopup> } = this.props;
        let cur = this.state.cur;
        console.log(helpPopups);
        if(helpPopups.length){
            this.showPopup(helpPopups[cur]);
        }
    }

    showPopup({position, text, ref}: IHelpPopup) {
        const padding: number = 4;
        this.setState(({cur}) => ({
            showed: true,
            position,
            text,
            style: {
                top: ref.current!.offsetTop - padding,
                left: ref.current!.offsetLeft - padding,
                height: ref.current!.offsetHeight + (2 * padding),
                width: ref.current!.offsetWidth + (2 * padding)
            },
            cur
        }))
    }

    popupCb = () => {
        const state = this.state;
        const {helpPopups} = this.props;

        if (state.cur < helpPopups.length - 1) {
            this.setState({
                ...state,
                showed: false,
                cur: ((state.cur + 1) % helpPopups.length) //счетчик ++1, можно использовать циклично
            })
            setTimeout(this.showAllPopups, 500);
        } else {
            this.setState({
                ...state,
                showed: false,
                cur: 0
            });
        }
    }

    render() {
        let st = this.state;
        let className = 'help-popup ';
        className += 'help-popup_position_' + st.position;
        if (st.showed)
            className += ' help-popup_state_active';

        return (
            <>
                <span className={"show-help-popups-btn"}
                        onClick={this.showAllPopups}>
                    {this.props.children}
                </span>
                <div
                    className={className}
                    style={st.style}
                    data-text={st.text}>
                    <div className="help-popup__wrapper"
                         onClick={this.popupCb}></div>
                </div>
            </>
        );
    }
}

export default connect(({helpPopups}: { helpPopups: Array<IHelpPopup> }) => ({
    helpPopups
}), {})(ShowHelpPopupsBtn);
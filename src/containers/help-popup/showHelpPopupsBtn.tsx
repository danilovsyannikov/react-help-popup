import React, {useCallback, useState} from "react";
import {IHelpPopup, IShowHelpPopupsBtnState} from "./types";
import {connect} from "react-redux";
import './help-popup.scss';
import HelpPopupCont from "./helpPopupCont";

/**
 * Компонент для запуска отображения подсказок
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

const ShowHelpPopupsBtn: React.FC<{ helpPopups: Array<IHelpPopup>, children: React.ReactNode }> = (props) => {
    const [state, setState] = useState<IShowHelpPopupsBtnState>({
        style: {},
        showed: false,
        position: 'bottom',
        text: 'text',
        cur: 0,
    });

    const getClassName = useCallback((state: IShowHelpPopupsBtnState) => {
        let className: string = 'help-popup ';
        className += 'help-popup_position_' + state.position;
        if (state.showed)
            className += ' help-popup_state_active';

        return className;
    }, [state.showed, state.position]);

    const showAllPopups = (cur: number = 0) => {
        const {helpPopups}: { helpPopups: Array<IHelpPopup> } = props;
        const padding: number = 4; //css padding for help elements

        if (!helpPopups.length)
            return;
        if (cur >= helpPopups.length)
            setState({
                ...state,
                showed: false,
                cur: 0
            })
        else {
            let {position, text, ref}: IHelpPopup = helpPopups[cur];
            setState({
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
            });
        }
    }

    const popupCb = () => {
        setState({
            ...state,
            showed: false,
        });
        setTimeout(() => {
            showAllPopups(state.cur + 1)
        }, 500);
    };

    const btnCb = () => {
        showAllPopups(0);
    }

    return (
        <>
            <span className={"show-help-popups-btn"}
                  onClick={btnCb}>
                {props.children}
            </span>
            <HelpPopupCont>
                <div
                    className={getClassName(state)}
                    style={state.style}
                    data-text={state.text}>
                    <div className="help-popup__wrapper"
                         onClick={popupCb}></div>
                </div>
            </HelpPopupCont>
        </>
    );
    // }
}

export default connect(({helpPopups}: { helpPopups: Array<IHelpPopup> }) => ({
    helpPopups
}), {})(ShowHelpPopupsBtn);
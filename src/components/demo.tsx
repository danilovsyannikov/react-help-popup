import React from "react";
import ShowHelpPopupsBtn from "../containers/help-popup/showHelpPopupsBtn";
import HelpPopup from "../containers/help-popup/helpPopup";
import {IoBarChart} from "react-icons/io5";

export const Title: React.FC<{ title: string }> = ({title}) => (
    <header className={'title'}>
        {title}
        <ShowHelpPopupsBtn>
            <span className={'show-popup-btn'}>Показать подсказки</span>
        </ShowHelpPopupsBtn>
    </header>
);

export const Layout: React.FC = ({children}) => (
    <div className={'layout'}>
        {children}
    </div>
);

export const Menu = () => (
    <nav className={'left-menu'}>
        <ul>
            <li className={'left-menu__item left-menu__item_state_active'}>Мой кабинет</li>
            <HelpPopup id={"LeftMenuBlock1"} position={"right"} text={"Просмотреть Текущие заказы"}>
                <li className={'left-menu__item'}>Текущие заказы</li>
            </HelpPopup>
            <HelpPopup id={"LeftMenuBlock2"} position={"right"} text={"Просмотреть личный счет"}>
                <li className={'left-menu__item'}>Личный счет</li>
            </HelpPopup>
            <li className={'left-menu__item'}>Личные данные</li>
        </ul>

    </nav>
);

export const Content = () => (
    <main className={'content-block'}>
        <div className={'block-item'}>
            <div className={'block-item__icon'}><IoBarChart size={'5em'}></IoBarChart></div>
            <div className={'block-item__title'}>Мой кабинет</div>
        </div>
        <div className={'block-item'}>
            <div className={'block-item__icon'}><IoBarChart size={'5em'}></IoBarChart></div>
            <div className={'block-item__title'}>Личный счет</div>
        </div>
        <div className={'block-item'}>
            <div className={'block-item__icon'}><IoBarChart size={'5em'}></IoBarChart></div>
            <div className={'block-item__title'}>Личные данные</div>
        </div>
        <div className={'block-item'}>
            <div className={'block-item__icon'}><IoBarChart size={'5em'}></IoBarChart></div>
            <div className={'block-item__title'}>Корзина</div>
        </div>
        <div className={'block-item'}>
            <div className={'block-item__icon'}><IoBarChart size={'5em'}></IoBarChart></div>
            <div className={'block-item__title'}>История заказов</div>
        </div>
        <HelpPopup id={"BlockItem1"} position={"left"} text={"Просмотреть контакты"}>
            <div className={'block-item'}>
                <div className={'block-item__icon'}><IoBarChart size={'5em'}></IoBarChart></div>
                <div className={'block-item__title'}>Контакты</div>
            </div>
        </HelpPopup>
        <div className={'block-item'}>
            <div className={'block-item__icon'}><IoBarChart size={'5em'}></IoBarChart></div>
            <div className={'block-item__title'}>Подписки</div>
        </div>
    </main>
);
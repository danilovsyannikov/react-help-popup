import React from 'react';
import {Content, Layout, Menu, Title} from "./components/demo";
import './components/demo.scss';

export const App = () => (
    <>
        <Title title={'Личный кабинет'}/>
        <Layout>
            <Menu/>
            <Content/>
        </Layout>
    </>
);


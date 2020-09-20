import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { BiUser } from 'react-icons/bi';

import Menu from '../Menu';
import SearchField from '../SearchField';

import ImageIcon from '../../assets/images/logo-globo.png';

import { Container, Header } from './style';

const HeaderComponent = () => {
    return(
        <Container>
            <Header>
                <div>
                    <img src={ImageIcon} alt="Globo.com"/>

                    <Menu />
                </div>
                <div>
                    <a href="!#">ASSINE JÁ</a>
                    <a href="!#">E-MAIL <RiArrowDropDownLine /></a>
                    <SearchField />
                        <BiUser />
                </div>
            </Header>
        </Container>
    );

}

export default HeaderComponent;
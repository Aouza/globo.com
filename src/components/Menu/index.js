import React from 'react';
import { menuItems } from '../../services/api';

import ItemMenu from './ItemMenu';

import { Container } from './style';

const menus = menuItems;

const Menu = () => {
    return(
        <Container>
            {
                menus.map(menu => {
                    return(
                        <ItemMenu key={menu.name} name={menu.name} type={menu.type} icon={menu.icon}/>
                    );
                })
            }
        </Container>
    );
}

export default Menu;
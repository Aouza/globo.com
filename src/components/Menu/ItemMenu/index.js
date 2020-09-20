import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

import { Container } from './style';

const ItemMenu = ({name, icon, type}) => {
    return(

        <Container type={type}>
            <a href="!#">
                <span>{name}</span>{icon && <span><RiArrowDropDownLine /></span>}
            </a>
        </Container >
    );
}

export default ItemMenu;
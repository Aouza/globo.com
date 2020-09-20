import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container } from './style';

const SearchField = () => {
    return(
        <Container id="searc-input">
             <MdSearch />
            <input type="text" placeholder="encontre na globo.com"/>
        </Container>
    )
}

export default SearchField;
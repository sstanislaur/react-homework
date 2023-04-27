import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './Header.module.css'
const Header = () => {
    const nagivate = useNavigate()
    return (
        <div className={css.Header}>
            <button onClick={() => nagivate('todos')}>Todos</button>
            <button onClick={() => nagivate('albums')}>Albums</button>
            <button onClick={() => nagivate('comments')}>Comments</button>
        </div>
    );
};

export default Header;
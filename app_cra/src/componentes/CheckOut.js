import React from 'react';
import { useLocation } from 'react-router-dom';
import CheckOutDetail from './CheckOutDetail';

const CheckOut = (  ) => {

    const {state} = useLocation ();
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <main className="main">
            <CheckOutDetail
                state= {state}
                handleSubmit = {handleSubmit}    
            ></CheckOutDetail>
        </main>
    );

    
};

export default CheckOut;
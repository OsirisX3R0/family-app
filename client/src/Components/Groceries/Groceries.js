import React, { useState, useEffect, useContext } from 'react';
import { Row, Col } from 'reactstrap';
import { GlobalContext } from '../../Context/GlobalContext';
import { GroceryProvider } from '../../Context/GroceryContext';
import NewGroceryItem from './NewGroceryItem';
import GroceryList from './GroceryList';

import { getGroceryList, getGroceryTypes, addGrocery, deleteGrocery } from '../../Services/groceryService';

const Groceries = () => {
    const { setActivePage } = useContext(GlobalContext);

    useEffect(() => {
        setActivePage('Groceries')
    }, [])
    return (
        <>
            <GroceryProvider>
                <Row>
                    <Col md="3" className="col-md-push-9">
                        <NewGroceryItem />
                    </Col>
                    <Col md="9" className="col-md-pull-3">
                        <GroceryList />
                    </Col>
                </Row>
            </GroceryProvider>
        </>
    )
}

export default Groceries;
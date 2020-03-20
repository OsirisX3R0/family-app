import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem, Row, Col, CustomInput } from 'reactstrap';
import { GroceryProvider } from '../../Context/GroceryContext';
import NewGroceryItem from './NewGroceryItem';
import GroceryList from './GroceryList';

import { getGroceryList, getGroceryTypes, addGrocery, deleteGrocery } from '../../Services/groceryService';

const Groceries = () => {
    // const [groceryList, setGroceryList] = useState([]);
    // const [groceryTypes, setGroceryTypes] = useState([]);
    // const [newItem, setNewItem] = useState({});
    // const [loadingGroceries, setLoadingGroceries] = useState(false);

    // useEffect(() => {
    //     setLoadingGroceries(true);

    //     getGroceryTypes()
    //         .then(res => {
    //             setGroceryTypes(res.data);
    //             setNewItem({
    //                 name: '',
    //                 type: res.data[0]._id,
    //                 price: 0
    //             })
    //         });

    //     getGroceryList()
    //         .then(res => {
    //             setGroceryList(res.data)
    //         })
    //         .finally(() => setLoadingGroceries(false));
    // }, [])

    // const addNew = (e) => {
    //     e.preventDefault();
    //     setLoadingGroceries(true);

    //     addGrocery(newItem)
    //         .then(res => {
    //             setGroceryList([...groceryList, res.data])
    //         })
    //         .finally(() => setLoadingGroceries(false))
    // }

    // const updateNew = (e) => {
    //     setNewItem({
    //         ...newItem, 
    //         [e.target.name]: e.target.value 
    //     })
    // }

    // const removeItem = id => {
    //     setLoadingGroceries(true);

    //     deleteGrocery(id)
    //         .then(res => {
    //             setGroceryList([...groceryList.filter(g => g._id != res.data)])
    //         })
    //         .finally(() => setLoadingGroceries(false))
    // }

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
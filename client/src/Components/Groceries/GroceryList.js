import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem, Row, Col, CustomInput } from 'reactstrap';
import BlockUI from 'react-block-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import Loader from '../Layout/Loader';

import { getGroceryList, getGroceryTypes, addGrocery, deleteGrocery } from '../../Services/groceryService';

const GroceryList = () => {
    const [groceryList, setGroceryList] = useState([]);
    const [groceryTypes, setGroceryTypes] = useState([]);
    const [newItem, setNewItem] = useState({});
    const [loadingGroceries, setLoadingGroceries] = useState(false);

    useEffect(() => {
        setLoadingGroceries(true);

        getGroceryTypes()
            .then(res => {
                setGroceryTypes(res.data);
                setNewItem({
                    name: '',
                    type: res.data[0]._id,
                    price: 0
                })
            });

        getGroceryList()
            .then(res => {
                setGroceryList(res.data)
            })
            .finally(() => setLoadingGroceries(false));
    }, [])

    const addNew = (e) => {
        e.preventDefault();
        setLoadingGroceries(true);
        
        addGrocery(newItem)
            .then(res => {
                setGroceryList([...groceryList, res.data])
            })
            .finally(() => setLoadingGroceries(false))
    }

    const updateNew = (e) => {
        setNewItem({
            ...newItem, 
            [e.target.name]: e.target.value 
        })
    }

    const removeItem = id => {
        setLoadingGroceries(true);

        deleteGrocery(id)
            .then(res => {
                setGroceryList([...groceryList.filter(g => g._id != res.data)])
            })
            .finally(() => setLoadingGroceries(false))
    }

    return (
        <>
            <h2>Type</h2>
            <Form onSubmit={addNew}>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label>Name</Label>
                            <Input type="text" name="name" onChange={updateNew} />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Category</Label>
                            <Input type="select" name="type" onChange={updateNew}>
                                {groceryTypes.map(type => (
                                    <option key={type._id} value={type._id}>{type.name}</option>
                                ))}
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label>Price</Label>
                            <Input type="number" name="price" step="0.01" onChange={updateNew} />
                        </FormGroup>
                    </Col>
                    <Col xs="auto" className="d-flex align-items-center">
                        <Button color="success">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Col>
                </Row>
                
                
            </Form>
            Count: {groceryList ? groceryList.length : 0}
            <BlockUI blocking={loadingGroceries} loader={<Loader />}>
                <ListGroup>
                    {groceryList.map(grocery => (
                        <ListGroupItem key={grocery._id}>
                            <Row>
                                <Col xs="1">
                                    <Label check>
                                        <CustomInput id="item1" type="checkbox" />
                                    </Label>
                                </Col>
                                <Col>{grocery.name}</Col>
                                <Col  className="text-right"><sup>$</sup>{grocery.price}</Col>
                                <Col xs="auto">
                                    <Button color="warning" size="sm" outline className="mr-2">
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </Button>
                                    <Button color="danger" size="sm" outline onClick={() => removeItem(grocery._id)}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </BlockUI>
        </>
    )
}

export default GroceryList;
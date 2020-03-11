import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, ListGroup, ListGroupItem, Row, Col, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

import { getGroceryList, getGroceryTypes, addGrocery } from '../../Services/groceryService';

const GroceryList = () => {
    const [groceryList, setGroceryList] = useState([]);
    const [groceryTypes, setGroceryTypes] = useState([]);
    const [newItem, setNewItem] = useState({})

    useEffect(() => {
        getGroceryTypes()
            .then(res => {
                setGroceryTypes(res.data);
                setNewItem({
                    name: '',
                    type: res.data[0]._id,
                    price: 0
                })
            })

        getGroceryList()
            .then(res => setGroceryList(res.data));
    }, [])

    const addNew = (e) => {
        e.preventDefault();
        addGrocery(newItem)
            .then(res => {
                setGroceryList([...groceryList, res.data])
            })
    }

    const updateNew = (e) => {
        setNewItem({
            ...newItem, 
            [e.target.name]: e.target.value 
        })
    }

    return (
        <>
            <h2 >Type</h2>
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
            <ListGroup>
                <ListGroupItem>
                    <Row>
                        <Col xs="1">
                            <Label check>
                                <CustomInput id="item1" type="checkbox" />
                            </Label>
                        </Col>
                        <Col >Apples</Col>
                        <Col  className="text-right"><sup>$</sup>1.59</Col>
                        <Col xs="auto">
                            <Button color="warning" size="sm" outline className="mr-2">
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Button>
                            <Button color="danger" size="sm" outline>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col xs="1">
                            <Label check>
                                <CustomInput id="item1" type="checkbox" />
                            </Label>
                        </Col>
                        <Col >Apples</Col>
                        <Col  className="text-right"><sup>$</sup>1.59</Col>
                        <Col xs="auto">
                            <Button color="warning" size="sm" outline className="mr-2">
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Button>
                            <Button color="danger" size="sm" outline>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col xs="1">
                            <Label check>
                                <CustomInput id="item1" type="checkbox" />
                            </Label>
                        </Col>
                        <Col >Apples</Col>
                        <Col  className="text-right"><sup>$</sup>1.59</Col>
                        <Col xs="auto">
                            <Button color="warning" size="sm" outline className="mr-2">
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Button>
                            <Button color="danger" size="sm" outline>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Row>
                        <Col xs="1">
                            <Label check>
                                <CustomInput id="item1" type="checkbox" />
                            </Label>
                        </Col>
                        <Col >Apples</Col>
                        <Col  className="text-right"><sup>$</sup>1.59</Col>
                        <Col xs="auto">
                            <Button color="warning" size="sm" outline className="mr-2">
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </Button>
                            <Button color="danger" size="sm" outline>
                                <FontAwesomeIcon icon={faTimes} />
                            </Button>
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
        </>
    )
}

export default GroceryList;
import React, { useContext } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { GroceryContext } from '../../Context/GroceryContext';
import { addGrocery } from '../../Services/groceryService';

const NewGroceryItem = () => {
    const { 
        dispatchGroceries,
        groceryTypes,
        newItem,
        dispatchNewItem,
        setLoadingGroceries } = useContext(GroceryContext);

        

    const addNew = (e) => {
        e.preventDefault();
        setLoadingGroceries(true);

        addGrocery(newItem)
            .then(res => {
                dispatchGroceries({ 
                    type: 'ADD_GROCERY_ITEM',
                    item: res.data
                })
            })
            .finally(() => {
                resetNewItem();
                setLoadingGroceries(false);
            })
    }

    const updateNew = (e) => {
        dispatchNewItem({
            type: 'UPDATE_ITEM',
            newItem: {
                ...newItem, 
                [e.target.name]: e.target.value 
            }
        })
    }

    const resetNewItem = () => {
        dispatchNewItem({
            type: 'UPDATE_ITEM',
            newItem: {
                name: '',
                category: groceryTypes[0]._id,
                price: 0
            }
        })
    }

    return (
        <Form onSubmit={addNew}>
                <Row form>
                    <Col md="12" className="col">
                        <FormGroup>
                            <Label htmlFor="name">Name</Label>
                            <Input type="text" name="name" id="name" value={newItem.name} onChange={updateNew} />
                        </FormGroup>
                    </Col>
                    <Col md="12" className="col">
                        <FormGroup>
                            <Label htmlFor="category">Category</Label>
                            <Input type="select" name="category" id="category" value={newItem.category} onChange={updateNew}>
                                {groceryTypes.map(type => (
                                    <option key={type._id} value={type._id}>{type.name}</option>
                                ))}
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md="12" className="col">
                        <FormGroup>
                            <Label htmlFor="price">Price</Label>
                            <Input type="number" name="price" id="price" step="0.01" value={newItem.price} onChange={updateNew} />
                        </FormGroup>
                    </Col>
                    <Col xs="auto" className="d-flex d-md-none align-items-center">
                        <Button color="success">
                            <FontAwesomeIcon icon={faPlus} />
                        </Button>
                    </Col>
                    <Col className="d-none d-md-block">
                        <Button color="success" block>
                            <FontAwesomeIcon icon={faPlus} />
                            Add
                        </Button>
                        {/* <Button color="secondary" type="reset" onClick={() => resetNewItem()}>Reset</Button> */}
                    </Col>
                </Row>
                
                
            </Form>
    )
}

export default NewGroceryItem;
import React, { useState, useContext } from 'react';
import { Label, Button, ListGroupItem, Row, Col, Input, CustomInput, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { GroceryContext } from '../../Context/GroceryContext';
import { deleteGrocery } from '../../Services/groceryService';
const GroceryItem = ({ grocery }) => {
    const { 
        setLoadingGroceries,
        dispatchGroceries
     } = useContext(GroceryContext);
    const [editing, setEditing] = useState(false);

    const displayItem = () => {
        if (editing) {
            return (
                <>
                    <Col><Input value={grocery.name} name="name" onChange={updateItem} /></Col>
                    <Col className="text-right">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <Input value={grocery.price} name="price" onChange={updateItem} />
                        </InputGroup>                        
                    </Col>
                </>
            )
        }

        return (
            <>
                <Col>{grocery.name}</Col>
                <Col className="text-right"><sup>$</sup>{grocery.price}</Col>
            </>
        )
    }

    const updateItem = e => {
        dispatchGroceries({ type: 'UPDATE_GROCERY_ITEM', item: {
            ...grocery,
            [e.target.name]: e.target.value
        }})
    }

    const removeItem = id => {
        setLoadingGroceries(true);

        deleteGrocery(id)
            .then(res => {
                dispatchGroceries({
                    type: 'DELETE_GROCERY_ITEM',
                    id: res.data
                })
            })
            .finally(() => setLoadingGroceries(false))
    }

    const displayActions = () => {
        if (editing) {
            return (
                <>
                    <Button color="success" size="sm" outline className="mr-2" onClick={() => dispatchGroceries({ type: 'UPDATE_GROCERY_ITEM', item: grocery })}>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                    <Button color="danger" size="sm" outline  onClick={() => setEditing(false)}>
                        <FontAwesomeIcon icon={faTimes} />
                    </Button>
                </>
            )
        }

        return (
            <>
                <Button color="warning" size="sm" outline className="mr-2" onClick={() => setEditing(true)}>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
                <Button color="danger" size="sm" outline onClick={() => removeItem(grocery._id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </>
        )
    }

    return (
        <ListGroupItem key={grocery._id}>
            <Row>
                <Col xs="1">
                    <Label check>
                        <CustomInput id="item1" type="checkbox" />
                    </Label>
                </Col>
                {displayItem()}
                <Col xs="auto">
                    {displayActions()}
                </Col>
            </Row>
        </ListGroupItem>
    )
}

export default GroceryItem;
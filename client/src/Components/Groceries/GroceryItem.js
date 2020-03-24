import React, { useState, useContext, useRef } from 'react';
import { Label, Button, ListGroupItem, Row, Col, Input, CustomInput, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes, faTrash, faCheck, faSave } from '@fortawesome/free-solid-svg-icons';
import { GroceryContext } from '../../Context/GroceryContext';
import { updateGroceryItem, saveChecked, deleteGrocery } from '../../Services/groceryService';
import BlockUi from 'react-block-ui';
import Loader from '../Layout/Loader';

const GroceryItem = ({ grocery }) => {
    const { 
        setLoadingGroceries,
        dispatchGroceries, 
        changes,
        setChanges
     } = useContext(GroceryContext);
    const [editing, setEditing] = useState(false);
    const [savingItem, setSavingItem] = useState(false);
    const prevGrocery = useRef(grocery);
    const nameInput = useRef(null);

    const itemChange = e => {
        dispatchGroceries({ type: 'UPDATE_GROCERY_ITEM', item: {
            ...grocery,
            [e.target.name]: e.target.value
        }});
    }

    const updateItem = item => {
        setLoadingGroceries(true);

        updateGroceryItem(item)
            //.then(res => )
            .finally(() => {
                setLoadingGroceries(false);
                setEditing(false);
            })
    }

    // const openEdit = () => {
    //     setEditing(true);
    //     nameInput.current.focus();
    // }

    const closeEdit = () => {
        setEditing(false);
        dispatchGroceries({ type: 'UPDATE_GROCERY_ITEM', item: prevGrocery.current });
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

    const setChecked = (e) => {
        setSavingItem(true)
        dispatchGroceries({ type: 'UPDATE_GROCERY_ITEM', item: {
            ...grocery,
            checked: e.target.checked
        }});
        saveChecked(grocery._id, e.target.checked)
            .finally(() => setSavingItem(false))
        //setChanges([...changes, {...grocery, checked: e.target.checked}])
    }

    const displayItem = () => {
        let price = +grocery.price;
        if (editing) {
            return (
                <>
                    <Col><Input value={grocery.name} name="name" onChange={itemChange}  /></Col>
                    <Col className="text-right">
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>$</InputGroupText>
                            </InputGroupAddon>
                            <Input type="number" value={price} step="0.01" name="price" onChange={itemChange} />
                        </InputGroup>                        
                    </Col>
                </>
            )
        }

        return (
            <>
                <Col>{grocery.name}</Col>
                <Col className="text-right"><sup>$</sup>{price.toFixed(2)}</Col>
            </>
        )
    }

    const displayActions = () => {
        if (editing) {
            return (
                <>
                    <Button color="success" size="sm" outline className="mr-2" onClick={() => updateItem(grocery)}>
                        <FontAwesomeIcon icon={faCheck} />
                    </Button>
                    <Button color="danger" size="sm" outline  onClick={() => closeEdit()}>
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
        <BlockUi blocking={savingItem}>
            <ListGroupItem key={grocery._id}>
                <Row>
                    <Col xs="1">
                        <Label check>
                            <CustomInput type="checkbox" id={grocery._id} checked={grocery.checked} onChange={setChecked} />
                        </Label>
                    </Col>
                    {displayItem()}
                    <Col xs="auto">
                        {displayActions()}
                    </Col>
                </Row>
            </ListGroupItem>
        </BlockUi>
    )
}

export default GroceryItem;
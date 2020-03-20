import React, { useContext } from 'react';
import { Label, Button, ListGroupItem, Row, Col, CustomInput } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { GroceryContext } from '../../Context/GroceryContext';
import { deleteGrocery } from '../../Services/groceryService';
const GroceryItem = ({ grocery }) => {
    const { 
        setLoadingGroceries,
        dispatchGroceries
     } = useContext(GroceryContext);

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

    return (
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
    )
}

export default GroceryItem;
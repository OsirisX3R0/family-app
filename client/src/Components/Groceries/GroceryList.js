import React, { useContext } from 'react';
import { Label, Button, ListGroup, ListGroupItem, Row, Col, CustomInput } from 'reactstrap';
import BlockUI from 'react-block-ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import Loader from '../Layout/Loader';
import { GroceryContext } from '../../Context/GroceryContext';
import { deleteGrocery } from '../../Services/groceryService';

const GroceryList = () => {
    const { 
        groceryList,
        dispatchGroceries,
        loadingGroceries,
        setLoadingGroceries } = useContext(GroceryContext);

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
    )
}

export default GroceryList;
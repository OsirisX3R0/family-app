import React, { useContext } from 'react';
import { ListGroup } from 'reactstrap';
import BlockUI from 'react-block-ui';
import Loader from '../Layout/Loader';
import { GroceryContext } from '../../Context/GroceryContext';
import GroceryItem from './GroceryItem';

const GroceryList = () => {
    const { 
        groceryList,
        loadingGroceries } = useContext(GroceryContext);

    return (
        <BlockUI blocking={loadingGroceries} loader={<Loader />}>
            <ListGroup>
                {groceryList.map(grocery => (
                    <GroceryItem grocery={grocery} key={grocery._id} />
                    // <ListGroupItem key={grocery._id}>
                    //     <Row>
                    //         <Col xs="1">
                    //             <Label check>
                    //                 <CustomInput id="item1" type="checkbox" />
                    //             </Label>
                    //         </Col>
                    //         <Col>{grocery.name}</Col>
                    //         <Col  className="text-right"><sup>$</sup>{grocery.price}</Col>
                    //         <Col xs="auto">
                    //             <Button color="warning" size="sm" outline className="mr-2">
                    //                 <FontAwesomeIcon icon={faPencilAlt} />
                    //             </Button>
                    //             <Button color="danger" size="sm" outline onClick={() => removeItem(grocery._id)}>
                    //                 <FontAwesomeIcon icon={faTimes} />
                    //             </Button>
                    //         </Col>
                    //     </Row>
                    // </ListGroupItem>
                ))}
            </ListGroup>
        </BlockUI>
    )
}

export default GroceryList;
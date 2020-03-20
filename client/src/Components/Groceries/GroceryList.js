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
                {groceryList && groceryList.map(grocery => (
                    <GroceryItem grocery={grocery} key={grocery._id} />
                ))}
            </ListGroup>
        </BlockUI>
    )
}

export default GroceryList;
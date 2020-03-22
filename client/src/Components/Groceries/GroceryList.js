import React, { useContext } from 'react';
import { ListGroup, Button } from 'reactstrap';
import BlockUI from 'react-block-ui';
import { faSave } from '@fortawesome/free-solid-svg-icons';
import Loader from '../Layout/Loader';
import { GroceryContext } from '../../Context/GroceryContext';
import GroceryItem from './GroceryItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GroceryList = () => {
    const { 
        groceryList,
        loadingGroceries } = useContext(GroceryContext);

    const displaySave = () => {
        if (!loadingGroceries) {
            return (
                <div className="grocery-save">                    
                    <Button color="primary">
                        <FontAwesomeIcon icon={faSave} />
                        &nbsp; Save Items
                    </Button>
                </div>
            )
        }
    }

    return (
        <BlockUI blocking={loadingGroceries} loader={<Loader />}>            
            {displaySave()}
            <ListGroup>
                {groceryList && groceryList.map(grocery => (
                    <GroceryItem grocery={grocery} key={grocery._id} />
                ))}
            </ListGroup>
        </BlockUI>
    )
}

export default GroceryList;
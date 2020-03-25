import React, { useContext, useCallback } from 'react';
import { ListGroup, Button, ListGroupItem } from 'reactstrap';
import BlockUI from 'react-block-ui';
import styled from 'styled-components';
import { faSave, faTrash } from '@fortawesome/free-solid-svg-icons';
import Loader from '../Layout/Loader';
import { GroceryContext } from '../../Context/GroceryContext';
import GroceryItem from './GroceryItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { saveChecked, clearGroceryList } from '../../Services/groceryService';
import useLocalStorage from '../../Hooks/useLocalStorage';

const NoItems = styled(ListGroupItem)`
    font-weight: bold;
    text-align: center;
`;

const ListTools = styled.div`
    text-align: center;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    position: sticky;
    top: .25rem;
    z-index: 10;
`;

const GroceryList = () => {
    const { 
        groceryList,
        dispatchGroceries,
        loadingGroceries,
        setLoadingGroceries,
        changes
    } = useContext(GroceryContext);
    //const [checked, setChecked] = useLocalStorage('checked');

    // const setItemChecked = id => setChecked([...checked, id])

    // const isChecked = useCallback(item => checked.includes(item._id)) 

    // const saveChanges = () => {
    //     setLoadingGroceries(true)
    //     saveChecked(changes)
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .finally(() => setLoadingGroceries(false))
    // }

    const clearList = () => {        
        setLoadingGroceries(true)
        clearGroceryList()
            .then(res => {
                console.log(res)
            })
            .finally(() => {
                dispatchGroceries({ type: 'CLEAR_GROCERY_LIST' })
                setLoadingGroceries(false);
            })
    }

    const displayClear = () => {
        if (!loadingGroceries && groceryList.length > 0) {
            return (
                <ListTools>                    
                    {/* <Button color="primary" onClick={() => saveChanges()}>
                        <FontAwesomeIcon icon={faSave} />
                        &nbsp; Save Items
                    </Button>                 */}
                    <Button color="danger" className="d-none d-md-block" onClick={() => clearList()}>
                        <FontAwesomeIcon icon={faTrash} />
                        &nbsp; Clear List
                    </Button>
                    <Button color="danger" className="d-block d-md-none" block onClick={() => clearList()}>
                        <FontAwesomeIcon icon={faTrash} />
                        &nbsp; Clear List
                    </Button>
                </ListTools>
            )
        }
    }

    const displayList = () => {
        if (!loadingGroceries) {
            if (groceryList && groceryList.length > 0) {
                return groceryList && groceryList.map(grocery => (
                    <GroceryItem grocery={grocery} key={grocery._id} />
                ))
            }
    
            return (
                <NoItems>The grocery list is empty</NoItems>
            )
        }
    }

    return (
        <BlockUI blocking={loadingGroceries} loader={<Loader />}>            
            {displayClear()}
            <ListGroup>
                {displayList()}
            </ListGroup>
        </BlockUI>
    )
}

export default GroceryList;
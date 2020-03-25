import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Button, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Ingredient from './Ingredient';
import { GlobalContext } from '../../Context/GlobalContext';
import useStyledComponents from '../../Hooks/useStyledComponents';

const Ingredients = () => {
    const { settings } = useContext(GlobalContext);
    const [newIngredient, setNewIngredient] = useState('');
    const [addingIngredient, setAddingIngredient] = useState(false);
    const { IngredientList, IngredientListItem, AddIngredientLink, NewIngredientInput } = useStyledComponents();

    const displayAddNew = () => {
        if (!addingIngredient) {
            return (
                <AddIngredientLink color="link" size="sm" onClick={() => setAddingIngredient(true)}>
                    <FontAwesomeIcon icon={faPlus} /> 
                    &nbsp; Add ingredient
                </AddIngredientLink>
            )
        }

        return (
            <>
                <NewIngredientInput type="text" size="sm" value={newIngredient} onChange={(e) => setNewIngredient(e.target.value)} placeholder="New ingredient" />
                <Button color="primary" size="sm" block><FontAwesomeIcon icon={faPlus} /> Add</Button>
            </>
        )
    }

    return (
        <IngredientList>
            {[1,2,3].map((x, i) => <Ingredient />)}
            <IngredientListItem>
                {displayAddNew()}
            </IngredientListItem>
        </IngredientList>
    )
}

export default Ingredients;
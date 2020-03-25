import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../Context/GlobalContext';
import useStyledComponents from '../../Hooks/useStyledComponents';

const Ingredient = () => {
    const { settings } = useContext(GlobalContext);
    const { IngredientListItem } = useStyledComponents();
    
    return <IngredientListItem>Ingredient</IngredientListItem>
}

export default Ingredient;
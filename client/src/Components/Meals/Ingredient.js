import React, { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../Context/GlobalContext';
import useMealPlanStyles from './styles';

const Ingredient = () => {
    const { settings } = useContext(GlobalContext);
    const { IngredientListItem } = useMealPlanStyles();
    
    return <IngredientListItem>Ingredient</IngredientListItem>
}

export default Ingredient;
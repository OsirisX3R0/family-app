import { useContext } from 'react';
import styled from 'styled-components';
import { Card, CardTitle, Button, Input } from 'reactstrap';
import { GlobalContext } from '../../Context/GlobalContext';

const useMealPlanStyles = () => {
    const { settings } = useContext(GlobalContext);

    const MealCard = styled(Card)`
        margin-bottom: 1rem;
    `;
    
    const MealTitle = styled(CardTitle)`
        font-weight: bold;
        margin-bottom: 0;
    `;
    
    const Description = styled.span`
        font-style: italic;    
    `;
    
    
    const IngredientList = styled.ul`
        list-style-type: none;
    `;
    
    const IngredientListItem = styled.li`
        padding: .25rem 0;
        border-bottom: 1px solid ${(settings.theme == 'dark' ? 'rgba(255, 255, 255, 0.125)' : 'rgba(0, 0, 0, 0.125)')};
    `;
    
    const AddIngredientLink = styled(Button)`
        color: #bbb;
        text-decoration: none;
    
        &:hover {
            color: #f8f9fa;
            text-decoration: none;
        }
    `;
    
    const NewIngredientInput = styled(Input)`
        margin-bottom: 1rem;
    `;

    return {
        MealCard, 
        MealTitle, 
        Description, 
        IngredientList, 
        IngredientListItem, 
        AddIngredientLink, 
        NewIngredientInput
    }
}

export default useMealPlanStyles;
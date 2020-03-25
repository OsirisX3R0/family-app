import { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Card, CardTitle, Button, Input, ListGroupItem } from 'reactstrap';
import { GlobalContext } from '../Context/GlobalContext';

const useStyledComponents = () => {
    const { settings } = useContext(GlobalContext);
    
    // Bottom nav components
    const BottomNavbar = styled(Navbar)`
        background-color: ${props => props.dark ? '#444445' : '#f8f9fa'};
        width: 100%;
        position: sticky;
        bottom: 0;
    `;

    const BottomNavItems = styled(Nav)`
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
    `;

    const BottomNavLink = styled(Link)`
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: ${props => props.active == "true" ? '1.1rem' : '1rem'};
        transition: all .2s;

        &:hover {
            font-size: 1.1rem;
        }
    `;

    // Grocery List components

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

    // Meal Plan components
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
        BottomNavbar,
        BottomNavItems,
        BottomNavLink,
        NoItems,
        ListTools,
        MealCard, 
        MealTitle, 
        Description, 
        IngredientList, 
        IngredientListItem, 
        AddIngredientLink, 
        NewIngredientInput
    }
}

export default useStyledComponents;
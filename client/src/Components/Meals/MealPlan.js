import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext } from '../../Context/GlobalContext';
import useActivePage from '../../Hooks/useActivePage';
import NewGroceryItem from '../Groceries/NewGroceryItem';
import Meal from './Meal';

const MealPlan = () => {
    const { settings } = useContext(GlobalContext);
    useActivePage('Meals');

    return (
        <Row>
            {[1,2,3,4,5].map((x, i) => (
                <Meal key={i} />
            ))}
        </Row>
    )
}

export default MealPlan;
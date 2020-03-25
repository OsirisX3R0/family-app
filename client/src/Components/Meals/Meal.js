import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { Col, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import { GlobalContext } from '../../Context/GlobalContext';
import Ingredients from './Ingredients';
import useStyledComponents from '../../Hooks/useStyledComponents';

const Meal = () => {
    const { settings } = useContext(GlobalContext);
    const { MealCard, MealTitle, Description } = useStyledComponents();

    return (
        <Col sm="6" md="4" lg="3">
            <MealCard>
                <CardBody>
                    <MealTitle>Meal Title</MealTitle>
                    <CardSubtitle>subtitle</CardSubtitle>
                    <CardText>
                        <Description>This is where the meal description goes.</Description>
                    </CardText>
                    <Ingredients />
                </CardBody>
            </MealCard>
        </Col>
    )
}

export default Meal;
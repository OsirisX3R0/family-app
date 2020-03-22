import React, { useContext } from 'react';
import { Row, Col, Label, Input } from 'reactstrap';
import { GlobalContext } from '../../Context/GlobalContext';

const Settings = () => {
    const { settings, dispatchSettings } = useContext(GlobalContext);
    
    return (
        <Row>
            <Col xs="6">
                <Label htmlFor="theme">Theme</Label>
            </Col>
            <Col xs="6">
                <Input type="select" value={settings.theme} className="text-right" onChange={(e) => dispatchSettings({ type: 'SET_THEME', theme: e.target.value })}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </Input>
            </Col>
        </Row>
    )
}

export default Settings;
import React, {Component} from 'react';
import {Row, Input, Col, Button} from 'react-materialize';


class Main extends Component {

    submitSources = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div className="main">
                <h5>Load stories from</h5>
                <h6>HackerNews</h6>
                <Row className="source-row">
                    <Col s={12}><Input name='hackernews' type='checkbox' value='yCom' label='HackerNews' className='filled-in' defaultChecked='checked' /></Col>
                </Row>
                <h6>Reddit</h6>
                <Row>
                    <Col s={12}><Input name='reddit' type='checkbox' value='redditProg' label='r/Programming' className='filled-in' defaultChecked='checked'/></Col>
                    <Col s={12}><Input name='reddit' type='checkbox' value='redditProgHum' label='r/ProgrammingHumor' className='filled-in' defaultChecked='checked' /></Col>
                    <Col s={12}><Input name='reddit' type='checkbox' value='redditJS' label='r/Javascript' className='filled-in' defaultChecked='checked' /></Col>
                </Row>
                <h6>Medium Publications</h6>
                <Row>
                    <Col s={12}><Input name='medium' type='checkbox' value='freecodecamp' label='FreeCodeCamp.org' className='filled-in' defaultChecked='checked'/></Col>
                    <Col s={12}><Input name='medium' type='checkbox' value='hackernoon' label='Hacker Noon' className='filled-in' defaultChecked='checked' /></Col>
                    <Col s={12}><Input name='medium' type='checkbox' value='codeburst' label='codeburst' className='filled-in' defaultChecked='checked' /></Col>
                </Row>

                <Button waves='light'>Load Stories</Button>
            </div>
        )
    }
}

export default Main;
import React, {Component} from 'react';
import {Row, Input, Col, Button} from 'react-materialize';


class Sources extends Component {

    state = {
        sources: {
            hackernews: false,
            redditProg: false,
            redditProgHum: false,
            redditJS: false,
            freecodecamp: false,
            hackernoon: false,
            codeburst: false
        },
        redirect: false,
        hackernews: false
    }

    submitSources = (e) => {
        e.preventDefault();
        const form = e.target.elements;
        console.log(form)
        const hackernews = form.hackernews.checked;
        const redditProg = form.redditProg.checked;
        const redditProgHum = form.redditProgHum.checked;
        const redditJS = form.redditJS.checked;
        const freecodecamp = form.freecodecamp.checked;
        const hackernoon = form.hackernoon.checked;
        const codeburst = form.codeburst.checked;
        console.log(hackernews, redditProg, redditProgHum, redditJS, freecodecamp, hackernoon, codeburst)
        this.setState={
            hackernews: hackernews,
            // redirect: true
        }

    }

    render() {
    //     if(this.state.redirect) return <Redirect
    //     to={{
    //       pathname: "/",
    //       state: { sources }
    //     }}
    //   />
        return (
            <div className="sources">
                <h5>Load stories from</h5><br/>
                <h6>HackerNews</h6>
                <form onSubmit={this.submitSources}>
                  <Row className="source-row">
                    <Col s={12}><Input name='hackernews' type='checkbox' label='HackerNews' className='filled-in' /></Col>
                </Row>
                <h6>Reddit</h6>
                <Row>
                    <Col s={12}><Input name='redditProg' type='checkbox' label='r/Programming' className='filled-in'/></Col>
                    <Col s={12}><Input name='redditProgHum' type='checkbox' label='r/ProgrammingHumor' className='filled-in'/></Col>
                    <Col s={12}><Input name='redditJS' type='checkbox' label='r/Javascript' className='filled-in'/></Col>
                </Row>
                <h6>Medium Publications</h6>
                <Row>
                    <Col s={12}><Input name='freecodecamp' type='checkbox' label='FreeCodeCamp.org' className='filled-in'/></Col>
                    <Col s={12}><Input name='hackernoon' type='checkbox' label='Hacker Noon' className='filled-in'/></Col>
                    <Col s={12}><Input name='codeburst' type='checkbox' label='codeburst' className='filled-in'/></Col>
                </Row>

                <Button waves='light' type="submit">Load Stories</Button>  
                </form>
                
            </div>
        )
    }
}

export default Sources;
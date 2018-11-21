import React, {Component} from 'react';
import {Row, Input, Col, Button} from 'react-materialize';
import {Redirect} from 'react-router-dom';


class Sources extends Component {

    state = {
        sources: {
        }
    }

    submitSources = (e) => {
        e.preventDefault();
        const form = e.target.elements;
        const hackernews = form.hackernews.checked;
        const techCrunch = form.techCrunch.checked;
        const redditProg = form.redditProg.checked;
        const redditProgHum = form.redditProgHum.checked;
        const redditJS = form.redditJS.checked;
        const redditTech = form.redditTech.checked;
        const freecodecamp = form.freecodecamp.checked;
        const hackernoon = form.hackernoon.checked;
        const codeburst = form.codeburst.checked;
        const sources = {
            hackerNews: hackernews,
            techCrunch: techCrunch,
            redditProg: redditProg,
            redditProgHum: redditProgHum,
            redditJS: redditJS,
            redditTech: redditTech,
            freeCodeCamp: freecodecamp,
            hackerNoon: hackernoon,
            codeBurst: codeburst
        }
        const selected = hackernews || techCrunch || redditProg || redditProgHum || redditJS || redditTech || freecodecamp || hackernoon || codeburst
        if(!selected){
            alert("Please select at least one source.");
        } else this.setState({
                sources,
                redirect: true
            })
        

    }

    render() {
        const sources = this.state.sources;
        if(this.state.redirect) return <Redirect
        to={{
          pathname: "/stories",
          state: { sources }
        }}
      />
        return (
            <div className="sources">
                <h6>Load stories from</h6>
                <form onSubmit={this.submitSources}>
                    <div className="source-list">
                        <h6>HackerNews</h6>
                        <Row className="source-row">
                            <Col s={12}><Input name='hackernews' type='checkbox' label='HackerNews' className='filled-in checkbox-orange'/></Col>
                        </Row>
                        <h6>TechCrunch</h6>
                        <Row className="source-row">
                            <Col s={12}><Input name='techCrunch' type='checkbox' label='TechCrunch' className='filled-in checkbox-orange'/></Col>
                        </Row>
                        <h6>Medium Publications</h6>
                        <Row>
                            <Col s={12}><Input name='freecodecamp' type='checkbox' label='FreeCodeCamp.org' className='filled-in checkbox-orange'/></Col>
                            <Col s={12}><Input name='hackernoon' type='checkbox' label='Hacker Noon' className='filled-in checkbox-orange'/></Col>
                            <Col s={12}><Input name='codeburst' type='checkbox' label='codeburst.io' className='filled-in checkbox-orange'/></Col>
                        </Row>
                        <h6>Reddit</h6>
                        <Row>
                            <Col s={12}><Input name='redditProg' type='checkbox' label='r/Programming' className='filled-in checkbox-orange'/></Col>
                            <Col s={12}><Input name='redditTech' type='checkbox' label='r/Technology' className='filled-in checkbox-orange'/></Col>
                            <Col s={12}><Input name='redditProgHum' type='checkbox' label='r/ProgrammingHumor' className='filled-in checkbox-orange'/></Col>
                            <Col s={12}><Input name='redditJS' type='checkbox' label='r/Javascript' className='filled-in checkbox-orange'/></Col>
                        </Row>
                    </div>
                    <Button waves='light' type="submit" className="deep-orange lighten-1">Load Stories</Button>  
                </form>
                
            </div>
        )
    }
}

export default Sources;
import react, {Component} from 'react'
import {Container, Row, Col, Card} from 'react-bootstrap'
import withRouter from '../withRouter'
import Navigation from "../Navigation/Navigation"
function Main (props){
    
    return (<Container fluid  ><Row >
        <Navigation  />
    </Row>
    <Container >
        <div>
            <h1> Smart stock prediction tool for smart investors</h1>
        </div>

        
        <Row md="2"><Col>
        <Card  style={{ width: '26rem'}} text="light">
  <Card.Body  className="messageCard">
    <Card.Title >Aleks Bako</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Stock trade enthusiast</Card.Subtitle>
    <Card.Text>
      Stonks and Machine learning is cool and so are DEM MEMES!
    </Card.Text>

  </Card.Body>
</Card>
</Col>  <Col>
        <Row>
            <h3>Look into the future and find your next investment</h3>
        </Row>
        <Row>
            <h4 className='text-muted'>
                Unlike other predictors we strive to provide you with the most accurate predictions of the stock market, with maximum transparency.
            </h4>
            </Row>
</Col>
        </Row>
        

  
        </Container>
    </Container>)
}

export default withRouter(Main);
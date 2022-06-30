import {React,Component} from 'react'
import {Container, Row, Col, Card, Breadcrumb} from 'react-bootstrap'
import Navigation from '../Navigation/Navigation'
import {LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Tooltip, ResponsiveContainer} from 'recharts'
class SpecificStock extends Component{

    constructor(){
        super();
        this.state = {
            data: [{"Time": "0", //Todo: Make Dynamic data
            "stock": 14,
            },
            {"Time": "1",
      
            "stock": 11,
            },
            {"Time": "2",
      
            "stock": 16,
            },
            {"Time": "3",
      
            "stock": 8.5,
            }
        ]
        }
    }
    render(){
        return (
            <Container fluid>
                <Row>
                <Navigation />
                </Row>
                <Container>
                    <Row> 
                    <Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
 
   
  <Breadcrumb.Item active>StockName</Breadcrumb.Item>
</Breadcrumb>
                        </Row>
                        <Row md="5">
                            <h1>
                                Stock Name
                            </h1>
                        </Row>
                    <Row>
                        <Col>
                        <Row>
                        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Stocks performance</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Writes if latest is increasing or decreasing in proportion to the average % wise.
      <h2>
        + 5% 
      </h2>
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
                        </Row>
                        <Row>
                        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Current rank in performance</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
     Shows the rank of the stack based on performance
     <h2>
        Rank 25
     </h2>
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
                        </Row>
                        </Col>
                   <Col>
                   <ResponsiveContainer width={1000} >
                   <LineChart data={this.state.data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="Time" />
  <YAxis datakey="Price"/>
<Tooltip />
  <Legend />
  <Line type="monotone" dataKey="stock" stroke="#8884d8" />
  
</LineChart>
</ResponsiveContainer>
                   </Col>
                    </Row>
                    </Container>
            </Container>
        )
        
    }
}
export default SpecificStock
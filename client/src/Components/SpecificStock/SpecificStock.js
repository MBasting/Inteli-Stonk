import {React,Component} from 'react'
import withRouter from '../withRouter'
import {Container, Row, Col, Card, Breadcrumb} from 'react-bootstrap'
import Navigation from '../Navigation/Navigation'
import Filter from './Filter'
import {LineChart, CartesianGrid, XAxis, YAxis, Legend, Line, Tooltip, ResponsiveContainer} from 'recharts'
import _ from './stock.css'
class SpecificStock extends Component{

    constructor(props){
        super();
        this.state = {
          name: props.router.location.pathname.split("/")[2],
            data: [{"Time": "0", //Todo: Make Dynamic data
            "USD": 14,
            },
            {"Time": "1",
      
            "USD": 11,
            },
            {"Time": "2",
      
            "USD": 16,
            },
            {"Time": "3",
      
            "USD": 8.5,
            }
        ],
        average: -1,
        }
       
    }


  
      componentDidMount(){
        if(this.state.average == -1){
        let sum = 0;
        this.state.data.forEach(element => {
          sum += element.USD
        });
    
        let avg = sum / this.state.data.length;
  
        this.setState(() => {
          return {average : avg}
        })
      
   
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
 
   
  <Breadcrumb.Item active>{this.state.name}</Breadcrumb.Item>
</Breadcrumb>
                        </Row>

                        <Row className='title' md="5">
                            <h1>
                                {this.state.name}
                            </h1>
                        </Row>
                        <Row sm="6">
          <Filter />
      </Row>
                    <Row className='data'> 
                        <Col>
                        <Row  >
                        <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Stocks performance</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Writes if latest is increasing or decreasing in proportion to the average % wise.
      <h2>
        {(this.state.data[this.state.data.length-1].USD / this.state.average).toFixed(2)} %
      </h2>
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
                        </Row>
                        <Row  className='CardPos'>
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
  <Line type="monotone" dataKey="USD" stroke="#8884d8" />
  
</LineChart>
</ResponsiveContainer>
                   </Col>
                    </Row>
                    </Container>
            </Container>
        )
        
    }
}
export default withRouter(SpecificStock)
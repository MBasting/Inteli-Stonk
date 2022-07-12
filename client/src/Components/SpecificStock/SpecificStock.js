import {React,Component} from 'react'
import withRouter from '../withRouter'
import {Container, Row, Col, Card, Breadcrumb} from 'react-bootstrap'
import Navigation from '../Navigation/Navigation'
import Filter from './Filter'
import Chart from './Chart'
import _ from './stock.css'
class SpecificStock extends Component{

    constructor(props){
        super(props);
        this.state = {
          name: props.router.location.pathname.split("/")[2],
            data: [{"Time": "0", //Todo: Make Dynamic data
            "USD": 14, 
            "CO": [  // CO stands for Closed Open
              1, //Down (Closed)
   
              2 //Up (Open)
            ],
            "LH": [4 //Low   // LH stands for Low High
              ,3 //High
            ]
            },
            {"Time": "1",
      
            "USD": 11,
            "CO": [
              1,
              2

            ],
            "LH": [2,5]
            },
            {"Time": "2",
      
            "USD": 16,
            "CO": [
              1,
              1
            ],
            "LH": [3,2]
            },
            {"Time": "3",
      
            "USD": 8.5,
            "CO": [
              2,
              1
            ],
            "LH": [4,3]
            }
        ],
        
        average: -1,
        chartType: "",
        }
        
        this.FilterChartType = this.FilterChartType.bind(this)
       
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
      

    
      FilterChartType(type){
    
        console.log(type)
          this.setState(()=> {
            return {
            chartType : type
            }
          })
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
          <Filter data={this.state.data} updateChart={this.FilterChartType}/>
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
      
      
      
    </Card.Text>
    <h2>
    {(this.state.data[this.state.data.length-1].USD / this.state.average).toFixed(2)} %
    </h2>
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
    
     
    </Card.Text>
    <h2>
    Rank 25
    </h2>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
                        </Row>
                        </Col>
                   <Col>
                  <Chart data={this.state.data} type={this.state.chartType}/>
                   </Col>
                    </Row>
                    </Container>
            </Container>
        )
        
    }
}
export default withRouter(SpecificStock)
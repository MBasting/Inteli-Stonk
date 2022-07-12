import {React, useState} from 'react'
import {Button, Offcanvas, Form} from 'react-bootstrap'
function Filter(props) {
    const [show, setShow] = useState(false);
    

    const [chartType, setChartType] = useState("")
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")

    const HandleChartType = (e) => setChartType(e.target.value)
    const HandleStart = (e) => setStart(e.target.value)
    const HandleEnd = (e) => setEnd(e.target.value)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='secondcolor' onClick={handleShow}>
            Filter
        </Button>
  
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filter</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
           <Form>
            <Form.Label> Plot Type</Form.Label>
           <Form.Select onChange={HandleChartType} aria-label="Default select example">
         <option>What type of plot</option>
         <option value="continuous">Continuous</option>
        <option value="discrete">Discrete</option>
        </Form.Select>

        <Form.Label>From</Form.Label>
        <Form.Select onChange={HandleStart} size="sm" aria-label="Default select example">
        <option >Select Start</option>
          {props.data.map(element => {
          return  <option value={element.Time}>{element.Time}</option>
          })}
        
      </Form.Select>

      <Form.Label >To</Form.Label>
      <Form.Select onChange={HandleEnd} aria-label="Default select example" size="sm">
        <option>Select End</option>
        {props.data.map(element => {
          return  <option value={element.Time}>{element.Time}</option>
          })}
      </Form.Select>



        <Button onClick={() => {props.updateChart(chartType)}}>
            Submit
        </Button>
           </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
export default Filter
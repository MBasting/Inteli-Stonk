import {React, useState} from 'react'
import {Button, Offcanvas, Form} from 'react-bootstrap'
function Filter(props) {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(0)
    
    const HandleRange = (e) => setValue(e.target.value)
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
           <Form.Select aria-label="Default select example">
         <option>What type of plot</option>
         <option value="continuous">Continuous</option>
        <option value="discrete">Discrete</option>
        </Form.Select>


        <Form.Label>Time</Form.Label>
        <Form.Range value={value} onChange={HandleRange}/>
        <div> {value}</div>

        <Button >
            Submit
        </Button>
           </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
export default Filter
import {React, useState} from 'react'
import {Button, Offcanvas} from 'react-bootstrap'
function Filter(props) {
    const [show, setShow] = useState(false);
  
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
            Filter the data to fit the users needs, with sliders, options for different types of plots
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
export default Filter
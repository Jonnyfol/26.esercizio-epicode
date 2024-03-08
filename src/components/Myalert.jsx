import React from 'react'
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';


export default function Myalert() {
    const [show, setShow] = useState(true);
  return (
    <div>
      <div className='my-3'> 
         <Alert show={show} variant="success">
        <Alert.Heading>Epibooks</Alert.Heading>
        <p>
         Tutti i libri che hai sempre sognato
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}

      </div>
    </div>
  )
}

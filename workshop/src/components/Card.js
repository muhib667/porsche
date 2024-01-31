import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Cardd = () => {
  return (
    <div>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.motortrend.com/uploads/2021/09/2022-Porsche-911-Carrera-GTS-Coupe-8.jpg" />
      <Card.Body>
        <Card.Title>Porsche 911</Card.Title>
        <Card.Text>
        The Porsche 911 (pronounced Nine Eleven or in German: Neunelf) is a two-door 2+2 high performance rear-engined sports car introduced in September 1964 by Porsche AG of Stuttgart,
        </Card.Text>
        <Button variant="primary">Buy it</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Cardd

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Card2 = () => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0230/0031/files/P15_0061.jpg?6452" />
      <Card.Body>
        <Card.Title>Porsche GT3</Card.Title>
        <Card.Text>
        The 992 GT3 has the same engine as its predecessor, a 4.0-litre flat-six updated to produce 510 PS (503 hp; 375 kW) at 8,400 rpm and 470 N⋅m (347 lb⋅ft) of torque at 6,250 rpm, with a 9,000 rpm redline. The 992 GT3 is capable of 0–100 km/h (0–62 mph) in 3.4 second
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Card2

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Card1 = () => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://c4.wallpaperflare.com/wallpaper/666/5/86/porsche-porsche-911-gt3-car-porche-wallpaper-preview.jpg" />
      <Card.Body>
        <Card.Title>Porsche GT4</Card.Title>
        <Card.Text>
        The Porsche Boxster is a mid-engine two-seater roadster. It was Porsche's first road vehicle to be originally designed as a roadster since the 914. The first-generation Boxster (the 986) was introduced in late 1996; it was powered by a 2.5-litre flat six-cylinder engine.
        </Card.Text>
        <Button variant="primary">Buy it</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Card1

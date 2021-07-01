import { Carousel, Col, Container, Row } from 'react-bootstrap'
import dishesData from '../data/menu.json'
import { useState } from 'react'
import DishComments from './DishComments'
import upperName from '../helpers/lib'
import { homeComponentInterface } from '../Types/interfaces'
import { Dishes } from '../Types/interfaces'

const dishes: Dishes[] = dishesData

const Home = (props: homeComponentInterface) => {
  const [selected, setSelected] = useState<Dishes | null>(null)

  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col xs={12} md={6}>
          <h1>Welcome to {upperName(props.title)}!</h1>
          <h3 className="text-center mb-4">We can only cook pasta...</h3>
          <Carousel>
            {dishes.map((dish, i) => (
              <Carousel.Item
                key={dish.id}
                onClick={() => {
                  setSelected(dish)
                }}
              >
                <img className="d-block w-100" src={dish.image} alt={'slide number ' + (i + 1)} />
                <Carousel.Caption>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        {selected && <DishComments selectedPasta={selected} />}

      </Row>
    </Container>
  )
}

export default Home

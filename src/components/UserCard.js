import React from 'react'
import { Card,Button,CloseButton } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteCard } from '../redux/actions/UsersActions'
const UserCard = ({el}) => {
  const dispatch = useDispatch()
    return (
            <Card className='card'  style={{ width: '18rem' }}>
              <CloseButton onClick={()=>dispatch(deleteCard(el.id))} />
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU" />
  <Card.Body>
    <Card.Title>{el.name} </Card.Title>
    <Card.Text>
      {el.username}
    </Card.Text>
    <Button variant="primary">view more</Button>
  </Card.Body>
</Card>

        
    )
}

export default UserCard

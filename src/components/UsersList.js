import React, {useEffect} from 'react'
import { getUsers } from '../redux/actions/UsersActions'
import UserCard from './UserCard'
import { useSelector, useDispatch } from 'react-redux'

const UsersList = () => {

    const dispatch = useDispatch()
    
  useEffect(() => {
      dispatch(getUsers())
      
  }, [])
const users = useSelector(state => state.users)

    return (
        <div className='list' >
           {users.map((el)=> <UserCard key={el.id} el={el} />)} 
        </div>
    )
}

export default UsersList

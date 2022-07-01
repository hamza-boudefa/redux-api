import React from "react";
import { Modal, Button ,Form,FormControl} from "react-bootstrap";
import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddCards } from "../redux/actions/UsersActions";



const AddCard = () => {
    const [show, setShow] = useState(false)

    const [input, setInput] = useState("")
    const handleInput=(e)=>{
setInput(e.target.value)
    }
const dispatch = useDispatch();

const handleClick=()=>{
  dispatch(AddCards({ id: Math.random(),name:input, username:inputb }),setInput(""),setInputb(""));
  setShow(false)
}
const [inputb, setInputb] = useState("")
const handleInputb=(e)=>{
setInputb(e.target.value)
}
    
  return (
    <div>
        <Button onClick={()=>setShow(true)} className='modalBtn' >Click to Add</Button>
      <Modal show={show}  hide={!show} >
        <Modal.Body>
          <Form.Label>name</Form.Label>
          <FormControl placeholder="Add your task" 
          value={input}
          onChange={(e)=>handleInput(e)}
          />
        </Modal.Body>
        <Modal.Body>
          <Form.Label>username</Form.Label>
          <FormControl placeholder="Add your task" 
          value={inputb}
          onChange={(e)=>handleInputb(e)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClick} >save</Button>
          <Button variant="secondary" style={{ width: "60px" }} onClick={()=>setShow(false)} >
            close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddCard;

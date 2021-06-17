import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('');
  
    const handleChange = e => setNewTodo(e.target.value);
    const handleClick = () => dispatch({
      type: 'ADD_TODO',
      payload: {
        title: newTodo,
        completed: false,
      }
    })
  
    return (
    <Row className="align-items-center">
      <Col sm={3}>
        <Form>
            <Form.Control type='text' value={newTodo} onChange={handleChange} placeholder="To do..." />{' '}
        </Form>
      </Col>
      <Col sm={3}>
        <Button variant="primary" onClick={handleClick}>ADD</Button>
      </Col>
    </Row>
    );
  }

  export default AddTodo;

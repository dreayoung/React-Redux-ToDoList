import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

const Todolist = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const handleDeleteClick = id => dispatch({
        type: 'DELETE_TODO',
        payload: id,
    })
    const handleToggle = id => dispatch({
        type: 'COMPLETE_TODO',
        payload: id,
    })
    return (
        <ListGroup>
            {todos.map(task => 
                <ListGroup.Item key={task.id}>{task.title}
                <Form.Check type="checkbox" checked={task.complete} onChange={() => handleToggle(task.id)}/>
                <Button variant="danger" size="sm" onClick={() => handleDeleteClick(task.id)}>delete</Button>
                </ListGroup.Item>
            )}
        </ListGroup>
    )
}

export default Todolist;
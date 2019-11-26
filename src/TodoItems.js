import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd';
import {deleteTask} from './actions/action'
import {completeTask} from './actions/action'


const TodoItems = (props) => {
    return (
        <div>

            {props.items.map(el =>
                <div key={el.key} className="tasks">
                    <Button className="btn-task" onClick={(e) => {e.preventDefault();props.completeTask(el.key)}}>{el.checked ? "Undo" : "Done"}</Button>
                    <Button className="btn-task" onClick={(e) => {e.preventDefault();props.deleteTask(el.key)}}>Delete</Button>
                    <p className={el.checked ? "checked" : ""}>{el.text}</p>
                </div>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return { items: state }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTask: (payload) => dispatch(deleteTask(payload)),
        completeTask: (payload) => dispatch(completeTask(payload))

    }
}

export default connect(mapStateToProps, mapDispatchToProps )(TodoItems)

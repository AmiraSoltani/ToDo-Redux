import React, { Component } from 'react'
import { connect } from 'react-redux'
import {addTask} from './actions/action'
import { Button } from 'antd';
import { Input } from 'antd';

class AddItem extends Component {
    constructor() {
        super()

        this.state = {
            myInput: ''
        }

    }
    onChange = (e) => {
        this.setState({
            // [e.target.name]: e.target.value
               myInput:e.target.value
        })
    }

    onclick = (e) => {
        e.preventDefault()
        this.props.addTask({ text: this.state.myInput, key: Date.now(), checked: false })
        this.setState({
            myInput: ""
        })
    }
    render() {
        return (
            <div className="formulaire">
                <h1>To-Do App!</h1>
                <h2>Add New TO-DO</h2>
                <form>
                    <Input
                        name="myInput"
                        className='myinput'
                        value={this.state.myInput}
                        size="large"
                        placeholder="Enter new task"
                        onChange={this.onChange} />
                    <Button className="mybutton" onClick={(e) =>this.onclick(e) }>Add</Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (payload) => dispatch(addTask(payload))
    }
}

export default connect(null,mapDispatchToProps)(AddItem)
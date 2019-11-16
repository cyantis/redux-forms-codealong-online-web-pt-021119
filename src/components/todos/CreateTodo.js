import React, { Component } from 'react'

class CreateTodo extends Component {

  state = {
    todo: ""
  }

  handleChange = event => {
    this.setState({
      todo: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(event) => this.handleChange(event)}/>
          </p>
          <input type="submit" value="Add todo!"/>
        </form>
      </div>
    )
  }
}

export default CreateTodo;

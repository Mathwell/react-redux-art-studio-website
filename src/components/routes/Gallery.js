import React from 'react'

class Form extends React.Component {
    state = {
      firstName: "John",
      lastName: "Henry"
    }

    handleChange = event => {
        //debugger
        this.setState({
            [event.target.name]: event.target.value
        })
      }

      handleSubmit = event => {
        event.preventDefault()
        //this.sendFormDataSomewhere(this.state)
      }
       
      
    render() {
      return (
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => {this.handleChange(event)}} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
          <input type='submit' value="Enter"/>
        </form>
      )
    }
  }

  export default Form
import React, { Component } from 'react'

class FriendsList extends Component {
  constructor() {
    super()
    this.state = {
      photo: '',
      name: '',
      friends: [],
    }
  }

  handlePhotoChange(event) {
    // console.log(event.target.value)
    this.setState({ photo: event.target.value })
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleAddFriend() {
    const newFriend = {
      name: this.state.name,
      photo: this.state.photo,
    }

    this.setState({
      friends: [...this.state.friends, newFriend],
    })
  }

  render() {
    const friendsList = this.state.friends.map((element, index) => {
      return (
        <div key={index}>
          <img
            style={{ height: '100px', width: '100px' }}
            src={element.photo}
          />
          <p>{element.name}</p>
        </div>
      )
    })

    return (
      <div>
        <input
          onChange={event => this.handlePhotoChange(event)}
          placeholder="Photo"
        />

        <input
          onChange={event => this.handleNameChange(event)}
          placeholder="Name"
        />
        <button onClick={() => this.handleAddFriend()}>Add friend</button>
        {friendsList}
      </div>
    )
  }
}

export default FriendsList

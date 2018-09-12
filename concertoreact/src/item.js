import React from 'react';
import './App.css';
import EditEvent from './edit_event';



export default class Item extends React.Component {
    constructor() {
        super()
        this.state = {
            modal: false
        }
    }

    handleEdit() {
        //open modal on edit click
        this.setState({
            modal: true
        })

    }

    handleDelete() {
        // setup ajax request to the api but first lets confirm with the user this wasnt
        //  a mistake 
        let conf = window.confirm(`Are you sure you want to delete the event with the id of ${this.props.event.id}`)
        if(!conf) {
            // Do Nothing if the user canceled but this is where you put your code in case you want to do something when the user cancels           
        } else {
            // if the user wants to delete, lets go ahead and start our ajax request
            let xhr = new XMLHttpRequest()
            // specify the method, url and if it is async request
            xhr.open('delete', `http://localhost:3000/events/${this.props.event.id}`,true)
            // wait for the request to receieve something back from the server
            xhr.onload = function() {
                //the request has been sent and we have recieved information from the server
                console.log('Event Deleted')
                //alert the user that the event has been deleted
                alert('Event Deleted')
                //now we're going to send information through props to our parent component app.js to let it know there are changes and it has to refresh itself
                this.props.handleDelete()
            }.bind(this)
            // Send the request
            xhr.send()
        }
    }

// Modal is having problems
    // This is to close the currently open modal
    closeModal() {
        //by setting the state to false it is telling the component it is no longer open
        this.setState({
            modal: false
        }, function() {
            // after setting the components state to false, lets tell our parent component 'App' to refresh itself again
            this.props.updateEvents()
        })
    }


    render() {
        return (
            <div className='item'>
                <div className='item-title'>
                    <h5>{this.props.event.band_name}</h5>
                    <button onClick={this.handleEdit.bind(this)}>Edit</button>
                    <button onClick={this.handleDelete.bind(this)}>Delete</button>
                </div>
                <div className='item-info'>
                    <h6 className='muted'>{this.props.event.place}</h6>
                    <h6 className='muted'>{this.props.event.date}</h6>
                    <h6 className='muted'>{this.props.event.event}</h6>
                </div>
                <div className='comments'>
                    <h5 className='comment-title'>Add A Comment</h5>
                    <form>
                        <textarea placeholder='Type your comment out' maxLength='450'></textarea>
                    </form>
                </div>
                <EditEvent modal={this.state.modal} event={this.props.event} closeModal={this.closeModal.bind(this)}/>
            </div>
        )
    }
}

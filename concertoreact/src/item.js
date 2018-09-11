import React from 'react';
import './App.css';
// import EditEvent from './edit_event';



export default class Item extends React.Component {
    constructor() {
        super()
        this.state = {
    
        }
    }

    handleEdit() {
        //open modal on edit click
        this.openModal()    
    }

    handleDelete() {
        // this.deleteEvent()
        let conf = window.confirm(`Are you sure you want to delete the event with the id of ${this.props.event.id}`)
        if(!conf) {
            // Do Nothing            
        } else {
            let xhr = new XMLHttpRequest()
            xhr.open('delete', `http://localhost:3000/events/${this.props.event.id}`,true)
            xhr.onload = function() {
                console.log('Event Deleted')
                alert('Event Deleted')
                this.props.handleDelete()
            }.bind(this)
            xhr.send()
        }
    }

    // openModal() {
    //     let modalWrapper = document.createElement('div')
    //     let modal = document.createElement('div')
    //     modal.className='modal'
    //     modalWrapper.className = 'modal-container'
    //     let body = document.querySelector('body')
    //     body.appendChild(modalWrapper)
    //     modalWrapper.appendChild(modal)
    //     return (
    //         <div>Hellooooo</div>
    //     )
    // }
// Modal is having problems


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
                </div>
                <div className='comments'>
                    <h5 className='comment-title'>Add A Comment</h5>
                    <form>
                        <textarea placeholder='Type your comment out' maxLength='450'></textarea>
                    </form>
                </div>
                {/* <EditEvent/> */}
            </div>
        )
    }
}

import React from 'react'

export default class EditEvent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false
        }
    }

    componentWillMount() {
        console.log(this.props)
    }

    componentWillReceieveProps(nextProps) {
        console.log('next props', nextProps)
        this.setState({
            modal: nextProps.modal,
            event: nextProps.event
        })
    }

    handleEditForm(event) {
        event.preventDefault()
        let xhr = new XMLHttpRequest()
        xhr.open('put', `http://localhost:3000/events/${this.props.event.id}`, true)
        let form = document.querySelector('#editForm')
        console.log(form, form.band_name)
        let newEvent;
        newEvent = {
            band_name: form.band_name.value,
            event: form.event.value,
            date: form.date.value,
            place: form.place.value
        }
        xhr.onload = function() {
            console.log(xhr.responseText)
            this.closeModal()
        }.bind(this)
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xhr.send(JSON.stringify({event: newEvent}))
    }

    closeModal() {
        console.log('closing modal')
        this.setState({
            modal: false
        }, function() {
            this.props.closeModal()
        })
    }

    renderEvent() {
        if(this.props.modal === true) {
            return (
                <div className={`modal-container modal-${this.props.event.id}`}>
                    <div className='modal'>
                        <h1>Edit Event</h1>
                        <h6>Place : {this.props.event.event}</h6>
                        <h6>Date : {this.props.event.date}</h6>
                        <h6>Band Name : {this.props.event.band_name}</h6>
                        <form id='editForm' className='vertial-form' onSubmit={this.handleEditForm.bind(this)} method='post'>
                            <input type='text'name='band_name' placeholder='band name' />
                            <input type='text'name='event' placeholder='event' />
                            <input type='text'name='place'placeholder='place' />
                            <input type='text'name='date' placeholder='date' />
                            <input type='submit'/>
                        </form>
                        <button onClick={this.closeModal.bind(this)}>close</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
    render() {
        
        
        return (
                <div>{this.renderEvent()}</div>
        )
    }
}
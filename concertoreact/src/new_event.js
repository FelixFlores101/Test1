import React from 'react'

export default class NewEvent extends React.Component {
    constructor() {
        super()
        this.state = {
            formData: {}
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        let form, userFormData, newJsonObject;
        form = event.target
        userFormData = {
            event: form.event_name.value,
            band_name: form.band_name.value,
            date: form.event_date.value,
            event_place: form.event_place.value
        }

        newJsonObject = {
            event: userFormData
        }  
        let xhr;
        xhr = new XMLHttpRequest()
        xhr.open('post','http://localhost:3000/events/new_event' ,true)
        
        const jsonObject = JSON.stringify(newJsonObject)
        xhr.onload = function() {
            console.log('added to events', xhr.responseText)
            this.props.triggerUpdate()
        }.bind(this)
        // console.log(jsonObject)
        xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
        xhr.send(jsonObject)
    }


    render() {
        return (
            <div>
                <h1>Concerto</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input name='band_name' placeholder='Enter Band Name'/>
                    <input name='event_name' placeholder='Enter Event Name'/>
                    <input name='event_date' placeholder='Event Date'/>
                    <input name='event_place' placeholder='Event Place'/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}
// import React from 'react'

export default class EditEvent extends React.Component {

    render() {
        return (
            <div className='modal-container'>
                <div className='modal'>
                    <h1>Edit This Event </h1>
                    <form>
                        <input name='band_name' placeholder='band name'/>
                        <input name='event' placeholder='event'/>
                        <input name='place'/>
                        <input name='date'/>
                        <input type='submit'/>
                    </form>
                </div>
            </div>
        )
    }
}
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class AddColorForm extends Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this)
    }

    submit(evt) {
        const {_title, _color} = this.refs
        evt.preventDefault()
        ///alert(`New Color: ${_title.value} ${_color.value}`)
        this.props.onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    render(){
        return (
            <form onSubmit={this.submit} >
                <input ref="_title" type="text" 
                        placeholder="color title..." required />
                <input ref="_color" type="color" required />
                <button>ADD</button>
            </form>
        )
    }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
}

AddColorForm.defaultProps = {
    onNewColor: f => f
}
export default AddColorForm
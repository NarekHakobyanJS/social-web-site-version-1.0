import React from 'react'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditeMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditeMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.target.value
        })
    }
    componentDidUpdate(prevProps, prevState){
       if(prevProps.status !== this.props.status) {
        this.setState({
            status : this.props.status
        })
       }
     
    }
    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.activateEditeMode}>{this.props.status || '========='}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} value={this.state.status} onBlur={this.deactivateEditeMode} />
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus
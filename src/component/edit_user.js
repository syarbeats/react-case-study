import React from 'react';

class EditUser extends React.Component{

    constructor(props){
        super(props);

    }

    componentDidMount() {
        console.log("UserId: "+this.props.match.params.id);
    }

    render() {
        return(
            <div>Hello {this.props.match.params.id}</div>
        );
    }
}

export default EditUser;
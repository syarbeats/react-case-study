import React from 'react';
import { Link } from 'react-router-dom';

class UserList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users : [],
        }

        this.getUserList = this.getUserList.bind(this);
    }

    componentDidMount(){
        console.log('Component DID MOUNT!');
        this.getUserList();
    }

    getUserList(){
        fetch("http://localhost:8080/api/v1/users/", {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiQWRtaW4iLCJpYXQiOjE1NTYxNTk3NzgsImV4cCI6MTU1NjE2NTgyNn0.S2-zPKw__iEC9gu3vYTHIU3qyl4UIB6qRSERK5jj2Fw",
            }
        }).then(response => response.json())
            .then(data => this.setState({ users: data.content }));
    }

    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-header">User Lists</div>
                    <div className="card-body">
                        <table className="table table-striped">
                            <tbody>
                            <tr>
                                <th>ID</th>
                                <th>USERNAME</th>
                                <th>FIRSTNAME</th>
                                <th>LASTTNAME</th>
                                <th>EMAIL</th>
                                <th>ROLE</th>
                                <th>STATUS</th>
                                <th></th>
                                <th></th>
                            </tr>
                            {this.state.users.map((data, i) => <TableRow key = {i} data = {data} />)}
                            {console.log(this.state.users)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }

}

class TableRow extends React.Component{
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.username}</td>
                <td>{this.props.data.firstName}</td>
                <td>{this.props.data.lastName}</td>
                <td>{this.props.data.email}</td>
                <td>{this.props.data.role}</td>
                <td>{this.props.data.enabled}</td>
                <td><Link to={'/user/edit/'+this.props.data.id} className="btn btn-info" >Edit</Link></td>
                <td><Link to={'/user/delete/'+this.props.data.id} className="btn btn-info">Delete</Link></td>
            </tr>
        );
    }
}

export default UserList;

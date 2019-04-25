import React from 'react';

class UserRegister extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        }
        this.submitData = this.submitData.bind(this);
        this.updateUsernameInput = this.updateUsernameInput.bind(this);
        this.updateFirstNameInput = this.updateFirstNameInput.bind(this);
        this.updateLastNameInput = this.updateLastNameInput.bind(this);
        this.updatePasswordInput = this.updatePasswordInput.bind(this);
        this.updateEmailInput = this.updateEmailInput.bind(this);
    }

    updateEmailInput(event){
        this.setState({email : event.target.value})
    }

    updateUsernameInput(event){
        this.setState({username : event.target.value})
    }

    updatePasswordInput(event){
        this.setState({password : event.target.value})
    }

    updateFirstNameInput(event){
        this.setState({firstname : event.target.value})
    }

    updateLastNameInput(event){
        this.setState({lastname : event.target.value})
    }


    submitData = () =>{
        console.log("Username "+ this.state.username);
        console.log("Kirim Data "+ this.state.firstname+" "+this.state.lastname);

        let payload = {
            username: this.state.username,
            firstName: this.state.firstname,
            lastName: this.state.lastname
        };

        console.log("Payload:"+JSON.stringify( payload ));


        if(this.state.username !== "" && this.state.firstname !== "" && this.state.lastname !== "" && this.state.password !== "" && this.state.email !== ""){
            let formData = new FormData();
            formData.append('username', this.state.username);
            formData.append('firstname', this.state.firstname);
            formData.append('lastname', this.state.lastname);
            formData.append('password', this.state.password);
            formData.append('email', this.state.email);

            fetch("http://localhost:8080/api/v1/users/register", {
                method: 'POST',
                body: formData,
                headers:{
                    'Authorization': 'Bearer '+ "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiQWRtaW4iLCJpYXQiOjE1NTYxNTk3NzgsImV4cCI6MTU1NjE2NTgyNn0.S2-zPKw__iEC9gu3vYTHIU3qyl4UIB6qRSERK5jj2Fw",
                }

            }).then(res => {
                console.log("Status:"+res.status);
                if(res.status == "200"){
                    this.setState({message: "User has been registered successfully!",
                        username: '',
                        firstname: '',
                        lastname: '',
                        password: '',
                        email: ''
                    });
                }
            })
        }else {
            console.log("Please fill the data completely!");
            this.setState({message: "Please fill the data completely!"});
        }

    }

    render() {
        return(
            <div className="card">
                <div className="card-header">Register New User</div>
                <div className="card-body">
                    <div>
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <label className="btn btn-primary" value={this.state.message}>{this.state.message}</label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="username">Username:</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={this.updateUsernameInput} value={this.state.username} className="form-control" placeholder="Enter your username" name="username" required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="password">Password:</label>
                                <div className="col-sm-10">
                                    <input type="password" onChange={this.updatePasswordInput} value={this.state.password}  className="form-control" placeholder="Enter your password" name="password" required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="firstname">FirstName:</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={this.updateFirstNameInput} value={this.state.firstname} className="form-control" placeholder="Enter your firstname" name="firstname" required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="lastname">LastName:</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={this.updateLastNameInput} value={this.state.lastname} className="form-control" placeholder="Enter your lastname" name="lastname" required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                                <div className="col-sm-10">
                                    <input type="text" onChange={this.updateEmailInput} value={this.state.email} className="form-control" placeholder="Enter your email" name="email" required/>
                                </div>
                            </div>

                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button type="submit" onClick={() => this.submitData()} className="btn btn-info">Submit</button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default UserRegister;
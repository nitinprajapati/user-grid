import React, { Component } from 'react';
import * as Actions from './../actions/users';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {Table, Button} from 'react-bootstrap';

class Users extends Component {
    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        const {Users} = this.props.Users;
        return (
             <Table responsive>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Avtar</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Users.length !== 0 && Users.map((user, key) => {
                        return(
                            <tr key={key}>
                                <td>{user.first_name}</td>
                                <td>{user.last_name}</td>
                                <td><img src={user.avatar} alt={user.first_name} /></td>
                                <td onClick={this.props.deleteUser}><Button className="btn btn-danger" data-userid={user.id} >Delete</Button></td>
                            </tr>
                        )
                    })}
                    <tr>
                        
                    </tr>
                </tbody>
            </Table>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        Users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getUsers: Actions.fectchUsers,
        deleteUser: Actions.deleteUser
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
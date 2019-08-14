import React, { Component } from 'react'
import firebase from  "../initializers/firebase"
import {connect} from "react-redux"
import AuthElement from "../componets/AuthElement"
import {saveToken, clearToken} from "../initializers/actions"

class Login extends Component {
    constructor(props)
    {super(props)
        this.login = this.login.bind(this)
        this.logout = this.logout.bind(this)
    }
      


    login(){
        let provider = new firebase.auth.GoogleAuthProvider()
        provider.addScope("https://www.googleapis.com/auth/photoslibrary")
        firebase.auth().signInWithPopup(provider).then(result =>{
            let token = result.credential.accessToken
            this.props.saveToken(token)
            console.log(token)
        }).catch(err=>{
            console.log(err)
        })
    }
    logout(){
        firebase.auth().signOut().then(()=>{
        this.props.clearToken()
        })

    }
    
    render() {
        return (
            <AuthElement 
            login={this.login}
            logout={this.logout}
         
            token ={this.token}
            user = {this.props.user}/>
        )
    }
}

const mapStateToProps =(state)=>{
    return{
        token: state.token,
        user: state.user
    }
}

const mapDispachToProps = {
saveToken: saveToken,
clearToken: clearToken
}

export default connect(mapStateToProps,mapDispachToProps)(Login)
import React from 'react'
import IconButtom from "@material-ui/core/IconButton"
import ExitToApp from "@material-ui/icons/ExitToApp"
import Avatar from "@material-ui/core/Avatar"
import Button from '@material-ui/core/Button'
import { withStyles } from "@material-ui/core/styles"

const AuthElement =  function (props) {
    const logInButton=()=>{
        if (props.user)return( 
            [<Avatar src = {props.user.providerData[0].photoURL}/>,<IconButtom color = "inherit"onClick={props.logout}><ExitToApp></ExitToApp></IconButtom>]
        )
        return (
        <Button variant ="contained" onClick ={props.login} >
        Iniciar Sesion con Google
        </Button>    
    )
    }
  
        return (
            <div className ={props.classes.container}>
                {logInButton()}
            </div>
        )
    }
export default withStyles({
container: {
    display: "flex",
    flexDirection: "row"
}
})(AuthElement)
import React from 'react'
import  { withStyles } from '@material-ui/styles'
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import PhotosCarrousel from "./PhostosCarrousel"
function PhothosList(props) {
    return (
        <div className ={props.classes.container}>
            { props.album &&[
            <Typography varint ="h4" component ="h2">{props.album? props.album.title:""}</Typography>,
            <Button>Regresar Atras</Button>,
            <Typography varint ="headline" component ="h3">Fotos del album</Typography>,
            <Typography varint ="caption" component ="p">{props.photos.length} Fotos(s) en este album</Typography>,
            <PhotosCarrousel photos ={props.photos}></PhotosCarrousel>
            ]    
        }
        </div>
    )
}
export default withStyles({
    container:{
        justifyContent: "center"
    }
})(PhothosList)

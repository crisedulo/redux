import React from 'react'
import AlbumCard from "./AlbumCard"
import Grid from "@material-ui/core/Grid"
import  { withStyles } from '@material-ui/styles'

function AlbumsList(props) {
    return (
        <Grid container spacing ={16} justify ="center">
            {
                props.albums.map((album,index)=>{
                return <AlbumCard setAlbum ={props.setAlbum} album ={album} key = {index}/>
            })
            }
        </Grid>
    )
}
export default withStyles({

})(AlbumsList)
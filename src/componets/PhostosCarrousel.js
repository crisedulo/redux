import React from 'react'
import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"


function PhostosCarrousel(props) {
    return (
        <div className = {props.classes.container}>
            {props.photos.map((photo,index)=>{
                return(
                    <Card key ={photo.id} className ={props.classes.card}>
                        <img className={props.classes.img} src={photo.baseUrl}/>
                        <CardContent>
                            <Typography variant ="caption" component ="p">
                                {photo.filename}
                            </Typography>
                        </CardContent>
                    </Card>
                )

            })}
        </div>
    )
}
export default withStyles ({
    container: {
        display: "flex",
        flexDirection: "row",
        overflowX: "scroll",
        justifyContent: "center",
        padding:"1em 0"
    },
    img:{
        minWidth: "100%",
        height:"auto"

    },
    card:{
        minwith: "300px",
        marginRigth: "1em"
    }
})(PhostosCarrousel)
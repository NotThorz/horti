
import { makeStyles } from "@material-ui/core/Styles";
export default makeStyles(()=>({
    root:{
        maxWidth:"100%",
        padding:"18px",
        marginTop:"5px",
    },
  media: {
    height: 0 ,
    paddingTop: '56.25%', // 16:9
  },
    CardActions:{
        display:'flex',
        justifyContent:'flex-end',
    },
    CardContent:{
        display:'flex',
        justifyContent:'space-between'
    }
}))
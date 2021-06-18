import React from 'react'
import { Card,CardMedia,CardContent,CardActions,Typography} from '@material-ui/core'
import useStyles from'./styles'
const Product = ({product}) => {
    const classes=useStyles();
    return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image} title={product.name} />
                <CardContent>
                    <div className={classes.Cardcontent}>
                        <Typography variant="h6" gutterBottom>
                        {product.name}
                        </Typography>
                         <Typography variant="p" gutterBottom>
                        {product.price} MAD
                        </Typography>
                    </div>
                    <Typography variant="body1" color="textSecondary" >
                        {product.description}
                    </Typography>
                </CardContent>
                 <CardActions disableSpacing className={classes.cardActions}></CardActions>
            </Card>
    )
}

export default Product


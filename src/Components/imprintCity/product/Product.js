import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import useStyles from "../responsive";
// import { Button } from "@material-ui/core";
import imprintheme from "../theme/theme";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
const Product = () => {
    const classes = useStyles();
    return (
        <>
            <Box gap="20px 20px" mt={10}
            >
                <Container maxWidth="xl">
                    <Grid container spacing="19px">
                        
                            {
                                productItem.map((item) => {
                                    return (
                                        <>
                                        <Grid item xl={3} lg={3} md={3} sm={6} xs={12} mb={5}>
                                            <Box className={classes.product} padding='16px 16px 0 16px' minHeight="426px">

                                                <Box
                                                    maxWidth="74px"
                                                    color="common.white"
                                                    minHeight="27px"
                                                    bgcolor="common.black"
                                                    textAlign="center"
                                                    lineHeight="26px"
                                                    fontFamily="Proxima-Regular"
                                                    letterSpacing="0.82px"
                                                >
                                                    {item.badgeBtn}
                                                </Box>
                                                <Box textAlign="center" maxWidth="250px" margin="0 auto" width="100%">
                                                    <img src={item.imgsrc} alt='img'></img>
                                                </Box>
                                            </Box>
                                            <Box pt={3}>
                                                <Typography
                                                    variant="body1"
                                                    fontFamily="Proxima-Regular"
                                                    fontSize="20px"
                                                    lineHeight="24px"
                                                    color={imprintheme.palette.blackColor.darkBlack}
                                                >{item.productName}</Typography>
                                                <Box display="flex" alignItems="center" justifyContent="space-between" flexWrap="wrap">
                                                    <Box display="flex" gap="40px 20px" alignItems="center" flexWrap="wrap" marginTop="10px">
                                                        <Box variant="body1" fontFamily="Proxima-SemiBold" lineHeight="22px" fontSize="18px" color={imprintheme.palette.redColor.dark}>{item.realPrice}</Box>
                                                        <Box variant="body1" fontFamily="Proxima-SemiBold" lineHeight="22px" fontSize="18px" color={imprintheme.palette.common.greyish}><del>{item.delPrice}</del></Box>
                                                    </Box>
                                                    <img src="images/dott.png" alt="dott.png"></img>
                                                </Box>
                                            </Box>
                                            </Grid>
                                        </>
                                    )
                                })
                            }

                        
                    </Grid>
                   

                </Container>
            </Box>
        </>
    )
}

const productItem = [
    {
        badgeBtn: '86%',
        imgsrc: 'images/Image 38.png',
        productName: 'Sweatshirts',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'
    },
    {
        badgeBtn: '86%',
        imgsrc: 'images/mugs.png',
        productName: 'Classic C-Handle 11oz Mugs',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'
    },
    {
        badgeBtn: '86%',
        imgsrc: 'images/Image 42.png',
        productName: 'Custom Classic Soft Crown Caps',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'

    },
    {
        badgeBtn: '86%',
        imgsrc: 'images/Image 40.jpg',
        productName: 'Classic C-Handle 11oz Mugs',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'

    },
    {
        badgeBtn: '86%',
        imgsrc: 'images/15-oz-campfire-ceramic-mugs.png',
        productName: 'Classic C-Handle 11oz Mugs',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'

    },
    {
        badgeBtn: '86%',
        imgsrc: 'images/Image 42.png',
        productName: 'Custom Classic Soft Crown Caps',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'

    },
    {
        badgeBtn: '86%',
        imgsrc: 'images/Image 38.png',
        productName: '2 Mesh Long Sleeve Tee',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'

    },
    {
        badgeBtn: '86%',
        imgsrc: 'images/Image 44.png',
        productName: 'Fluted Stadium Cup- 16 Oz.',
        realPrice: '$2.00',
        delPrice: '$2.00',
        dottImg: 'images/dott.png'
    }

]
export default Product;
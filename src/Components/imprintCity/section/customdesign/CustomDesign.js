import { Box, Container, Typography } from "@mui/material";
import { Grid } from "@material-ui/core";
import useStyles from "../../responsive";
import { Button } from "@material-ui/core";
import imprintheme from "../../theme/theme";
const CustomDesign = () => {
    const classes = useStyles();
    return (
        <>
        <Container>
        <Box margin="70px 0">
        <Box className={classes.tiTle} >
            <Typography variant="h2" fontFamily="Proxima-Regular">  Custom your design</Typography>
        </Box>
        </Box>
        </Container>
        <Box className={classes.customBanner} position="relative">

            <Container >
                <Grid container >
                    <Grid item lg={5} md={5}>
                        <Box position='absolute' right='5%' top='30%' className={classes.bannerText}
                        >
                        <Typography 
                        variant="h2" 
                        fontSize={{lg:39 ,md:39,sm:39,xs:30}}
                         
                         color={imprintheme.palette.blackColor.extraLight}
                          fontFamily="Prefectura">
                            Best Seller
                        </Typography>
                        
                        <Typography variant="h1"  
                        fontSize={{lg:67 ,md:67,sm:67,xs:60}}
                         color={imprintheme.palette.blackColor.extraDark} 
                         fontFamily='Proxima-SemiBold' 
                         textTransform="uppercase"
                         letterSpacing="1.88px"
                        >
                           Custom Apparel
                        </Typography>
                        <Typography variant="body2" color={imprintheme.palette.blackColor.dark}>
                        Call us today and find out how you can leave a lasting impression at your next event!
                        </Typography>
                        <Box >
                       
                        <Button variant="contained" color='secondary'  className={classes.orangeBtn}>
                        shop now
                        </Button>
                        </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
        </>
    )
}
export default CustomDesign;
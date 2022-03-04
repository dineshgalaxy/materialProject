import { Box, Container, Typography,} from "@mui/material";
import useStyles from "../responsive";
import {Button }from '@material-ui/core'
import imprintheme from "../theme/theme";
const MainBanner = () => {
    const classes = useStyles();
    return (
        <Box className={classes.mainBanner} position="relative">
            <Container maxWidth="xl">
                <Box 
                position='absolute' 
                top='22%'
                className={classes.bannerText}
                >
                    <Typography
                        variant="h2"
                        fontSize={{ lg: 84, md: 84, sm: 84, xs: 50 }}
                        color={imprintheme.palette.primary.main}
                        fontFamily="Prefectura"
                    >
                        Customize
                    </Typography>

                    <Typography 
                    variant="h1"
                     fontSize={{ lg: 112, md: 112, sm: 112, xs: 60 }} 
                     color="common.black" 
                     fontFamily='Prefectura'
                     letterSpacing="0.67px"
                     lineHeight= '0.9'
                    style={{opacity:0.67}}
                    >
                        Your Design
                    </Typography>
                    <Typography 
                    variant="h5" 
                    color={imprintheme.palette.blackColor.dark}
                    lineHeight= {{lg:'70px' ,md:'70px',sm:'60px',xs:'40px'}}
                    >
                        Orders Shipped as Quick as Tomorrow!
                    </Typography>
                    <Box >
                        <Button variant="contained"  className={classes.blueBtn}>
                            browse
                        </Button>
                        <Button variant="contained" >
                            shop now
                        </Button>
                        
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}
export default MainBanner;
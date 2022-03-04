import { Box, Container, Typography, } from "@mui/material";
import { Button } from '@material-ui/core'
import imprintheme from "../../theme/theme";
import useStyles from "../../responsive";
const CustomApparel = () => {
    const classes = useStyles();
    return (
        <Box className={classes.customApparel} position="relative">
            <Box
                bgcolor={imprintheme.palette.secondary.main}
                textTransform="uppercase"
                color="common.white"
                fontFamily='Proxima-Bold'
                fontSize="37px"
                padding="15px 40px"
                maxWidth="243px"
                position="absolute"
                bottom="0"
                left="0"
            >
                30% off
            </Box>
            <Container maxWidth="xl">
                <Box position='absolute' right='5%' top='30%' pl={2} className={classes.bannerText}
                >
                    <Typography
                        variant="h2"
                        fontSize={{ lg: 39, md: 39, sm: 39, xs: 30 }}

                        color={imprintheme.palette.blackColor.extraLight}
                        fontFamily="Prefectura"
                        lineHeight="60px"
                    >
                        Best Seller
                    </Typography>

                    <Typography variant="h1"
                        fontSize={{ lg: 67, md: 67, sm: 67, xs: 60 }}
                        color={imprintheme.palette.blackColor.extraDark}
                        fontFamily='Proxima-SemiBold'
                        textTransform="uppercase"
                        letterSpacing="1.88px"
                        lineHeight="75px"
                    >
                        Custom Apparel
                    </Typography>
                    <Typography variant="body2" lineHeight="27px" fontFamily='Proxima-Regular' fontSize="14px" color={imprintheme.palette.blackColor.dark} maxWidth="400px">
                        Call us today and find out how you can leave a lasting impression at your next event!
                    </Typography>
                    <Box >

                        <Button variant="contained" fontFamily='Raleway-Medium'>
                            shop now
                        </Button>
                    </Box>
                </Box>

            </Container>
        </Box>
    )
}
export default CustomApparel;
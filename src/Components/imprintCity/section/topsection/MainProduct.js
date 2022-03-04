import React from 'react';
import Card from '@material-ui/core/Card';
import { Box, Container, Grid, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@material-ui/core';
import useStyles from '../../responsive';

export default function RecipeReviewCard() {
    const classes = useStyles();
    return (
        <Box>
            <Container maxWidth="xl">
                <Box

                    gap="20px 20px"

                >
                    <Grid container spacing="19px">
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Box
                                className={`${classes.mainProduct} ${classes.cupImg}`}
                            //  minHeight="520px"
                            //  padding="59px 30px"
                            //  position="relative"
                            //  borderRadius='0px'
                            >
                                <Box >

                                    <Typography
                                        color="common.white"
                                        variant="h2"
                                        fontSize="26px"
                                        fontFamily="Proxima-Regular"
                                        fontWeight="300"
                                        textTransform="uppercase"

                                    >12 Factors for</Typography>
                                    <Box mt={2}>
                                        <Typography
                                            variant="h2"
                                            // fontSize="78px"
                                            fontSize={{ sm: '50px', lg: '78px', md: '65px', xs: '40px' }}
                                            color="common.white"
                                            textTransform="uppercase"
                                            fontFamily="Proxima-Bold"
                                            lineHeight="48px"
                                        >A Good
                                            <Box variant="span" fontSize={{ sm: '40px', lg: '54px', md: '52px', xs: '30px' }} mb={2}>Promotional</Box>
                                            item
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box gap="20px 10px" className={classes.inputBtn} noValidate autoComplete="off" display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">

                                    <TextField id="outlined-basic" label="Enter email to download" variant="outlined" size="small" />
                                    <Button variant="contained" size="small" className={classes.yellowBtn}>download</Button>

                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Box
                                className={`${classes.mainProduct} ${classes.adobeStock}`}
                                minHeight="520px"
                                padding="59px 30px"
                                position="relative"
                                borderRadius='0px'

                            >
                                <Box >

                                    <Typography
                                        color="common.black"
                                        fontWeight="bold" variant="h5"
                                        fontSize="34px"
                                        fontFamily="Proxima-Bold"
                                        textTransform="uppercase"

                                    >10 keys to</Typography>
                                    <Typography
                                        variant="h2"
                                        fontSize="54px"
                                        fontFamily="Proxima-Bold"
                                        textTransform="uppercase"
                                        color="common.black"
                                        fontWeight="bold"
                                        lineHeight="52px"
                                    >T-shirt
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        fontFamily="Proxima-Bold"
                                        fontSize="34px"
                                        color="common.black"
                                        textTransform="uppercase"
                                        fontWeight="bold"
                                        letterSpacing="-1px"
                                    >marketing </Typography>
                                </Box>
                                <Box gap="20px 10px" className={classes.inputBtn} display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">

                                    <Button variant="contained" size="small" className={classes.blueBtn}>Get Report</Button>

                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                            <Box
                                className={`${classes.mainProduct} ${classes.orangeCap}`}

                            >
                                <Box pb={1}>

                                    <Typography variant="h3xl" maxWidth="285px" display="block" lineHeight="50px"
                                        fontSize={{ lg: '42px', md: '35px', sm: '40px', xs: '35px' }}
                                        fontFamily="Proxima-Bold"
                                        color="common.black" textTransform="uppercase" fontWeight="bold" letterSpacing="-1px">21 great
                                        ways to
                                        grow your
                                        Sales with
                                        Custom
                                        Built Caps! </Typography>
                                </Box>
                                <Box gap="20px 10px" className={classes.inputBtn} display="flex" justifyContent="center" alignItems="center" flexWrap="wrap">

                                    <Button variant="contained" size="small" className={classes.blueBtn}>Get Report</Button>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>


                </Box>
            </Container>
        </Box>
    );
}

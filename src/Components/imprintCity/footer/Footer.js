import { Container, Grid, Typography,Box  } from "@mui/material";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Button } from "@material-ui/core";
import useStyles from "../responsive";
const Footer = () => {
    const classes = useStyles();
    return (
        <Box
            bgcolor="#313d4d"
            py={{ xs: 2, sm: 4, md: 8, xl: 8 }}
        >
            <Container maxWidth="xl">
                <Grid
                    container 
                >

                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}>
                        <Box pb={3}>
                            <img src="logo2.png" alt="footer logo" maxWidth="270px" />
                        </Box>

                        <Box pb={3}>
                            <Typography fontSize="19px" fontFamily="Proxima-Regular" color="common.white">Address:</Typography>
                            <Typography variant="body2" fontSize="15px" fontFamily="Proxima-Regular" color="common.white">imprint city, 199N. Linder
                                Rd Meridian, ID 83642</Typography>
                        </Box>
                        <Box pb={3}>
                            <Typography fontSize="19px" fontFamily="Proxima-Regular" color="common.white">Phone:</Typography>
                            <Typography variant="body2" fontSize="15px" fontFamily="Proxima-Regular" color="common.white">866-303-7827</Typography>
                        </Box>
                        <Box pb={3}>
                            <Typography fontSize="19px" fontFamily="Proxima-Regular" color="common.white">Email:</Typography>
                            <Typography variant="body2" fontSize="15px" fontFamily="Proxima-Regular" color="common.white">info@imprintcity.com</Typography>
                        </Box>
                        <TwitterIcon color="error" fontSize="large" />
                        <FacebookIcon color="error" fontSize="large" />
                        <LinkedInIcon color="error" fontSize="large" />

                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}>
                        <Typography fontSize="24px" fontFamily="Proxima-Regular" color="common.white">
                        Useful Link
                        </Typography>
                        <Box width="30px" mt={1} height="2px" bgcolor="common.white" >

                        </Box>
                        <List component="nav">
                            {
                                footerItem.map((value) => {
                                    return (
                                        <ListItem key={value.item} className={classes.footerItem}>
                                            <ListItemText primary={
                                                <Typography
                                                    color="common.white"
                                                    variant="h6">
                                                    {value.item}
                                                </Typography>
                                            } />
                                        </ListItem>

                                    )
                                })

                            }
                        </List>


                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}>
                        <List>
                            {
                                footItem.map((value) => {
                                    return (

                                        <ListItem key={value.item} className={classes.footerItem}>
                                            <ListItemText
                                                primary={
                                                    <Typography
                                                        color="common.white"
                                                        variant="h6"
                                                    >
                                                        {value.item}
                                                    </Typography>
                                                }
                                            />
                                        </ListItem>

                                    )
                                })

                            }
                        </List>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
                        lg={3}>
                        <Box py={3} ><Typography color="error">
                            Looking to connect with
                            your loved one on Connect Network?
                        </Typography></Box>
                        <Box
                            color="error">
                            <Button
                                variant="outlined"
                                color="error"
                                className={classes.btn} >
                                Connect now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

const footerItem = [{ item: 'communications' }, { item: 'Rehabilitation' }, { item: 'Facilities' }, { item: 'Payment' }]
const footItem = [{ item: 'About' }, { item: 'Pressroom' }, { item: 'Contact us' }, { item: 'Privacy policy' }]

export default Footer;
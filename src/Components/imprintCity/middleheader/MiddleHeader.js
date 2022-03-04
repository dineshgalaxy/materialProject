import imprintheme from "../theme/theme";
import { Box, Container, Typography } from "@mui/material";
import useStyles from "../responsive";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FilledInput from '@material-ui/core/FilledInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
const MiddleHeader = () => {
    const classes = useStyles();
    return (
        <>
            <Box bgcolor={imprintheme.palette.primary.main} py={1}>
            <IconButton margin="10px" className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                <Container maxWidth="xl">
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        gap="10px 10px"
                        className={classes.middleHeader}
                    >
                       
                        <Box>
                            <img src="logo2.png" alt="logo2.png"></img>
                        </Box>
                        <Box
                            maxWidth='700px'
                            width='100%'
                        >
                            <Box
                            >
                                <FormControl variant="filled" size="small" fullWidth >
                                    <InputLabel htmlFor="filled-adornment-text" fontSize="16px">Search</InputLabel>
                                    <FilledInput
                                        endAdornment={
                                            <InputAdornment position="end">
                                                {/* <SearchIcon color="primary" fontSize="24px"></SearchIcon> */}
                                                <img src="magnifying-glass.png" alt="magnifying-glass.png" />
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>
                        </Box>
                        <Box>
                            <Box
                                display="flex"
                                alignItems="center"
                                flexWrap="wrap"
                                gap="10px 30px"
                                padding="6px 0"
                            >
                                <Box display="flex" gap="0px 12px" alignItems="center">

                                    <img src="icon/user.png" alt="user.png"></img>
                                    <Typography fontFamily='Proxima-SemiBold' fontSize="16px" color="common.white">Account</Typography>
                                </Box>
                                <Box display="flex" gap="0px 12px" alignItems="center" >
                                    <Badge badgeContent={6} color="secondary">
                                        <img src="icon/cart.png" alt="cart.png"></img>
                                    </Badge>

                                    <Typography fontFamily='Proxima-SemiBold' fontSize="16px" color="common.white">Cart</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}
export default MiddleHeader;
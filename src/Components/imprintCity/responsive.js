import { makeStyles } from "@material-ui/core/styles";
import imprintheme from "./theme/theme";
import Image from '../../images/imprintHero.jpg'
import adobeStock from '../../images/AdobeStock.jpg';
import orangeCap from '../../images/capimg.jpg';

const useStyles = makeStyles((theme) => ({

    //button
    whiteBtn: {
        color: imprintheme.palette.secondary.main,
        backgroundColor: imprintheme.palette.common.white,
        '&:hover': {
            backgroundColor: imprintheme.palette.common.white,
            boxShadow: '#056688 0px 14px 30px -10px !important',
            transition: '0.3s !important',
            color: imprintheme.palette.secondary.main,
        }
    },
    yellowBtn: {
        backgroundColor: imprintheme.palette.secondary.light,
        color: imprintheme.palette.common.black,
        '&:hover': {
            backgroundColor: imprintheme.palette.secondary.light,
            color: imprintheme.palette.common.black,
        }
    },

    blueBtn: {
        backgroundColor: imprintheme.palette.primary.main,
        color: imprintheme.palette.common.white,
        '&:hover': {
            backgroundColor: imprintheme.palette.primary.main,
            padding: '20px 52px!important',
            boxShadow: '#056688 0px 14px 30px -10px !important',
            transition: '0.3s !important',
            color: imprintheme.palette.common.white,
        }
    },


    divider: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },

    middleHeader: {
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap'
        },
        '& div:nth-child(2)': {
            [theme.breakpoints.down('sm')]: {
                order: 3,
                maxWidth: '100%'
            }
        },
        '& div:nth-child(3)': {
            [theme.breakpoints.down('sm')]: {
                order: 2,
            }
        }
    },
    menuButton: {
        display: 'none',
        [theme.breakpoints.down(767)]: {
            display: 'inline-block',
            color: 'white',
        }
    },

    menu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& li': {
            width: 'auto',
            padding: '0',
            '& a': {
                padding: '10px 60px',
                color: imprintheme.palette.blackColor.main,
                fontSize: '18px',
                [theme.breakpoints.down('md')]: {
                    padding: '10px 38px',
                },
                [theme.breakpoints.down('sm')]: {
                    padding: '10px 25px',
                    fontSize: '15px'
                },

            },
            '&+li::before': {
                backgroundColor: '#444',
                content: "''",
                fontSize: '13px',
                width: '1px',
                height: '25px'

            }
        },

        [theme.breakpoints.down(767)]: {
            display: 'none'
        },

    },
    // main banner

    mainBanner: {
        minHeight: 690,
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down('xs')]: {
            minHeight: 450,
        },
    },
    bannerText: {
        '& button': {
            marginRight: '15px',
            marginTop: '20px'
        },
        [theme.breakpoints.down('xs')]: {
            top: '10%!important',

        },
    },

//top section
topSection:{
    padding:'84px 0',
    '& div+div::before': {
            backgroundColor: imprintheme.palette.blackColor.bColor,
            content: "''",
            fontSize: '13px',
            width: '1px',
            height: '48px',
            margin:'0 30px'
        }
    },


   
    mainProduct:{
        backgroundImage: `url('images/mugimg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: '0px',
        minHeight: '520px',
        height:'100%',
        padding: '59px 30px',
        position:'relative'
    },
    adobeStock:{
        backgroundImage: `url(${adobeStock})`,
    },
    orangeCap:{
        backgroundImage: `url(${orangeCap})`,  
    },
    inputBtn: {
        position:'absolute',
        bottom:0,
        paddingBottom:'50px'
    },

    //product

    product:{
        backgroundColor:'#f5f5f5'
    },

    //appereal
    customApparel:{
        minHeight: 622,
        backgroundImage: `url('images/SDGSD.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        [theme.breakpoints.down('xs')]: {
            minHeight: 450,
        },
    },
    offer:{
        transform:"skew(-180deg )"

    },
    //categories
    customCap:{
        backgroundImage: `url('images/verticle.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight:"1028px",
        maxWidth:"500px",
        padding:'28px',
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            maxWidth:'100%'
        },
    },
    customBag:{
        backgroundColor:imprintheme.palette.primary.main,
        padding:'28px',
        [theme.breakpoints.down('xs')]: {
          
        },
    },
    orangeCup:{
        backgroundColor:imprintheme.palette.yellowColor.main,
        padding:'28px',
        [theme.breakpoints.down('xs')]: {
          maxWidth:'100%!important'
        },
    },
    beautyGirl:{
        backgroundImage:`url('images/beautyGirl.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth:"485px",
        minHeight:"515px",
        padding:'28px',
        [theme.breakpoints.down('xs')]: {
          maxWidth:'100%'
        },
    },
    categories:{
        [theme.breakpoints.down('sm')]: {
            flexDirection:'column'
        },
    }

}));
export default useStyles;

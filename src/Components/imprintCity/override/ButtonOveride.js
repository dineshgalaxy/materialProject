
const ButtonOverRide = {
    MuiButton: {
        outlined: {
                border: '1px solid #f2790c',
                padding:'16px 18px',
                lineHeight:'14px',
                letterSpacing:'1.74px',
              },
              
              contained: {
                color: '#fff',
                border: '0px',
                padding:'14px 39px',
                lineHeight:'18px',
                letterSpacing:'1.73px',
                boxShadow: 'none',
                fontSize:'15px',
                backgroundColor:'#f2790c',
                '&:hover':{
                     backgroundColor:'#f2790c',
                        padding:'20px 52px!important',
                        boxShadow: '#056688 0px 14px 30px -10px !important',
                        transition: '0.5s !important',
                        color:'#fff',
                    }
              },
        sizeLarge: {
            // minWidth: '192px',
            fontSize:'30px',
            // padding: '8px 51px',
        },
        sizeSmall: {
            fontSize:'12px',
            padding:'14px 30px',
        },
        sizeMedium: {
            // minWidth: '160px',
           fontSize:'19px'
        },
        containedSecondary: {
            color: '#0000'
        },
        colorInherit: {
            color: '#0000',
            backgroundColor: '#0000'
        },
       

        root: {
            borderRadius: '0px',
            textTransform: 'uppercase',
            letterSpacing:'1.73px',
            fontFamily: 'Proxima-Regular',
            fontSize:'15px',
            '&.semiBorder': {
                borderRadius: '0px 0px 20px 20px',
                padding:'8px 5px'
            },
            '&.linkBtn': {
                minWidth: 'auto !important',
                padding: `0 !important`,
                marginBottom: '0 !important',
                backgroundColor: 'transparent',
                '&:hover': {
                    backgroundColor: 'transparent !important'
                },
                '&:focus': {
                    backgroundColor: 'transparent !important'
                }
            },
            '&.link-primary': {
                color: '#0000',
                fontFamily: 'Proxima-SemiBold',
                fontSize:'20px',
            },
            '&.link-white': {
                color: "#fff",
                fontFamily: 'Proxima-SemiBold',
                fontSize:'20px',
            },
            '&.facebooKBtn': {
                backgroundColor:'#0000'
            },
            '&.w-269': {
                width:"269px"
            },
        },
        endIcon:{
            marginLeft:'4px'
        }
    }
};

export default ButtonOverRide;

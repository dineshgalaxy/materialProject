
const InputOverRide = {
    MuiFilledInput: {
        root: {
            color:'#000',
            border: 0,
            borderRadius: '0px',
            backgroundColor:'#fff!important',
            height: '40px',
            '&:hover': {
                backgroundColor:'#fff'
            },
            '&:focus': {
                backgroundColor:'#fff'
            },
            MuiInputLabel: {
                width: '95%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
            },
            '& .MuiInputAdornment-filled.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)':
                {
                    marginTop: 0
                },
            '& .MuiIconButton-root': {
                padding: '0 8px 0 0',
            },
            '&.Mui-error': {
                backgroundColor: '#f2790c',
                borderColor: '#f2790c'
            },
            '&.Mui-focused': {
                backgroundColor: 'transparent',
                boxShadow: 'none !important'
            }
        },
        input: {
            padding: '25px 16px 5px',
            borderRadius:'16px'
        },
        adornedEnd: {
            paddingRight: 0
        },
        underline: {
            '&:before, &:after': {
                border: 'none'
            },
            '&:hover': {
                '&:before, &:after': {
                    border: 'none'
                }
            }
        },
        multiline:{
            height:'120px'
        },

       
    },
    MuiInputLabel: {
        root: {
            width: '100%',
            overflow: 'visible',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontFamily: 'Proxima-Regular',
            color: '#8f8f8f',
            lineHeight:'10px',
            '&.Mui-error': {
                color: '#f2790c'
            },
            '&>div':{
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
            }
        },
        filled: {
            transform: 'translate(16px, 17px) scale(1)',
            paddingRight:'45px',
            '&.MuiInputLabel-shrink': {
                transform: 'translate(16px, 10px) scale(0.75)'
            }
        }
    },
  
    small:{
        fontSize:'12px'
    },
    MuiTextField: {
        variant: {
            // marginBottom: '0px',
            backgroundColor: "#fff!important",
        }
        
    },
    MuiFormControl: {
        //  backgroundColor: "transparent",
        root: {
            padding: '1px 15px',
            backgroundColor: "#fff",
           
            border:'0px',
            '&.noMargin': {
                marginBottom: '8px'
            },
            '&:focus': {
                border:'0px',
                outlined:'0px'
            },
           
        },
        
    }
};

export default InputOverRide;

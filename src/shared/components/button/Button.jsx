import { IconButton } from "@mui/material"

export const CircledIconButton = ({ Icon, size="small", buttonStyle, iconStyle }) => {
    return (
        <IconButton
            size={size}
            sx={[{
                backgroundColor: 'black',
                color: 'white',
                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                '&:hover': {
                    backgroundColor: '#333',
                    boxShadow: "0 4px 20px 0 rgba(0,0,0,0.12)",
                    transform: "scale(1.1)",
                },
            }, buttonStyle]}
        >
            <Icon sx={iconStyle}/>
        </IconButton>            
    )
} 
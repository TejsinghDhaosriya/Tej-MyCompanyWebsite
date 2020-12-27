import { createMuiTheme } from '@material-ui/core/styles';


const tejBlue ="#0B72B9"
const tejOrange="#FFBA60"
export default  createMuiTheme({
    palette:{
        common : {
            blue :`${tejBlue}`,
            orange:`${tejOrange}`
        },
        primary:{
            main:`${tejBlue}`
        },
        secondary:{
            main:`${tejOrange}`
        }
    },
    typography:{
        tab:{
    fontFamily:"Raleway",
    textTransform:"none", //auto upper case band kar deta
    fontWeight :700, //motoapa font ka
    fontSize:"1rem",
        },
    estimate:{

    fontFamily:"Pacifico",
    fontSize:"1rem",
    textTransform:"none", //auto style band kare
    color:"white"
    },
    h2:{
        fontFamily:"Raleway",
        fontWeight:700,
        fontSize:"2.5rem",
        color:`${tejBlue}`,
        lineHeight:"1.5" //kitne gap
    }
    }
}); 
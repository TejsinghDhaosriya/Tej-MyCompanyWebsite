import { createMuiTheme } from '@material-ui/core/styles';


const tejBlue ="#0B72B9"
const tejOrange="#FFBA60"
const tejGrey="#868686"
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
    },
    h3:{
        fontFamily:"Pacifico",
        fontSize:"2.5rem",
        color: tejBlue
    },
    subtitle1:{
     fontSize:"1.25rem",
     frontWeight:300,
     color: `${tejGrey}`,
    },

    h4:{
        fontFamily:"Raleway",
        fontSize:"1.75rem",
        color:`${tejBlue}`,
        fontWeight:700
    },
    learnButton:{
        borderColor: tejBlue,
    color: tejBlue,
    borderWidth: 2,
    textTransform: "none",
    borderRadius: 50,
    fontFamily: "Roboto",
    fontWeight: "bold",
    }
    }
}); 
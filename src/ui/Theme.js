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
        h3:{
            fontWeight:200
        }
    }
}); 
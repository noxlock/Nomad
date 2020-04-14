import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';



const theme = createMuiTheme({
    palette: {
      primary: purple,
      secondary: {
          main: '#134E7E'
      },
    },
    status: {
      danger: 'orange',
    },
  });

export default theme
// --- Imports --- //
import React from "react";
import ReactDOM from "react-dom";

// --- Material Ui Imports --- //
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Box from "@material-ui/core/Box";
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';




// --- Fill Image Card Component Imports --- //
import {
  FiCard,
  FiCardActionArea,
  FiCardActions,
  FiCardContent,
  FiCardMedia
} from "./FullImageCard";

// --- Style --- //
const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    
  },

  
  /**
   * Max Card with for demo
   * same values used in Material-Ui Card Demos
   */
  card: {
    maxWidth: 800,
  },

  /**
   * Applied to Orginal Card demo
   * Same vale used in Material-ui Card Demos
   */
  media: {
    height: 350
  },

  /**
   * Demo stlying to inclrease text visibility
   * May verry on implementation
   */
  fiCardContent: {
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,.0)",
  },
  fiCardContentTextSecondary: {
    color: "rgba(255,255,190,1)",
    fontFamily: 'Montserrat'
  }
});


function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div fontFamily='Montserrat'>
    <Container className={classes.container}>
    <img src="https://img.icons8.com/bubbles/100/000000/home.png"/>
      <Typography variant="h2" paragraph fontFamily='Montserrat' fontColor="#0">
        Ekant Homestays
      </Typography>
      <Typography variant="h5" paragraph >
        Let us welcome you home
      </Typography>
     
      {/* Full Image Card Demo */}
      <Box my={4} >
        <FiCard className={classes.card}>
          <FiCardActionArea>
            <FiCardMedia
              media="picture"
              alt="Pic"
              image="/r1.jpeg"
              title="pic"
            />
            <FiCardContent className={classes.fiCardContent}>
              <Typography gutterBottom variant="h4" component="h4" fontFamily="Monstserrat" color="common.black">
               <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
               
                 Unbeatable facilities at affordable prices
                 <br /><br /><br /><br /><br />
              </Typography>
              <Typography
                variant="body2"
                className={classes.fiCardContentTextSecondary}
                component="p"
              >
               
              </Typography>
            </FiCardContent>
          </FiCardActionArea>
        </FiCard>
      </Box>
      <Box my={4} maxWidth="800">
        <Typography variant="h6" paragraph align="centre" >
        
        </Typography>
        <FiCard className={classes.card}>
          <FiCardActionArea>
            <FiCardMedia
              media="picture"
              alt="Contemplative Reptile"
              image="/out2.png"
              title="Contemplative Reptile"
            />
            <FiCardContent className={classes.fiCardContent}>
              <Typography gutterBottom variant="h3" component="h4">
                Winters at Ekant homestay
              </Typography>
              <Typography
                variant="body2"
                className={classes.fiCardContentTextSecondary}
                component="p"
              >
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />
                Ekant homestay in New Shimla boasts three comfortable and spacious rooms. Located just 4 kilometers or fifteen minutes away from the famous Mall Road, this jewel within The Jewel of the Hills is situated in a quiet neighborhood with a stunning view of the Himachal mountain ranges. Each evening the sunset pours a myriad of colors over this snug hill-station and each night the city comes alive mirroring the bright stars above.
       
                
              </Typography>
            </FiCardContent>
          </FiCardActionArea>
        </FiCard>
      </Box>
      <Box my={4}>
        <Typography variant="h6" paragraph align="center">
          
        </Typography>
        <FiCard className={classes.card}>
          <FiCardActionArea>
            <FiCardMedia
              media="picture"
              alt="Contemplative Reptile"
              image="/r2.jpeg"
              title="Contemplative Reptile"
            />
            <FiCardContent className={classes.fiCardContent}>
              <Typography gutterBottom variant="h5" component="h4">
                Your convenience is our priority
              </Typography>
              <Typography
                variant="body2"
                className={classes.fiCardContentTextSecondary}
                component="p"
              >
                <br /><br /><br /><br /><br /><br /><br />
                
                What you get:<br />
                Two bedrooms<br />
                Wifi<br />
                Breakfast and Lunch on Order<br />
                Kitchen<br />
                Long term stays allowed<br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br />
                <br /><br /><br />

                
              </Typography>
            </FiCardContent>
          </FiCardActionArea>
        </FiCard>
      </Box>
      <Box my={4}>
        <Typography variant="h6" paragraph align="center">
          
        </Typography>
        <FiCard className={classes.card}>
          <FiCardActionArea>
            <FiCardMedia
              media="picture"
              alt="Contemplative Reptile"
              image="/out.png"
              title="Contemplative Reptile"
            />
            <FiCardContent className={classes.fiCardContent}>
              <Typography gutterBottom variant="h3" component="h4">
                Experience the best of Shimla
              </Typography>
              <Typography
                variant="body2"
                className={classes.fiCardContentTextSecondary}
                component="p"
              >
                <br /><br /><br /><br />Take a trip to the Mall<br />
                Visit the Catchment wildlife sanctuary<br />
                Visit Naldehra or Kufri<br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br />
                

                
                
              </Typography>
            </FiCardContent>
          </FiCardActionArea>
        </FiCard>
      </Box>
      <Box my={4}>
        
        <FiCard className={classes.card}>
          <FiCardActionArea>
            <FiCardMedia
              media="picture"
              alt="Contemplative Reptile"
              image="/r3.jpeg"
              title="Contemplative Reptile"
            />
            <FiCardContent className={classes.fiCardContent}>
              <Typography gutterBottom variant="h2" component="h4">
                Book in advance
              </Typography>
              <Typography
                variant="body2"
                className={classes.fiCardContentTextSecondary}
                component="p"
              >
                <br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br />

                
                
              </Typography>
              
            </FiCardContent>
          </FiCardActionArea>
        </FiCard>
        <Typography variant="h5" paragraph align="center">
              Contact Us for enquiries and booking at-
        </Typography>
      </Box>
     


   
    </Container>
    <center>
    <a href="https://www.facebook.com/aditya.bhandari.967" class="fa fa-facebook"></a>
        <a href="https://wa.me/918826234200" class="fa fa-whatsapp"></a>
        <a href="https://www.instagram.com/bhandariadit/" class="fa fa-instagram"></a>
    </center>
    </div>
    </ThemeProvider>
    
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


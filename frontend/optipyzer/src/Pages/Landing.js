// Load Core React Modules + Cookies + CSS
import React from 'react';
//import Cookies from 'universal-cookie';
import './css/Landing.css';

// Load Core Material UI Elements
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


// Import Custom Components
import LandingCard from '../Components/LandingCard';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
	landingTitle: {
		textAlign: 'justify',
		textJustify: 'inter-character',
		[breakpoints.only('xs')]: {
  		textAlign: 'justify',
  	    textJustify: 'inter-character',
  	    alignContent: 'center',
  	    fontSize: '6em'
	}},
	landingText: {
		textAlign: 'justify',
		textJustify: 'inter-character',
		[breakpoints.only('xs')]: {
  		textAlign: 'justify',
  	    textJustify: 'inter-character',
  	    alignContent: 'center'
	}
}

}));

const BASE_URL = process.env.REACT_APP_BASE_URL

const Landing = () => {

	const styles = useStyles()

  			return (
  				  <div className="container justify-content-center">
  				     <br></br>
  				     <br></br>
	  				    <Grid   
	  				     container
						 direction="row"
						 justify="between"
						 alignItems="center"
						 alignContent="center"
						 style={{ minHeight: '100vh'}}
						 spacing={10}
						 >
	  				      <Grid item xs={12} md={6} lg={5}>
							<Typography 
							  align="left" 
							  variant="h1" 
							  gutterBottom
							  className={styles.landingTitle}
							>
							  Optipyzer
							</Typography>
							<Typography 
							  align="left" 
							  variant="body2" 
							  gutterBottom
							  className={styles.landingText}
							>
							  A multi-species codon optimization engine designed for the modern biologist. Bringing new advancements to today's molecular biology and gene expression capabilties. Optipyze your gene today to get the most out of your gBlocks and Recombinant DNA platforms.
							</Typography>
	  				      </Grid>
	  				      <Grid item xs={12} md={6} lg={7}>
		  				      <Grid   
			  				     container
								 direction="column"
								 justify="flex-start"
								 alignItems="center"
								 spacing={10}
								 >
								   <Grid item>
								   	<LandingCard buttonText="Optimize" 
								   	  image_link='https://image.flaticon.com/icons/png/512/17/17883.png' 
								   	  heading='Optimize' 
								   	  body='Use our multi-species codon optimization tool to perfect your DNA sequence.'
								   	  path="optimize"
								   	/>
								   </Grid>
								   <Grid item>
								   	<LandingCard 
								   	  buttonText="About" 
								   	  image_link='https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/about-512.png' 
								   	  heading='About the Engine' 
								   	  body='Learn about the math, biology, and algorithms behind our unique tool.'
								   	  path=""
								   	  />
								   </Grid>
								   <Grid item>
								   	<LandingCard 
								   	  buttonText="Dev Tools" 
								   	  image_link='https://anyline.com/wp-content/uploads/2019/07/web-api-icon.png' 
								   	  heading='API & Dev Tools' 
								   	  body='Try out our open and free API. Learn how you can use it in custom apps.'
								   	  path=""
								   	  />
								   </Grid>
							  </Grid>
	  				      </Grid>
	  				    </Grid>
	  				  </div>
  				);
  }

  export default Landing

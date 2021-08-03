// import './App.css';
import {Typography, Button,AppBar,Card,CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons'
import useStyles from './style';


const cards=[1,2,3,4,5,6,7,8,9,10,11,12];

function App() {

  const classes=useStyles();

  return (
    <>
      <CssBaseline/>
      <AppBar postion="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon}/>
          <Typography variant="h6">Photo album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant="h5" color="textSecondary" align="center" paragraph>
              Hii my name is sentence and this sentence is going to be very long you know why because i want to see how it affects my css.
            </Typography>

            <div className={classes.button}>
              <Grid container  spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my Photos
                  </Button>
                </Grid>
                <Grid item>  
                  <Button variant="outlined" color="primary">
                    See my Photos
                  </Button>
                </Grid>

              </Grid>
            </div>

          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          {cards.map(card=>(
            <Grid item  key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://source.unsplash.com/random"
                title="Image title"
              />
              <CardContent className={classes.carContent}>
                <Typography variant="h5" gutterBottom>
                    Heading
                </Typography>
                <Typography>
                  THis is a media card. Here you can write inforamtion about the image or card.
                </Typography>
                
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">View</Button>
                <Button size="small" color="primary">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
            ))}
            
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center"  gutterBottom>
            Footer
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" align="center">
            Writing something to give footer a purpose.
        </Typography>

      </footer>
    </>
  );
}

export default App;

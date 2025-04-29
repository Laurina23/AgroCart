import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Container,
  Box,
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const sampleProducts = [
  { id: 1, title: 'Tractor Plough', price: '₹18,500' },
  { id: 2, title: 'Hand Hoe', price: '₹1,100' },
  { id: 3, title: 'Watering Can', price: '₹750' },
  { id: 4, title: 'Sickle', price: '₹600' },
  { id: 5, title: 'Sprayer Pump', price: '₹3,500' },
  { id: 6, title: 'Basmati Rice', price: '₹280/kg' },
  { id: 7, title: 'Wheat Grains', price: '₹180/kg' },
  { id: 8, title: 'Maize (Corn)', price: '₹140/kg' },
  { id: 9, title: 'Green Gram (Moong)', price: '₹300/kg' },
  { id: 10, title: 'Black Sesame', price: '₹400/kg' },
];

const Homepage = () => {
  const handleLogout = () => {
    console.log('Logged out');
  };

  const handleAddToCart = (product) => {
    console.log(`Added to cart: ${product.title}`);
  };

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Agri App Dashboard
          </Typography>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center', mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the Agri Marketplace!
          </Typography>
          <Typography variant="body1">
            Discover fresh agricultural products, tools, and grains at affordable prices.
          </Typography>
        </Paper>

        <Grid container spacing={3}>
          {sampleProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6">{product.title}</Typography>
                  <Typography color="text.secondary">{product.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button 
                    variant="contained" 
                    color="success" 
                    fullWidth
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;

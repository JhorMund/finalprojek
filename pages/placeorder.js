import { 
  Button,
  Card,
  Grid, 
  Link, 
  List, 
  ListItem, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography,
  CircularProgress, 
} from '@material-ui/core';
import dynamic from 'next/dynamic';
import React, { useContext, useEffect, useState } from 'react';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import { Store } from '../utils/Store';
import Image from 'next/image';
import useStyles from '../utils/styles';
import CheckoutWizard from '../components/checkoutWizard';
import { useSnackbar } from 'notistack';
import { getError } from '../utils/error';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import profile from './profile';

function PlaceOrder() {
  const classes = useStyles();
  const router = useRouter();
  const { state, dispatch } = useContext (Store);
  const {
    userInfo, 
    cart: { cartItems, shippingAddress }, 
  } = state;
  const round2 = num => Math.round ( num * 100 + Number.EPSILON ) / 100; 
  const itemsPrice = round2 (
    cartItems.reduce(( a, c ) => a + c.price * c.quantity, 0)
  );
  const shippingPrice = itemsPrice > 200 ? 0 : 15;
  const totalPrice = round2 ( itemsPrice + shippingPrice );
  
  useEffect(() => {
    if ( cartItems.length === 0){
      router.push('/cart')
    }
  }, []);

  const { closeSnackbar, enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);
  const placeOrderHandler = async () => {
    closeSnackbar();
    try {
      setLoading(true);
      const { data } = await axios.post(
        '/api/orders',
        {
          orderItems: cartItems,
          shippingAddress,
          itemsPrice,
          shippingPrice,
          totalPrice,
        },
        {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch({ type: 'CART_CLEAR' });
      Cookies.remove('cartItems');
      setLoading(false);
      router.push(`/order/${data._id}`);
    } catch (err) {
      setLoading(false);
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };

  return (
    <Layout title="Place Order">
      <CheckoutWizard activeStep={3}></CheckoutWizard>
      <Typography component="h1" variant="h1">
        Pesanan
      </Typography>
     
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <Card className={classes.section}>
                <List>
                  <ListItem>
                    <Typography component="h2" variant="h2">
                      Alamat Pengiriman
                    </Typography>
                  </ListItem>
                  <ListItem>
                    {shippingAddress.fullName}, {''}
                    {shippingAddress.address}, {''}
                    {shippingAddress.message}, {''}
                    {shippingAddress.numberPhone}
                  </ListItem>
                </List>
            </Card>
            <Card className={classes.section}>
              <List>
                <ListItem>
                  <Typography component="h2" variant="h2">
                    Item Pesanan
                  </Typography>
                </ListItem>
                <ListItem>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            Image
                          </TableCell>
                          <TableCell>
                            Nama Pengiriman
                          </TableCell>
                          <TableCell align="right">
                            Nama Penerima
                          </TableCell>
                          <TableCell align="right">
                            Harga
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {cartItems.map((item) => (
                          <TableRow key={item._id}>
                            <TableCell>
                              <NextLink href={`/product/${item.slug}`} passHref>
                                <Link>
                                  <Image 
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                  ></Image>
                                </Link>
                              </NextLink>
                            </TableCell>
                            <TableCell align="right">
                                <Link>
                                  <Typography>{shippingAddress.name}</Typography>
                                </Link>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>{profile.name}</Typography>
                            </TableCell>
                            <TableCell align="right">
                              <Typography>Rp.{item.price}</Typography>
                            </TableCell>
                            
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </ListItem>
              </List>
              
            </Card>
          </Grid>
          <Grid md={3} xs={12}>
            <Card className={classes.section}>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Jumlah Pesanan
                  </Typography>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>
                        Items :
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography align="right">
                        Rp. {itemsPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>
                        Pengiriman :
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography align="right">
                       Rp.{shippingPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>
                        <strong>
                          Total :
                        </strong>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography align="right">
                        <strong>
                         Rp. {totalPrice}
                        </strong>
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={placeOrderHandler}
                    variant="contained" 
                    color="primary"
                    fullWidth
                  >
                    Pesan
                  </Button>
                </ListItem>
                {loading && (
                  <ListItem>
                    <CircularProgress/>
                  </ListItem>
                )}
              </List>
            </Card>
          </Grid>
        </Grid>
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(PlaceOrder), {ssr: false});
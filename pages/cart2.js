import { 
  Button,
  Card,
  Grid, 
  Link, 
  List, 
  ListItem, 
  MenuItem, 
  Select, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Typography, 
} from '@material-ui/core';
import dynamic from 'next/dynamic';
import React, { useContext } from 'react';
import Layout from '../components/Layout';
import NextLink from 'next/link';
import { Store } from '../utils/Store';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';

function CartScreen1() {
  const router = useRouter ();
  const { state, dispatch } = useContext (Store);
  const { 
    cart: { cartItems }, 
  } = state;
  const updateCartHandler1 = async (item, quantity) => {
    const { data } = await axios.get(`/api/products2/${item._id}`);
    if(data.countInStock < quantity) {
      window.alert ('Maaf. Produk Telah Habis');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity} })
  };
  const removeItemHandler1 = (item) => {
    dispatch({type:'CART_REMOVE_ITEM', payload: item});
  };
  const checkoutHandler1 = () => {
    router.push('/shipping');
  };
  return (
    <Layout title="keranjang Belanja">
      <Typography component="h1" variant="h1">
        Keranjang Belanja
      </Typography>
      {cartItems.length === 0 ? (
        <div>
          Belanja Kosong.
          <NextLink href="/" passHref>
            <Link>Pergi Belanja</Link>
          </NextLink>
        </div>
      ) : ( 
        <Grid container spacing={1}>
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Image
                    </TableCell>
                    <TableCell>
                      Nama
                    </TableCell>
                    <TableCell align="right">
                      Quantity
                    </TableCell>
                    <TableCell align="right">
                      Harga
                    </TableCell>
                    <TableCell align="right">
                      Aksi
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartItems.map((item) => (
                    <TableRow key={item._id}>
                      <TableCell>
                        <NextLink href={`/product2/${item.pid}`} passHref>
                          <Link>
                            <Image 
                              src={item.image}
                              alt={item.name}
                              width={50}
                              height={50}
                            >
                            </Image>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell>
                        <NextLink href={`/product2/${item.pid}`} passHref>
                          <Link>
                            <Typography>{item.name}</Typography>
                          </Link>
                        </NextLink>
                      </TableCell>
                      <TableCell align="right">
                        <Select 
                        value={item.quantity} 
                        onChange= {(e) => 
                        updateCartHandler1(item, e.target.value)
                      }
                        >
                          {[...Array(item.countInStock).keys()].map((x) => (
                            <MenuItem key={x+1} value={x+1}> 
                              {x+1} 
                              </MenuItem> 
                          ))}
                        </Select>
                      </TableCell>
                      <TableCell align="right">
                        Rp.{item.price}
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained" 
                          color='secondary'
                          onClick={()=> removeItemHandler1(item)}
                        >
                          x
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Typography variant="h2">
                    Subtotal ({cartItems.reduce((a,c ) => a + c.quantity, 0)} {''}
                    items) : <br />
                    Rp. {cartItems.reduce((a,c ) => a + c.quantity * c.price, 0)}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Button
                    onClick={checkoutHandler1}
                    variant="contained" 
                    color="primary"
                    fullWidth
                  >
                    Selanjutnya
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </Layout>
  );
}

export default dynamic(() => Promise.resolve(CartScreen1), {ssr: false});
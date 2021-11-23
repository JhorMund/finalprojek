// import data from "../utils/data";
import { 
  Button,
  Card,
  CardActionArea, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Grid, 
  Typography
} from "@material-ui/core";
import NextLink from 'next/link';
import Layout from "../components/Layout";
import db from "../utils/db";
import Product from "../models/Product";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../utils/Store";

export default function Home(props) {
  const router = useRouter ();
  const { state, dispatch } = useContext ( Store );
  const { products } = props;
  const addToCartHandler = async (product) => {
    const existItem = state.cart.cartItems.find( (x) =>x._id === product._id);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    const { data } = await axios.get(`/api/products/${product._id}`);
    if(data.countInStock < quantity) {
      window.alert ('Maaf. Produk Telah Habis');
      return;
    }
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity} });
    router.push('/cart');
  };
  return (
    <Layout>
      <div>
        <h1>Bunga Papan</h1>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid 
              item 
              md={4} 
              key={product.name}
            >
              <Card>
                <NextLink href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia 
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>
                        {product.name}
                      </Typography>
                      <Typography>
                        Rp.{product.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Button
                    size="small" 
                    color="primary"
                    variant="contained"
                    onClick={() => addToCartHandler(product)}
                  >
                    Add To Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
    
  )
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props:{
      products: products.map(db.convertDocToObj),
    },
  };
}
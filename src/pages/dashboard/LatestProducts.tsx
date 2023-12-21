import React, { useState } from 'react';

import { subHours, formatDistanceToNow } from 'date-fns';
import { v4 as uuid } from 'uuid';

import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardProps,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const data = [
  {
    id: uuid(),
    name: 'CocaCola',
    brand: 'Coca-Cola Cans 24 x 330ml',
    imageUrl: '/static/products/product_1.png',
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: 'Mevius',
    brand: 'Mevius Lights cigarettes',
    imageUrl: '/static/products/product_2.png',
    updatedAt: subHours(Date.now(), 2),
  },
  {
    id: uuid(),
    name: 'HEINEKEN',
    brand: 'HEINEKEN PREMIUM LARGER BEER',
    imageUrl: '/static/products/product_3.png',
    updatedAt: subHours(Date.now(), 3),
  },
  {
    id: uuid(),
    name: 'Red Ruby',
    brand: 'Red Ruby cigarettes',
    imageUrl: '/static/products/product_4.png',
    updatedAt: subHours(Date.now(), 5),
  },
  {
    id: uuid(),
    name: 'Lactasoy',
    brand: 'Lactasoy Unsweetened Soymilk 125 ml',
    imageUrl: '/static/products/product_5.png',
    updatedAt: subHours(Date.now(), 9),
  },
];

const useStyles = makeStyles()((theme: any) => ({
  root: {
    backgroundColor: '#ffffff !important',
    height: '100%',
  },
  image: {
    height: 48,
    width: 48,
  },
}));

type IParams = CardProps & {
  className?: string;
};

function LatestProducts({ className, ...rest }: IParams) {
  const { classes, cx } = useStyles();
  const [products] = useState(data);

  return (
    <Card className={cx(classes.root, className)} {...rest}>
      <CardHeader
        subtitle={`${products.length} in total`}
        title="Latest Products"
      />
      <Divider />
      <List>
        {products.map((product, i) => (
          <ListItem divider={i < products.length - 1} key={product.id}>
            <ListItemAvatar>
              <img
                alt="Product"
                className={classes.image}
                src={product.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText primary={product.name} secondary={product.brand} />
            <IconButton edge="end" size="small">
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}

export default LatestProducts;

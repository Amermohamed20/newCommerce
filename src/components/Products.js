import React, { useEffect } from "react";
import {useDispatch , useSelector} from "react-redux";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { fetchProducts } from "../RTK/slices/products-slice";
import { addToCart } from "../RTK/slices/cart-slice";

function Products() {

const products = useSelector((state) => state.products)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container className="py-5">
      <Row className="py-5">
        {products.map((product)=>(
            <Col key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img style={{height:'300px'}} variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                 {product.description}
                </Card.Text>
                <Card.Text>
                 {product.price} $
                </Card.Text>
                <Button variant="primary" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;

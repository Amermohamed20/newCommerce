import React from "react";
import Image from "react-bootstrap/Image";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, clearAllProducts } from "../RTK/slices/cart-slice";

function Cart() {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc
  }, 0);

  return (
    <Container>
      <h3 className="py-5">Welcome to  Your Cart</h3>
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => dispatch(clearAllProducts())}
      >
        Clear All Products
      </Button>
      <h4>Total price : {totalPrice.toFixed(2)} $</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Img</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{product.price} $</td>
              <td>{product.quantity} </td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(deleteFromCart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;

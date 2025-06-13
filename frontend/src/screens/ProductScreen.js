import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button, Form, ListGroupItem } from "react-bootstrap";
import Rating from '../components/Rating';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listProductDetails } from '../actions/productActions';
import { useNavigate } from 'react-router';

const ProductScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // State for selected size and color
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    // Redux state for product details
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    // Extract product ID from URL
    const params = useParams();

    // Fetch product details on mount or when ID changes
    useEffect(() => {
        dispatch(listProductDetails(params.id));
    }, [dispatch, params]);

    // Handle "Add to Cart" button click
    const addToCartHandler = () => {
        if (!selectedSize || !selectedColor) {
            alert("Please select both size and color.");
            return;
        }
        navigate(`/cart/${params.id}?size=${selectedSize}&color=${selectedColor}`);
    };

    return (
        <>
            {/* Back Button */}
            <Link className='btn btn-light my-3' to="/">
                Go Back
            </Link>

            {/* Conditional Rendering */}
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    {/* Left Column: Product Image */}
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>

                    {/* Middle Column: Product Details */}
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating value={product.rating} text={`${product.rating} reviews`} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Price: ${product.price}
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Description: {product.description}
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    {/* Right Column: Add to Cart Section */}
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                {/* Price */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col><strong>${product.price}</strong></Col>
                                    </Row>
                                </ListGroup.Item>

                                {/* Stock Status */}
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                                    </Row>
                                </ListGroup.Item>

                                {/* Size Selector */}
                                {product.sizes && product.sizes.length > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Size</Col>
                                            <Col>
                                                <Form.Control
                                                    as="select"
                                                    value={selectedSize}
                                                    onChange={(e) => setSelectedSize(e.target.value)}>
                                                    <option value="">Select Size</option>
                                                    {product.sizes.map((size) => (
                                                        <option key={size} value={size}>{size}</option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                {/* Color Selector */}
                                {product.colors && product.colors.length > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Color</Col>
                                            <Col>
                                                <Form.Control
                                                    as="select"
                                                    value={selectedColor}
                                                    onChange={(e) => setSelectedColor(e.target.value)}>
                                                    <option value="">Select Color</option>
                                                    {product.colors.map((color) => (
                                                        <option key={color} value={color}>{color}</option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                {/* Add to Cart Button */}
                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCartHandler}
                                        className="btn-block col-12"
                                        type="button"
                                        disabled={product.countInStock === 0 || !selectedSize || !selectedColor}>
                                        Add To Cart
                                    </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </>
    );
};

export default ProductScreen;
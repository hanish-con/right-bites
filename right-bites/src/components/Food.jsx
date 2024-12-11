import React from "react";
import { Container, Typography, Button, Grid, Card, CardMedia, CardContent, CardActions, Box } from "@mui/material";
import { motion } from "framer-motion";

// By: Sreelakshmi Thottupurath Jayachandran
export default function Food() {
    return (
        <Box sx={{ backgroundColor: "#f8f9fa", padding: "20px 0" }}>
            {/* Section Area */}
            <Box
                sx={{
                    textAlign: "center",
                    padding: "40px 20px",
                    backgroundColor: "#4caf50",
                    color: "white",
                    borderRadius: "8px",
                }}
                component={motion.div}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <Typography variant="h2" component="h1" sx={{ fontWeight: "bold", marginBottom: "10px" }}>
                    Eat Right Food
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "1.2rem", marginBottom: "20px" }}>
                    Choosing the right food ensures a healthier, happier life.
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    href="#food"
                    sx={{ backgroundColor: "#ff5722", ":hover": { backgroundColor: "#e64a19" } }}
                >
                    Explore Types
                </Button>
            </Box>

            {/* Food Types Section */}
            <Container id="food" sx={{ paddingTop: "40px" }}>
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}
                >
                    Types of Food
                </Typography>
                <Grid container spacing={4}>
                    {["Fruits", "Vegetables", "Grains"].map((type, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                sx={{ boxShadow: 3, borderRadius: "8px" }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`./images/foodtype${index + 1}.jpg`}
                                    alt={type}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="h3" sx={{ textAlign: "center" }}>
                                        {type}
                                    </Typography>
                                    <Typography variant="body2" sx={{ textAlign: "center" }}>
                                        Discover a wide variety of {type.toLowerCase()} that boost your health and taste amazing.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Food Menu Section */}
            <Container id="foodmenu" sx={{ padding: "40px 0" }}>
                <Typography
                    variant="h3"
                    component="h2"
                    sx={{ textAlign: "center", fontWeight: "bold", marginBottom: "20px" }}
                >
                    Food Menu
                </Typography>
                <Grid container spacing={4}>
                    {[
                        { price: 100, name: "Super Salad", desc: "A mix of fresh greens and healthy toppings." },
                        { price: 200, name: "Avocado Bowl", desc: "Delicious avocado served with vibrant veggies." },
                        { price: 300, name: "Classic Biryani", desc: "Aromatic rice cooked with rich spices." },
                        { price: 600, name: "Veggie Curry", desc: "A wholesome curry packed with fresh vegetables." }
                    ].map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                sx={{ boxShadow: 3, borderRadius: "8px" }}
                            >
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={`./images/fooditem${index + 1}.jpg`}
                                    alt={item.name}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h3" sx={{ fontWeight: "bold" }}>
                                        {item.name}
                                    </Typography>
                                    <Typography variant="body2">{item.desc}</Typography>
                                    <Typography variant="subtitle1" sx={{ fontWeight: "bold", marginTop: "10px" }}>
                                        Price: ${item.price}
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{ justifyContent: "center" }}>
                                    <Button variant="contained" size="small" sx={{ backgroundColor: "#ff5722" }}>
                                        Order Now
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

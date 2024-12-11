import React from "react";
import { Container, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

// By: Sruthi Bandi

export default function About() {
    return (
        <Box sx={{ backgroundColor: "#f8f9fa", padding: "40px 20px" }}>
            <Container maxWidth="md">
                <Box
                    sx={{
                        textAlign: "center",
                        marginBottom: "40px",
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h2" component="h1" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                        About Us
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                        Welcome to Eat Right Food, where we are passionate about promoting healthy eating habits and delivering delicious, nutritious meals. Our mission is to make healthy food accessible and enjoyable for everyone.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        backgroundColor: "#ffffff",
                        borderRadius: "8px",
                        padding: "20px",
                        boxShadow: 3,
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                        Our Story
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Founded with the vision to inspire healthier living, we believe that the right food can transform lives. Our team of dedicated nutritionists and chefs work tirelessly to craft meals that are not only nutritious but also bursting with flavor.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        From farm-fresh produce to wholesome grains, we source the best ingredients to ensure every bite is packed with goodness. We aim to bring convenience and health together, so you can focus on enjoying your meals without compromising your well-being.
                    </Typography>

                    <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                        Why Choose Us?
                    </Typography>
                    <Typography variant="body1">
                        Quality Ingredients: We prioritize fresh, organic, and sustainable ingredients.
                    </Typography>
                    <Typography variant="body1">
                        Balanced Nutrition: Our meals are thoughtfully prepared to meet your nutritional needs.
                    </Typography>
                    <Typography variant="body1">
                        Delicious Flavors: Healthy doesn’t mean boring; our dishes are a testament to that.
                    </Typography>
                    <Typography variant="body1">
                        Convenience: With easy ordering and delivery options, we make healthy eating effortless.
                    </Typography>

                    <Typography variant="body1" >
                        Join us on this journey to better health and taste the difference that mindful eating can make.
                    </Typography>
                </Box>

                {/* Meet the Team Section */}
                <Box
                    sx={{
                        textAlign: "center",
                        marginTop: "60px",
                    }}
                    component={motion.div}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Typography variant="h3" component="h2" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                        Meet the Team
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "1.2rem", marginBottom: "40px" }}>
                        Get to know the passionate individuals behind our mission to deliver the best services to you.
                    </Typography>
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                            gap: "20px",
                        }}
                    >
                        {["John Rashford", "Jane Marsh", "Sam Newman"].map((name, index) => (
                            <Box
                                key={index}
                                sx={{
                                    backgroundColor: "#ffffff",
                                    borderRadius: "8px",
                                    padding: "20px",
                                    textAlign: "center",
                                    boxShadow: 3,
                                }}
                                component={motion.div}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Box
                                    sx={{
                                        width: "100px",
                                        height: "100px",
                                        margin: "0 auto",
                                        borderRadius: "50%",
                                        overflow: "hidden",
                                    }}
                                >
                                    <img
                                        src={`./images/person${index + 1}.png`}
                                        alt={name}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                </Box>
                                <Typography variant="h6" sx={{ marginTop: "10px", fontWeight: "bold" }}>
                                    {name}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "#777" }}>
                                    {index % 2 === 0 ? "Nutritionist" : "Chef"}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

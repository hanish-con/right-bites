import React from "react";
import { Container, Typography, Box, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";

// By: Harshiv Dharmeshkumar Kharvar
export default function Contact() {
    return (
        <Box sx={{ backgroundColor: "#f8f9fa", padding: "40px 20px" }}>
            <Container maxWidth="sm">
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
                        Contact Us
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: "1.2rem" }}>
                        Have any questions or feedback? We'd love to hear from you. Please fill out the form below, and we'll get back to you as soon as possible.
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
                    <form>
                        <TextField
                            fullWidth
                            label="Your Name"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Your Email"
                            variant="outlined"
                            margin="normal"
                            required
                        />
                        <TextField
                            fullWidth
                            label="Your Message"
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={4}
                            required
                        />
                        <Button
                            variant="contained"
                            size="large"
                            type="submit"
                            sx={{ backgroundColor: "#4caf50", ":hover": { backgroundColor: "#388e3c" }, marginTop: "20px" }}
                            fullWidth
                        >
                            Send Message
                        </Button>
                    </form>
                </Box>
            </Container>
        </Box>
    );
}

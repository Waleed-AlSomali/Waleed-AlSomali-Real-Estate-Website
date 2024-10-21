import { nanoid } from "nanoid";

export const allProperties = [
    {
        id: nanoid(), 
        title: "Modern Apartment", 
        location: "New York, NY", 
        price: 1200, 
        imageUrl: "https://via.placeholder.com/200x150", 
    },

    {
        id: nanoid(),
        title: "Cozy Cottage", 
        location: "San Francisco, CA", 
        price: 1800, 
        imageUrl: "https://via.placeholder.com/200x150", 
    }, 

    {
        id: nanoid(), 
        title: "Beachside Villa", 
        location: "Miami, FL", 
        price: 2500, 
        imageUrl: "https://via.placeholder.com/200x150",
    }, 

    {
        id: nanoid(),
        title: "Luxury Penthouse", 
        location: "Chicago, IL", 
        price: 5000, 
        imageUrl: "https://via.placeholder.com/200x150", 
    }, 
];

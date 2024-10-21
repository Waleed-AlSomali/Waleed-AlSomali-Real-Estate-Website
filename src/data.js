import { nanoid } from "nanoid";

export const allProperties = [
    {
        id: nanoid(), 
        title: "Modern Apartment", 
        location: "New York, NY", 
        price: 1200, 
        image: "https://via.placeholder.com/200x150", 
    },

    {
        id: nanoid(),
        title: "Cozy Cottage", 
        location: "San Francisco, CA", 
        price: 1800, 
        image: "https://via.placeholder.com/200x150", 
    }, 

    {
        id: nanoid(), 
        title: "Beachside Villa", 
        location: "Miami, FL", 
        price: 2500, 
        image: "https://via.placeholder.com/200x150",
    }, 

    {
        id: nanoid(),
        title: "Luxury Penthouse", 
        location: "Chicago, IL", 
        price: 5000, 
        image: "https://via.placeholder.com/200x150", 
    }, 
];

import { nanoid } from "nanoid";

export const allProperties = [
    {
        id: nanoid(), 
        title: "Modern Apartment", 
        location: "New York, NY", 
        price: 1200, 
        image: "https://res-console.cloudinary.com/waleed-cloud/media_explorer_thumbnails/24495d9eecabeb6eee811d49a362d9b0/detailed", 
    },

    {
        id: nanoid(),
        title: "Cozy Cottage", 
        location: "San Francisco, CA", 
        price: 1800, 
        image: "https://res-console.cloudinary.com/waleed-cloud/media_explorer_thumbnails/4934d2860180c44d81752d0922844a34/detailed", 
    }, 

    {
        id: nanoid(), 
        title: "Beachside Villa", 
        location: "Miami, FL", 
        price: 2500, 
        image: "https://res-console.cloudinary.com/waleed-cloud/media_explorer_thumbnails/94ddc6bf5bafd308f7f60c30f46aad25/detailed",
    }, 

    {
        id: nanoid(),
        title: "Luxury Penthouse", 
        location: "Chicago, IL", 
        price: 5000, 
        image: "https://res-console.cloudinary.com/waleed-cloud/media_explorer_thumbnails/cb2b8a571a81ec7f1cbc633843dbad9c/detailed", 
    }, 
];

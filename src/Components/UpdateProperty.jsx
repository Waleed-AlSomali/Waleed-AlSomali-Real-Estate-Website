// import { nanoid } from 'nanoid';
// import React, { useState } from 'react'

// const UpdateProperty = (props) => {
//   const { id: propertyId, 
//           title: propertyTitle, 
//           image: propertyImage, 
//           location: propertyLocation, 
//           price: propertyPrice } = props.updatedPropertyList;

//   const [updateProperty, setUpdateProperty] = useState(updatedPropertyList);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     console.log("name ", name)
//     console.log("value  ", value)
//     setProperty({
//       ...updateProperty,
//       [name]: value
//     });
//   };

//   const handleImageChange = (event) => {
//     const imagefile = event.target.files[0];
//     setProperty({
//       ...updateProperty,
//       image: imagefile,
//     });

//   };

  

//   const handleSubmit = (event) => {
//     event.preventDefault();
//       const newUpdatedProperty = {
//         id: propertyId,
//         title: propertyTitle,
//         image: propertyImage,
//         location: propertyLocation,
//         price: propertyPrice

//       };

//       console.log(newUpdatedProperty)

  
//   };
  
//   return (
//         <div>
//           <h2>Update Property</h2>
//           <form onSubmit={handleSubmit}>

//             <div>
//               <label htmlFor="title">Title: </label>
//               <input type="text" id="title" name='title' value={property.title} onChange={handleChange} required />
            
//             </div>

//             <div>
//               <label htmlFor="image">Image: </label>
//               <input type="file" id="image" name='image' onChange={handleImageChange} accept='image/*' required />
//               {property.image && (
//               <div>
//                 <img
//                   src={URL.createObjectURL(property.image)}
//                   alt="Selected Preview"
//                   style={{ maxWidth: '40%', maxheight: 'auto', marginTop: '10px' }}
//                 />
//               </div>
//             )}
//             </div>

//             <div>
//               <label htmlFor="location">Location: </label>
//               <input type="text" id="location" name='location' value={property.location} onChange={handleChange} required />
//             </div>

//             <div>
//               <label htmlFor="price">Price: </label>
//               <input type="text" id="price" name='price' value={property.price} onChange={handleChange} required />
//             </div>
//             <button type="submit">Update Property</button>

//           </form>
//         </div>
//   );
// }

// export default UpdateProperty

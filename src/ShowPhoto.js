import React from "react";

const ShowPhoto = ({ photo, className }) => {
   return (
      <div className={className} >
         <img src={photo} alt={className} />
      </div>
   )
}

export default ShowPhoto;
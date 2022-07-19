import React from "react";

const Components = ({ text, value }) => {
   return (
      <>
         <p>
            {text}
            <b>{value}</b>
         </p>
      </>
   )
}

export default Components;




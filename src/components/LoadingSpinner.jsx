

// const LoadingSpinner = () => {
//   return (
//     <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-200 opacity-75 z-50">
//       <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-400 h-24 w-24"></div>
//     </div>
//   );
// };

// export default LoadingSpinner;


import React, { useState, useEffect } from 'react';
import Spinner from './Spinner'; // Assuming you have a Spinner component

const LoadingSpinner = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Spinner /> : null;
};

export default LoadingSpinner;


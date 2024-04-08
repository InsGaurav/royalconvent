import React from 'react';
import FacilitiesCard from './FacilitiesCard';

const FacilitiesSection = () => {
  return ( 
    <>
    <h1 className="text-3xl font-semibold text-center my-8">Our Facilities</h1>
    <br />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <FacilitiesCard
        imageUrl="url_to_your_image"
        title="Facility 1"
        description="Description of Facility 1."
      />
      <FacilitiesCard
        imageUrl="url_to_your_image"
        title="Facility 2"
        description="Description of Facility 2."
      />
      <FacilitiesCard
        imageUrl="url_to_your_image"
        title="Facility 3"
        description="Description of Facility 3."
      />
      {/* Add more FacilitiesCard components as needed */}
    </div>
    </>
  );
};

export default FacilitiesSection;

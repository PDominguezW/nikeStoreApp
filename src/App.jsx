import { Nav } from "./components";
import {
  Footer,
  PopularProducts,
  PopularProductsBrand,
  Subscribe,
} from "./sections";
// Import useEffect hook
import { useEffect, useState } from 'react'; // Import useEffect and useState
import React from 'react';
// Import Link

const App = () => {
  const [bestOffers, setBestOffers] = useState(null); // Create a state variable to store the JSON data
  const [brands, setBrands] = useState(null); // Create a state variable to store the JSON data

  const sliderSettings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    arrows: true, // Add arrows for navigation
  };

  useEffect(() => {
    // Function to load the JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('https://firebasestorage.googleapis.com/v0/b/melollevo-53056.appspot.com/o/descuentosRunning%2Fresponse.json?alt=media&token=710f564f-dc3a-456e-a4a8-3aa91f76242d&_gl=1*1eflfs4*_ga*NjE4MTA3MjY3LjE2ODg3Mjc5ODQ.*_ga_CW55HF8NVT*MTY5NjI3NzY5NS4zNy4xLjE2OTYyNzc4NjMuNTEuMC4w'); 
        const data = await response.json();
        setBestOffers(data.bestOffers); // Set the state variable to the JSON data
        setBrands(data.brands); // Set the state variable to the JSON data

      } catch (error) {
        console.error('Error loading JSON:', error);
      }
    };

    fetchData(); // Call the function when the component mounts
  }, []);

  // If bestOffers is null, return a loading message
  if (!bestOffers) return <span>Loading...</span>;

  return (
    <main className="relative">
      <Nav />
      <section className="padding">
        {bestOffers && <PopularProducts offers={bestOffers} />}
      </section>
      {/* iter through the brands dict, throught each key and value */}
      {brands && Object.entries(brands).map(([key, value]) => (
        <section className="padding">
          <PopularProductsBrand key={key} name={key} offers={value.offers} bestOffers={value.bestOffers}/>
        </section>
      ))}
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;

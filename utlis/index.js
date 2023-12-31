"use client"

// export async function fetchCars() {


//   // Set the required headers for the API request
//   const headers={
//     'X-RapidAPI-Key': '67fda5b8b3mshbda676f443eec51p18a030jsn417f2433044a',
//     'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
//   };

//   // Set the required headers for the API request
//   const response = await fetch(
//     'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',{
//       headers:headers,
//     });
    



//   // Parse the response as JSON
//   const result = await response.json();

//   return result;

// }




export const calculateCarRent = (city_mpg, year) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
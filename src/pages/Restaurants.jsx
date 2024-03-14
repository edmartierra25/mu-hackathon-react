import { useState, useEffect } from 'react';
import { H1, P, Stack } from '@manulife/mux';
import axios from  "axios";
import { useSearchParams } from 'react-router-dom';

import RestaurantItem from 'src/components/restaurant/RestaurantItem';

const Restaurant = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    axios.get('http://localhost:3001/restaurants').then(response => {
      setRestaurants([...response.data]);
    });
    console.log(searchParams.get('restaurants'), "searchParams");
  }, []);

  return (
    <Stack align="flex-start">
      <H1>Hi User! Ready for Lunch?</H1>
      <Stack direction="row">
        {restaurants.map((restaurant) => {
          return <RestaurantItem key={restaurant.id} restaurant={restaurant}/>;
        })}
      </Stack>
    </Stack>
  );
};

export default Restaurant;

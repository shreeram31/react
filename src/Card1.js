import React from 'react';
import ProductCard from './productcard';

const Card1 = () => {
  return (
    <div style={{ padding: 40 }}>
      <ProductCard
        image="https://th.bing.com/th/id/OIP.3yLD4qPzRMXTtql9gH79XAHaEK?w=298&h=167&c=10&rs=1&bgcl=fffffe&r=0&o=6&pid=23.1"
        title="Cool"
        price="$280.99"
      />
    </div>
  );
};

export default Card1;
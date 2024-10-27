import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const gymMembershipOptions = [
    {
      id: 1,
      name: "Basic",
      price: 30,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "1 group class per week",
        "Locker room access",
        "Open gym access",
        "Free Wi-Fi",
        "Standard customer support",
        "Access during staffed hours only"
      ]
    },
    {
      id: 2,
      name: "Standard",
      price: 50,
      currency: "USD",
      features: [
        "Access to gym equipment",
        "3 group classes per week",
        "Locker room access",
        "Sauna access",
        "Personal trainer consultation (once a month)",
        "Extended access hours",
        "Discount on in-house supplements and merchandise",
        "Priority customer support",
        "Access to community events and workshops"
      ]
    },
    {
      id: 3,
      name: "Premium",
      price: 75,
      currency: "USD",
      features: [
        "Access to all gym equipment",
        "Unlimited group classes",
        "Locker room and sauna access",
        "Weekly personal training sessions",
        "Access to swimming pool and spa",
        "Nutrition consultation (once a month)",
        "Free towel and laundry service",
        "Access to advanced fitness workshops",
        "Discounted entry to partner fitness events",
        "Custom workout plan updated monthly",
        "Access to meditation and yoga classes"
      ]
    },
    {
      id: 4,
      name: "VIP",
      price: 100,
      currency: "USD",
      features: [
        "24/7 gym access",
        "Access to all gym equipment",
        "Unlimited group classes and personal training sessions",
        "Private locker and lounge area",
        "Full access to sauna, pool, and spa",
        "Monthly nutrition and wellness consultation",
        "Free guest pass (2 per month)",
        "Dedicated VIP customer support",
        "Exclusive access to VIP-only events",
        "Priority booking for equipment and classes",
        "Complimentary post-workout smoothies",
        "Monthly massage therapy session",
        "Private parking space",
        "Personalized fitness and wellness plan"
      ]
    }
  ];
  

const PriceOptions = () => {
    return (
        <div className=''>

            <h2 className='text-3xl text-center mt-10'>The Price Option Are Included Here</h2>

           <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
           {
                gymMembershipOptions.map(item=><PriceOption key={item.id} option={item}></PriceOption>)
            }
           </div>
        </div>
    );
};

export default PriceOptions;
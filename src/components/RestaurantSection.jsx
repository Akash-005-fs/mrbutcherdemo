import React from "react";
import "../styles/restaurantsection.css";

function RestaurantSection() {
  const restaurants = [
    {
      name: "The Punjabi Restaurant",
      rating: "4.3",
      time: "15–20 mins",
      cuisines: "Chinese, North Indian, Biryani",
      location: "Kottayam",
      offer: "",
      img: "https://images.unsplash.com/photo-1627308595187-4c29be3482c6?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Adaminde Chayakada Xpress",
      rating: "4.2",
      time: "20–25 mins",
      cuisines: "Chinese",
      location: "Chalukunnu",
      offer: "ITEMS AT ₹9",
      img: "https://images.unsplash.com/photo-1600628422011-384bf55e6ab5?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Malabar Majlis Restaurant",
      rating: "4.4",
      time: "15–20 mins",
      cuisines: "Lebanese",
      location: "Kottayam",
      offer: "20% OFF UPTO ₹50",
      img: "https://images.unsplash.com/photo-1625945759836-0e9c7e9f7a4d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Aiswarya Restaurant Nattakom",
      rating: "4.4",
      time: "20–25 mins",
      cuisines: "South Indian, Kerala, Chinese",
      location: "Nattakom",
      offer: "ITEMS AT ₹135",
      img: "https://images.unsplash.com/photo-1627308595229-cd91a3d7a33b?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Hotel Manipuzha Vysali",
      rating: "4.4",
      time: "15–20 mins",
      cuisines: "South Indian, Seafood, Biryani, Kerala",
      location: "Chalukunnu",
      offer: "30% OFF UPTO ₹75",
      img: "https://images.unsplash.com/photo-1627308594641-94b8b28caa93?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Al Razi Restaurant",
      rating: "4.3",
      time: "25–30 mins",
      cuisines: "Arabian, Indian",
      location: "Kanjikuzhi",
      offer: "",
      img: "https://images.unsplash.com/photo-1625945759836-0e9c7e9f7a4d?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Adaminte Chayakada",
      rating: "4.3",
      time: "30–35 mins",
      cuisines: "Kerala, South Indian, Chinese",
      location: "Thellakom",
      offer: "40% OFF UPTO ₹80",
      img: "https://images.unsplash.com/photo-1608759266164-52e58d52b4e8?auto=format&fit=crop&w=600&q=80",
    },
    {
      name: "Kollamparambil Veetil Oonu",
      rating: "4.2",
      time: "30–35 mins",
      cuisines: "Kerala",
      location: "Perumbaikad",
      offer: "15% OFF UPTO ₹100",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <div className="newsection">
      <h1 className="section-title">Top Restaurants</h1>
      <div className="restaurant-grid">
        {restaurants.map((item, index) => (
          <div className="restaurant-card" key={index}>
            <div className="image-wrapper">
              <img src={item.img} alt={item.name} />
              {item.offer && <div className="offer-text">{item.offer}</div>}
            </div>
            <div className="restaurant-info">
              <h3>{item.name}</h3>
              <p className="rating">
                <span>⭐ {item.rating}</span> • {item.time}
              </p>
              <p className="cuisines">{item.cuisines}</p>
              <p className="location">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantSection;

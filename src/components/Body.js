import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";

// not using key <<<< using index as a key <<<<<<<<<<<< unique id(best practice)

export const Body = () => {
  //local state variable - super powerful variable
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  // let listOfRestaurantsJs = [
  //   {
  //     data: {
  //       type: "F",
  //       id: "334475",
  //       name: "KFC",
  //       uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
  //       city: "1",
  //       area: "BTM Layout",
  //       totalRatingsString: "500+ ratings",
  //       cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
  //       cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
  //       tags: [],
  //       costForTwo: 40000,
  //       costForTwoString: "₹400 FOR TWO",
  //       deliveryTime: 36,
  //       minDeliveryTime: 36,
  //       maxDeliveryTime: 36,

  //       lastMileTravel: 3.5,
  //       cityState: "1",
  //       address:
  //         "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
  //       locality: "2nd Stage",
  //       parentId: 547,
  //       promoted: true,
  //       avgRating: "3.8",
  //       totalRatings: 500,
  //       new: false,
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "229",
  //       name: "Meghana Foods",
  //       uuid: "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
  //       city: "1",
  //       area: "Koramangala",
  //       totalRatingsString: "1000+ ratings",
  //       cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
  //       cuisines: [
  //         "Biryani",
  //         "Andhra",
  //         "South Indian",
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //       ],
  //       tags: [],
  //       costForTwo: 50000,
  //       costForTwoString: "₹500 FOR TWO",
  //       avgRating: "4.9",
  //       deliveryTime: 29,
  //       minDeliveryTime: 29,
  //       maxDeliveryTime: 29,
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "225",
  //       name: "MCD",
  //       uuid: "4fdd19e2-5d0f-4bde-9c7f-dc3e8d36021f",
  //       city: "1",
  //       area: "Koramangala",

  //       cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
  //       cuisines: [
  //         "Biryani",
  //         "Andhra",
  //         "South Indian",
  //         "North Indian",
  //         "Chinese",
  //         "Seafood",
  //       ],

  //       costForTwoString: "₹500 FOR TWO",
  //       avgRating: "4.3",
  //     },
  //   },
  // ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
           const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setlistOfRestaurants(filteredList)
            
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;

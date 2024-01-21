import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log("resdata", resData);
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.data;
  return (
    <div className="res-card" style={{ background: "#f0f0f0" }}>
      <img
        className="res-img"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default RestaurantCard;

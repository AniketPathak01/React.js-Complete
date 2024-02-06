import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { FaShoppingBag } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";

function HomeItem({ item }) {
  const bagItem = useSelector((store) => store.bag);
  const elementFound = bagItem.indexOf(item.id) >= 0;
  
  const dispatch = useDispatch();

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {elementFound ? (
        <button
          type="button"
          className="btn-add-bag btn btn-danger"
          onClick={handleRemove}
        >
          <RiDeleteBin5Fill className="baggg" /> Remove
        </button>
      ) : (
        <button
          className="btn-add-bag btn btn-success"
          onClick={handleAddToBag}
        >
          <FaShoppingBag className="baggg" /> Add to Bag
        </button>
      )}
    </div>
  );
}

export default HomeItem;

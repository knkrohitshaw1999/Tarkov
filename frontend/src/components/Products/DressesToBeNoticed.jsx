import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendations } from "../../redux/slices/productsSlice";
import ProductGrid from "./ProductGrid";

const DressesToBeNoticed = () => {
  const dispatch = useDispatch();
  
  const { user } = useSelector((state) => state.auth);
  const { recommendations, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (user) {
      dispatch(fetchRecommendations());
    }
  }, [dispatch, user]);

  // Do not render anything if the user is a guest, or if there are no recommendations
  if (!user || (!loading && recommendations && recommendations.length === 0)) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-16 mb-16">
      <h2 className="text-3xl text-center font-bold mb-8">
        Dresses To Be Noticed
      </h2>
      <ProductGrid products={recommendations} loading={loading} error={error} />
    </div>
  );
};

export default DressesToBeNoticed;

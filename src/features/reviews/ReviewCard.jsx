import { useEffect } from "react";
import { useGetReviewsQuery } from "./reviewSlice";
import tick from "../../assets/icons/Vector.png";
import star_1 from "../../assets/icons/Star 1.png";
import Spinners from "../../components/Spinners";

const ReviewCard = ({ noScroll, displayedReviews, onTotalReviews }) => {
  // ✅ Fetch reviews with RTK Query
  const {
    data: reviews,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetReviewsQuery();
  
  useEffect(() => {
    if (isSuccess && Array.isArray(reviews) && onTotalReviews) {
      onTotalReviews(reviews.length);
    }
    
  }, [isSuccess, reviews, onTotalReviews]);

  // ✅ Handle loading & error states
  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <Spinners />
      </div>
    );
  }

  if (isError) {
    return <p>Error: {error?.message || "Something went wrong"}</p>;
  }

  if (!isSuccess || !Array.isArray(reviews)) {
    return <p>No reviews found.</p>;
  }

  // ✅ Map reviews to cards
  const reviewCards = reviews.map((review, idx) => {
    const stars = Array.from({ length: review.rating }, (_, i) => (
      <img key={i} src={star_1} alt="star" className="w-5 h-5 inline-block" />
    ));

    return (
      <div
        key={idx}
        className={`bg-white rounded-2xl shadow-md p-5 ml-4 border flex-shrink-0 border-gray-200 
          ${
            noScroll ? "w-full sm:max-w-[540px]" : "w-[380px]"
          } h-auto max-w-md`}
      >
        <div className="flex items-center mb-2">{stars}</div>
        <div className="flex items-center gap-2 mb-2">
          <p className="font-bold font-satoshi text-xl">
            {review.customer_name}.
          </p>
          <span className="text-green-500 text-xl">
            <img src={tick} alt="Verified" />
          </span>
        </div>
        <p className="text-gray-600 font-satoshi text-lg">
          "{review.review_text}"
        </p>
      </div>
    );
  });

  // ✅ Conditional rendering for scroll vs no-scroll
  return noScroll ? (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full justify-center">
      {reviewCards.slice(0, displayedReviews).map((card, index) => (
        <div
          key={index}
          className="flex sm:pr-0 pr-5 items-center justify-center w-auto"
        >
          {card}
        </div>
      ))}
    </div>
  ) : (
    <div className="scroll-marquee-wrapper overflow-hidden">
      <div className="scroll-marquee">
        {[...reviewCards, ...reviewCards].map((card, index) => (
          <div
            key={index}
            className="min-w-[400px] break-words whitespace-normal"
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;

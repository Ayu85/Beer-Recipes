function ShimmerCard() {
  return (
    <div className="shimmer-card">
      <div className="shimmer-box1"></div>
      <div className="shimmer-box2"></div>
      <div className="shimmer-box3"></div>
    </div>
  );
}
function Shimmer() {
  return (
    <div className="shimmer-body">
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
      <ShimmerCard />
    </div>
  );
}
export default Shimmer;

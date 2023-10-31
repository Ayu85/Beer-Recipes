function Card({ id, name, image_url, tagline, description }) {
  return (
    <div className="card">
      <img src={image_url} />
      <h2 className="name">{name}</h2>
      <h2 className="tag">{tagline}</h2>
      <h3>{description}</h3>
    </div>
  );
}
export default Card;

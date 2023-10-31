function Card({id,name,image_url,tagline,description}) {
    return (
        <div className="card">
            <img src={image_url} />
            <h2 className="name">{name.substring(0,5)}</h2>
            <h2 className="tag">{tagline}</h2>
            <h3>{description.substring(0,150)}</h3>
        </div>
    )
}
export default Card;
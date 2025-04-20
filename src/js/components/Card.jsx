
const Card = ({card}) =>{

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={card.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    )

}
export default Card;

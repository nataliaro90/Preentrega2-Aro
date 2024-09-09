import { Link } from "react-router-dom";

const Item = ({ title, img, price, category, dues, id, tag}) => {
    return(
    <article className="item">
        <Link to={`/detalle/${id}`}>
        <picture className="item__picture">
            <span className="item__picture--pill">{tag}</span>
            <img className="item-detail__picture--img item-detail__picture--img--1" src={`/${img}`} alt={`${name} - Foto`} />
        </picture>
        <div className="item__info">
            <h3 className="item__info--title">{category}</h3>
            <h4 className="item__info--item">{title}</h4>
            <p className="item__info--price">$ {price} .-</p>
            <p className="item__info--dues"> {dues} CUOTAS SIN INTERÉS</p>
        </div>
        </Link>
    </article>
    );
};

export default Item;
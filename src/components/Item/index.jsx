import { Link } from "react-router-dom";

const Item = ({ title, img, price, category, dues, id, tag}) => {
    return(
    <article className="item">
        <Link to={`/detalle/${id}`}>
        <picture className="item-picture">
            <span className="item-picture--pill">{tag}</span>
            <img className="item-detail-picture--img item-detail__picture--img--1" src={`/${img}`} alt={`${name} - Foto`} />
        </picture>
        <div className="item-info">
            <h3 className="item-info--title">{category}</h3>
            <h4 className="item-info--item">{title}</h4>
            <p className="item-info--price">$ {price} .-</p>
            <p className="item-info--dues"> {dues} CUOTAS SIN INTERÉS</p>
        </div>
        </Link>
    </article>
    );
};

export default Item;
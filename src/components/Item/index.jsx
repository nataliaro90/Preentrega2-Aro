import { Link } from "react-router-dom";

const Item = ({ id, title, category, img, price, dues }) => {
    return(
        <article className="item">
            <Link to={`/detalle/${id}`}>
            <picture className="item-picture">
                <img className="item-detail-picture-img" src={`/${img}`} alt={`${title} - Foto`} />
            </picture>
            <div className="item-info">
                <h3 className="item-info--title">{category}</h3>
                <h4 className="item-info--item">{title}</h4>
                <p className="item-info--price">$ {price} .-</p>
                <p className="item-info--dues"> {dues} 6, 12 y 18 Cuotas Sin Interes</p>
            </div>
            </Link>
    </article>
    );
};

export default Item;
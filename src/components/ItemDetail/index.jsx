const ItemDetail = ({title, img, price, description, category, color}) => {
    return (
    <section className="item-detail">
        <picture className="item-detail-picture">
        <img className ="item-detail-picture img" src={`/${img}`} alt={`${name} - Foto`} />
        </picture>

        <article className="item-detail-info">
            <p className="item-detail-info-category">{category}</p>
            <h2 className="item-detail-info-name">{title}</h2>
            <p className="item-detail-info-description">{description}</p>
            <p className="item-detail-info-price">$ {price}</p>
            <p className="item-detail-info-coulor"> {color}</p>
            <form className="item-detail-form" action="" method="POST" encType="application/x-www-form-urlencoded">
                <div className="item-detail-form-container">
                    <button className="item-detail-form-btn" type="button">-</button>
                    <input className="item-detail-form-input" type="text" placeholder="1" />
                    <button className="item-detail-form-btn" type="button">+</button>
                </div>
                <input className="item-detail-form-submit" type="submit" value="Agregar al Carrito" />
            </form>
        </article>
    </section>
    );
};

export default ItemDetail;
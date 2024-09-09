import { Icon } from "@iconify/react";
import Pill from "../Pill";

const CartWidget = ( {quantity }) => {

    return (
        <div className="cart-widget">
            <Pill quantity={quantity} />
            < Icon className="cart-widget-cart" icon="lucide:cooking-pot" />
        </div>
    );
};


export default CartWidget;
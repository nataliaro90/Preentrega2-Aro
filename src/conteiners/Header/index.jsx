import logo from '../../assets/images/logo.webp';
import Menu from '../../components/Menu';
import CartWidget from '../../components/CartWitdget/index';

const Header = () => {
    const links= [
        {
            label: 'Home', 
            href: '/'
        },
        {
            label: 'Productos', 
            href: '/store'
        },
        {
            label: 'Contacto', 
            href: '/contacto'
        }
    ]

    return (
        <header className="header">
        <nav className="navbar">
            <a href="/">
                <figure className="navbar-logo">
                    <img src= {logo} alt=" "/>
                </figure>
            </a>
            <Menu className="navbar" links={links}>
                <li>
                    <a href="" className='navbar-link'>
                    <CartWidget quantity={0} />
                    </a>
                </li>
            </Menu>  
        </nav>
    </header>
    )
};

export default Header;
    
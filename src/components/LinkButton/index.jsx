const LinkButton = ({ className, label, href = '#' }) => {

    return (
            <a className={`link-button ${className}link-button`} href={href}>{label}</a>
    );
};

export default LinkButton;

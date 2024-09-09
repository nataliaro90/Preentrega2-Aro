import Header from "../conteiners/Header"
import Footer from "../components/Footer"

const BaseLayout = ( { children }) => {

    return (
        <>
        <Header />
        
        { children }

        <Footer />
        </>
    );
};

export default BaseLayout;
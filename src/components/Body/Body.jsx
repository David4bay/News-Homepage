import Article from "../Article/Article";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";


function Body({dark, menu}) {
    return (
        <>
        <Header 
        dark={dark}
        menu={menu}
        />
        <Aside />
        <Article />
        <Footer />
        </>
    )
}

export default Body;
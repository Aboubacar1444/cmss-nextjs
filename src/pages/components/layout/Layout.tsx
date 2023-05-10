import {Header} from "@/pages/components/layout/Header";
import {Footer} from "@/pages/components/layout/Footer";

export const Layout = (props) => {
    return(
        <>
            <Header/>
            <div className="main">{props.children}</div>
            <Footer/>
        </>
    );
}
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import Home from "../components/Pages/Home";
import Produtos from "../components/Pages/Produtos/Produtos";
import OfertaProduto from "../components/Pages/OfertaProduto/OfertaProduto";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PageLayout/>} >
                    <Route index element={<Home/>} />
                    <Route path="/produtos" element={<Produtos/>} />
                    <Route path="/ofertaProduto" element={<OfertaProduto/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
 
export default Paths;
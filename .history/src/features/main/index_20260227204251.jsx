import Container from "../../components/layout/Container";
import MainHero from "./MainHero";
import ProductBrandSlider from "./ProductBrandSlider";
import CsReport from "./CsReport";

export default function Main() {
    return (
        <>
            <Container>
                <MainHero />
                <ProductBrandSlider />
                <CsReport />
            </Container>
        </>
    );
}

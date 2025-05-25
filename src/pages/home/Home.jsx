import Banner from "../../components/banner/Banner";
import Destaque from "../../components/destaque/Destaque";
import SobreNos from "../../components/SobreNos/SobreNos";
import Feedback from "../../components/Feedback/Feedback";

export function Home(){
    return(
        <main >
            <Banner/>
            <Destaque/>
            <SobreNos/>
            <Feedback/>
        </main>
    );
}
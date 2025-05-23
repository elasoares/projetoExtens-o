import Banner from "../../pages/banner/Banner";
import Destaque from "../../pages/destaque/Destaque";
import SobreNos from "../../pages/SobreNos/SobreNos";
import Feedback from "../../pages/Feedback/Feedback";

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
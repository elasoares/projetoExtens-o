import Banner from "../../components/banner/Banner";
import Destaque from "../../components/destaque/Destaque";
import SobreNos from "../../components/SobreNos/SobreNos";
import Feedback from "../../components/Feedback/Feedback";
import Title from "../../components/title/Title";

export function Home(){
    return(
        <main >
            <Banner/>
            <Title children = 'Em Destaque'/>
            <Destaque/>
            <Title children = 'Sobre nós'/>
            <SobreNos/>
            <Title children = 'Feedback'/>
            <Feedback/>
        </main>
    );
}
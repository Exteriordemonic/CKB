import React, {Component} from "react"

import Layout from "../components/layout"
import SmallHero from '../components/smallHero'
import Content from '../components/content'

import img1 from '../images/tgu/3.jpg' 
import img2 from '../images/tgu/5.jpg' 

import image from '../images/pages/zdrowie.jpg' 

class Zdrowie extends Component {
  render() {
    return(
      <Layout supernav={false}>
        <SmallHero title="ZDROWIE" img={image}/>
        <Content img1={img1} img2={img2} >
          <h2>ZDROWY KRĘGOSŁUP</h2>
          <p className="text bold">
          1. Bardzo szybko i skutecznie wzmacnia mięśnie pośladków.
          </p>
          <p className="text">
          Osoby cierpiące na dolegliwości w lędźwiowym odcinku kręgosłupa bardzo często mają słabe mięśnie pośladkowe lub wręcz cierpią na ich zanik, w takim przypadku całe obciążenie przechodzi na dolną część pleców, często powodując różne dysfunkcje w stawach biodrowo- lędźwiowych. W systemie SF mięśnie pośladkowe są angażowane przy każdym ćwiczeniu z odważnikiem, tu najważniejszą rolę pełni PRZYPIĘCIE, którego Studenci Siły uczą się już od pierwszych zajęć. Najlepszym i najbezpieczniejszym ćwiczeniem angażującym pośladki jest SWING- wykonywany prawidłowo według zaleceń SF aktywuje mięśnie pośladkowe podobnie jak przysiady poniżej poziomu kolan, jednak co ważniejsze może być wykonywany przez osoby z problemami w stawie kolanowym, które eliminują ich z głębokich siadów.
          </p>
          <p className="text bold">
          2. Rozciąga zginacze bioder.
          </p>
          <p className="text">
          W badaniach jakie przeprowadził dr Janda słabe mięśnie pośladkowe występowały jednocześnie z przykurczonymi napinaczami bioder, co prowadzi do negatywnych zmian w całej postawie i sylwetce. Podstawowe ćwiczenia takie jak Martwy Ciąg, Swing, TGU są narzędziami do tego aby uzyskać pełny zakres ruchu w zginaczach bioder i przywróci im naturalną funkcjonalność.
          </p>
          <p className="text bold">
          3. Rozwija wytrzymałość mięśni pleców.
          </p>
          <p className="text">
          Jeden z najlepszych specjalistów od kręgosłupa na świecie prof. Stuart McGill stwierdził, że o ile siła dolnych partii pleców nie redukuje możliwości powstania schorzeń kręgosłupa, to właśnie ich wytrzymałość przyczynia się do obniżenia ryzyka w tym zakresie. Tu najlepiej sprawdza się SWING i SNATCH wykonywany z zachowaniem wszystkich elementów prawidłowej techniki.
          </p>
          <p className="text bold">
          4. “Napinanie” nie “wciąganie” brzucha.
          </p>
          <p className="text">
          Niektórzy rekomendują wciąganie brzucha podczas ćwiczeń z ciężarami, jest to błędna praktyka, która wręcz osłabia stabilizację kręgosłupa. Umiejętność napinania zdefiniowana przez dr McGill’a jako symetryczne usztywnienie wszystkich mięśni otaczających kręgosłup bez wciągania i wypinania brzucha jest jedyną skuteczną techniką.
          </p>
        </Content>
      </Layout>
    )
  }
}


export default Zdrowie
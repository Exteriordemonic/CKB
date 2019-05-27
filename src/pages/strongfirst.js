import React, { Component } from "react"

import Layout from "../components/layout"
import SmallHero from '../components/smallHero'
import Content from '../components/content'

import img1 from '../images/pages/silacze.jpg'

import image from '../images/pages/strongfirst.jpg'

class Strongfirst extends Component {
  render() {
    return (
      <Layout supernav={false}>
        <SmallHero title="Strongfirst" img={image} reverse />
        <Content img1={img1} img2={img1} >
          <h2>Czym jest StrongFirst</h2>
          <p className="text">
            Jest to system opracowany przez Pavla Tsatsouline’a trenera, który szkolił rosyjskie siły specjalne (SPECNAZ). W latach 90-tych wyemigrował do USA, gdzie rozpropagował trening z odważnikami kulowymi według własnej metody Hardstyle Kettlebell, będącej podstawą systemu i filozofii STRONG FIRST. Pavel bardzo szybko zyskał duży rozgłos za oceanem, a następnie na całym świecie. Wydał tam swoje pierwsze książki, które do dziś są obowiązkową pozycją zagadnień treningu siłowego: “Nagi Wojownik” “Siła dla Ludu” “Wielkie wejście odważników kulowych”. Prestiżowy magazyn Rolling Stone uznał go w tamtym czasie trenerem roku. Od 2010 roku metody Pavla można poznać podczas kursów instruktorskich w Polsce, gdyż w tym roku Dariusz Waluś został wybrany na oficjalnego przedstawiciela Strong First w Naszym kraju. Obecnie mamy w Polsce ponad setkę instruktorów Strong First, którzy reprezentują i przekazują swoim Studentom filozofię SF, opierającą się na kilku głównych filarach:
          </p>
          <h3 className="text bold">
            1. Siła to fundamentalna zdolność
          </h3>
          <p className="text">
            Prof. Leonid Matwiejew twierdzi: “Siła to podstawa rozwoju pozostałych atrybutów fizycznych”. Każdy atleta musi najpierw rozwinąć siłę w podstawowym zakresie, aby móc rozwijać inne cechy motoryczne. Do tego momentu żaden inny aspekt treningu nie jest ważniejszy niż siła.
          </p>

          <h3 className="text bold">
            2. Siła to umiejętność
          </h3>
          <p className="text">
            Patrzymy na siłę i inne atrybuty jak na umiejętność i traktujemy trening jako doskonalenie, a nie powtarzanie ruchów w celu zmęczenia ciała tzw. “zajazdu”. Praktyka jest kluczem do systematycznego kształtowania każdej umiejętności. Strong First kładzie nacisk na doskonałość techniczną vs. intensywność, ale do chwili kiedy technika jest doskonała. “Ćwiczenia, programy, plany treningowe- to wszystko rzeczy o niewielkim znaczeniu, jeżeli technika nie jest perfekcyjna”- były senior instruktor Rob Lawrence.
          </p>
          <h3 className="text bold">
            3. Yin/ Yang - napięcie i rozluźnienie.
          </h3>
          <p className="text">
            Każde ćwiczenie przechodzi przez fazę napięcia i relaksu. Siła/ moc to napięcie natomiast wytrzymałość, szybkość i gibkość wymaga rozluźnienia. System SF pracuje nad osiąganiem obu tych stanów w maksymalnie efektywny sposób.
          </p>
          <h3 className="text bold">
            4 RYS HISTORYCZNY
          </h3>
          <p className="text">
            Kettlebell czyli odważnik kulowy jako historyczne narzędzie treningowe ma swój początek w czasach carskiej Rosji. W Rosyjskim słowniku słowo „giria” ukazało się po raz pierwszy w 1704r. razem z określeniem mężczyzny podnoszącego ciężary „girevik”. Znaleziska archeologiczne sięgają jednak jeszcze dalej wskazując na fakt wykorzystywania kuli armatniej z uchwytem już w czasach starożytnej Grecji skąd miały dopiero zawędrować do Rosji, gdzie doceniono ich ogromne możliwości i zalety w treningu siłaczy. Na początku wykorzystywane były podczas pokazów cyrkowych i estradowych, a następnie około1880 roku zostały przedstawione szerokiemu gronu rosyjskich atletów. Od tego czasu giria zączęła być postrzegana jako niezastąpione narzędzie do kształtowania siły, atletycznej sylwetki i spalania tkanki tłuszczowej.
          </p>
          <p className="text">
            Tak właśnie opisał w 1913 roku efekty treningu z odważnikami Ludvig Chaplinskiy w czasopiśmie „Herkules” pieczętując tym samym prawdziwy rozkwit tego prostego narzędzia treningowego. XX wiek to okres usystematyzowania treningu i powstanie Girevoy Sport, jako narodowej dyscypliny Rosjan. Na przestrzeni XIX i XX wieku w Europie z odważnikami kulowymi trenowało wielu legendarnych siłaczy takich jak Artur Saxon (zdj. w środku), który wyciskał jednorącz sztangę o wadze 158,5kg, oraz Eugen Sandow(zdj. po lewej) pierwszy w historii kulturysta, którego sylwetka jest uwieczniona w statuetce wręczanej zwycięzcom Mr. Olympia od 1965 roku. Piotr Kryłow obwołany przez publiczność “Królem Odważników” (zdj. po prawej) wyciskał 32 kilogramowy odważnik 88 razy, potrafił się nim przeżegnać, oraz żonglować trzema takim kulami jednocześnie.
          </p>
        </Content>
      </Layout>
    )
  }
}


export default Strongfirst
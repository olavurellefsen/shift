import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
  `
const AboutHeader = styled.h1`
  font-size: 2em;
  ${breakpoint('mobile','desktop')`
    font-size: 1.5em;
  `}
  font-weight: bold;
  `
  AboutHeader.displayName = 'AboutHeader'
const AboutHeader2 = styled.h2`
  font-size: 1.5em;
  ${breakpoint('mobile','desktop')`
    font-size: 1em;
  `}  
  font-weight: bold;
  `
const AboutBody = styled.p`
  margin-bottom: 5px;
  font-size: 1em;
  ${breakpoint('mobile','desktop')`
    font-size: 0.7em;
  `}  
  `
const AboutTable = styled.table`
  max-width: 752px;
  ${breakpoint('mobile','desktop')`
    max-width: 275px;
    font-size: 0.7em;
  `}  
  `
const TableCaption = styled.caption`
  margin-top: 20px;
  padding-bottom: 12px;
  font-weight: bold;
  font-style: italic;
  `
const TableHeader = styled.th`
    text-align: left;
  `  
const TableData = styled.td`
  padding: 5px;
  background-color: lightgrey;
  border-color: white;
  `
const AboutImage = styled.img`
  max-width: 752px;
  ${breakpoint('mobile','desktop')`
    max-width: 250px;
    max-height: 142px;
  `}  
  `

export default () => (
  <AboutContainer>
    <AboutHeader>Forudsætninger</AboutHeader>
    <AboutHeader2>Forudsætninger kort fortalt</AboutHeader2>
    <AboutBody>
      Her vil vi løbende beskrive de vigtigste forudsætninger anvendt i TIMES-DK modellen til de viste
      scenarier. Det er ikke en fuldendt beskrivelse og dokumentation, men den vil gradvist få tilføjet flere   
      og flere detaljer efterhånden som vi får det beskrevet.
    </AboutBody>
    <AboutBody>
      Modellen TIMES-DK er en energisystemmodel udviklet som en følge af energiaftalen i 2012. Den er 
      udviklet i et samarbejde mellem Energistyrelsen og DTU og bliver i dag brugt til bl.a. Energistyrelsens 
      årlige Basisfremskrivning. DTU’s udgave af TIMES-DK modellen adskiller sig fra Energistyrelsens på en 
      række punkter, men grundmodellen er den samme. I vores modellering af scenarier bruger vi mange af de 
      samme antagelser og forudsætninger som Energistyrelsen bruger i Basisfremskrivningen. DTU’s Basisscenario 
      kan dermed sammenlignes med Energistyrelsens.
    </AboutBody>
    <AboutHeader2>Brændselspriser</AboutHeader2>
    <AboutBody>
      Brændselspriserne, der anvendes i DTU’s TIMES-DK er baseret på Energistyrelses samfundøkonomiske beregningsforudsætninger fra 2018.
    </AboutBody>
    <AboutBody>
      <AboutImage src="images/fuel_price.png" alt="Fuel price" width="752" height="452" />
    </AboutBody>
    <AboutHeader2>Priser på biler</AboutHeader2>
    <AboutBody>
      Købsprisen for forbrugerne består i modellen af importprisen, registreringsafgift samt moms. Der er 
      naturligvis stor usikkerhed på disse fremtidige priser, men med de anvendte priser og eksisterende 
      afgiftssystem i Danmark, hælder det til en lille fordel til de eldrevne biler efter 2020.
    </AboutBody>
    <AboutBody>
      <AboutImage src="images/future_car_price.png" alt="Future car price" width="752" height="452" />
    </AboutBody> 
    <AboutBody>
      Købsprisen på hybridbiler forventes allerede at falde til under prisen af benzin og diesel biler i 2020, 
      som følge af afgiftsmæssige fordele. Frem mod 2025 forventes elbiler yderligere at falde og bliver dermed 
      den billigste bil type. De anvendte importpriser på biler i figuren svarer til en EU mellem klasse bil eller 
      en amerikansk kompakt model. Data er baseret på det amerikanske studie “ASSESSMENT OF VEHICLE SIZING, ENERGY 
      CONSUMPTION, AND COST THROUGH LARGE-SCALE SIMULATION OF ADVANCED VEHICLE TECHNOLOGIES” lavet af U.S. 
      Department of Energy (2018). 
    </AboutBody>
    <AboutBody>
      En optimeringsmodel som TIMES-DK kan have svært ved at fange forbrugerpræferencer, der ikke er økonomisk 
      rationelle såsom frygten for at løbe tør for strøm i en elbil eller loyalitet over for et bestemt bilmærke. 
      TIMES-DK vælger den billigste kombination af teknologier på tværs af alle sektorer og minimerer dermed de 
      samlede omkostninger i samfundet. Derfor vil modellen så hurtigt som muligt forsøge at skifte til el og 
      hybridbiler da de er billigst efter 2020. For at komme denne forbrugerpræference til gode bruges en bilvalgs 
      model ved navn "Car Stock Model", der er udviklet med henblik på at analysere forbrugsmønster. Resultater 
      fra denne model viser tildenser for at mellem og store biler vil skifte mod hybrid og el biler som følger af 
      den nuværende afgiftstruktur. 
    </AboutBody>
    <AboutBody>
      <AboutImage src="images/Carstock.png" alt="Car Stock" width="752" height="452" />
    </AboutBody> 
    <AboutBody>
      Dette vurderes af DTU, at udviklingen af el og hybrid biler er en relativ konservativ begrænsning når man 
      kigger på udmeldingerne fra bilproducenterne: 
    </AboutBody>
    <AboutTable>
      <TableCaption>Bilproducenternes udmeldinger vedrørende fremtidige bilmodeller</TableCaption>
      <tbody>
        <tr>
          <TableHeader>Bilfirma</TableHeader>
          <TableHeader>Bilmodeller</TableHeader>
          <TableHeader>Målsætninger</TableHeader>
        </tr>
        <tr>
          <TableData>Volkswagen Group</TableData>
          <TableData>50 EV, 30 PHEV og 220 Hybrid modeller i 2025 og alle modeller (300) findes i EV eller PHEV version i 2030</TableData>
          <TableData>25 % af salg i 2025 er EV/PHEV (2-3 millioner biler)</TableData>
        </tr>
        <tr>
          <TableData>PSA Group (Peugeot, Opel, Citroén)</TableData>
          <TableData>Alle bilmodeller i EV eller PHEV version i 2025</TableData>
          <TableData></TableData>
        </tr>
        <tr>
          <TableData>Volvo</TableData>
          <TableData>Alle nye moodeller er PHEV eller EV fra 2019</TableData>
          <TableData></TableData>
        </tr>
        <tr>
          <TableData>Ford</TableData>
          <TableData>16 EV og 24 PHEV i 2022 (udtalelsen blev ændret fra 2025 efter blot 6 måneder)</TableData>
          <TableData>70 % af salg til Kina vil være hybrid, PHEV eller EV i 2025</TableData>
        </tr>
        <tr>
          <TableData>Jaguar, Aston Martin og Land Rover</TableData>
          <TableData>Alle nye modeller er PHEV eller EV fra 2020</TableData>
          <TableData></TableData>
        </tr>
        <tr>
          <TableData>GM</TableData>
          <TableData>20 EV i 2023 og alle modeller er i EV eller PHEV i 2025</TableData>
          <TableData></TableData>
        </tr>
        <tr>
          <TableData>Hyundai</TableData>
          <TableData>14 EV i 2025 og 60 % af modellerne findes i el eller hybrid version i 2021</TableData>
          <TableData></TableData>
        </tr>
        <tr>
          <TableData>Toyota</TableData>
          <TableData>Alle modeller i el eller hybrid version i 2025</TableData>
          <TableData>salg af 5.5 milioner EV og PHEV i 2030, svare til over 50 % af alle solgte biler i 2017</TableData>
        </tr>
      </tbody>
    </AboutTable>  
    <AboutHeader2>Diverse antagelser vedr. el- og varmesektoren</AboutHeader2>
    <AboutBody>
      Da TIMES-DK udelukkende modellerer Danmark og ikke de omkringliggende lande, så anvendes en 
      række eksogene antagelser om udviklingen i elpriser i omkringliggende lande, 
      transmissionsforbindelser osv. Disse rammebetingelser følger så vidt muligt Energistyrelsens 
      Basisfremskrivning. Det betyder bl.a. en maximal import/eksport af elektricitet på 22% af det 
      nationale el forbrug i 2030.
    </AboutBody>
    <AboutBody>
      Der er ikke modelleret nogen brændselsbinding i ikke modellen. Det er derfor muligt at skifte   
      fra kul i store centrale fjernvarme til både biomasse og varmepumper.
    </AboutBody>
    <AboutBody>
      Der er ikke tilslutningspligt til fjernvarme i modellen, så fjernvarme vil kun forblive og udvides 
      til områder hvor der samlet set er den billigste løsning. 
    </AboutBody>
    <AboutBody>
      Der bruges en general diskonteringsrente på 10 % i modellen for at simulere privat økonomisk 
      tankegang. Dog opererer fjernvarmeværker med en diskonteringsrente på 4 % for at simulere nulprofit 
      og mulighed for kommunelån.
    </AboutBody>
    <AboutHeader2>Potentiale for vedvarende energi i Danmark anvendt som grænser i modellen, herunder delt 
    i brændselsfri og biomasse potentialer.</AboutHeader2>
    <AboutTable>
      <TableCaption>Brændselsfri VE potentialer</TableCaption>
      <tbody>
        <tr>
          <TableHeader>Teknologi</TableHeader>
          <TableHeader>MW kapacitet</TableHeader>
        </tr>
        <tr>
          <TableData>Landvind</TableData>
          <TableData>6200</TableData>
        </tr>
        <tr>
          <TableData>Havvind</TableData>
          <TableData>50000</TableData>
        </tr>
        <tr>
          <TableData>Husstands solceller</TableData>
          <TableData>9500</TableData>
        </tr>
        <tr>
          <TableData>Industriens tag solceller</TableData>
          <TableData>8100</TableData>
        </tr>
        <tr>
          <TableData>Landbaseret solceller</TableData>
          <TableData>3000</TableData>
        </tr>
        <tr>
          <TableData>Bølge energi</TableData>
          <TableData>3175</TableData>
        </tr>
        <tr>
          <TableData>Solvarme</TableData>
          <TableData>7400</TableData>
        </tr>
        <tr>
          <TableData>Geotermi</TableData>
          <TableData>630</TableData>
        </tr>
      </tbody>
    </AboutTable>
    <AboutBody>
      Landvind er begrænset 6200 MW som følger af energiaftalens beslutninger om maksimalt 1750 MW
      landvind. El-produktion på landvind er den billigste løsning og en øgning af potentialet betyder mere
      landvind og et billigere system.
    </AboutBody>
    <AboutTable>
      <TableCaption>Nationale biomasse potentialer</TableCaption>
      <tbody>
        <tr>
          <TableHeader>Energikilde</TableHeader>
          <TableHeader>PJ per år</TableHeader>
        </tr>
        <tr>
          <TableData>Affald</TableData>
          <TableData>32.6</TableData>
        </tr>
        <tr>
          <TableData>Træflis</TableData>
          <TableData>40</TableData>
        </tr>
        <tr>
          <TableData>Brænde</TableData>
          <TableData>24</TableData>
        </tr>
        <tr>
          <TableData>Energiroer</TableData>
          <TableData>15</TableData>
        </tr>
        <tr>
          <TableData>Rapsfrø</TableData>
          <TableData>15</TableData>
        </tr>
        <tr>
          <TableData>Træpiller</TableData>
          <TableData>0</TableData>
        </tr>
        <tr>
          <TableData>Gylle</TableData>
          <TableData>18.7</TableData>
        </tr>
        <tr>
          <TableData>Halm</TableData>
          <TableData>54</TableData>
        </tr>
        <tr>
          <TableData>Græsarter</TableData>
          <TableData>6.7</TableData>
        </tr>
        <tr>
          <TableData>Energimajs</TableData>
          <TableData>3.6</TableData>
        </tr>
        <tr>
          <TableData>Dybstrøelse</TableData>
          <TableData>16</TableData>
        </tr>
        <tr>
          <TableData>Totalt potentiale</TableData>
          <TableData>185.8</TableData>
        </tr>
      </tbody>
    </AboutTable>
    <AboutBody>
      Den totale mænge nationale biomasse til rådighed svarer til ca. 220 PJ med de nuværende 
      ressourcer. Med udnyttelse af marginaljorde til produktion af energiafgrøder vil potentialet kunne 
      øge potentialet op mod 250 PJ biomasse. Ifølge studiet ”Carbon footprint of bioenergy pathways for 
      the future Danish energy system” er den bæredygtige biomasse ressource på 10-20 GJ/person/år, 
      svarende til 55-110 PJ biomasse forbrug i Danmark, altså mindre end det som anses som et realistisk 
      potentiale for Danmark.
    </AboutBody>    
    <AboutBody>
      Metode til beregning reduktioner i landbruget
      DTU har forsøgt at beregne landbrugets bidrag til at sikre Danmarks reduktionen af drivhusgasser.
      Der antages en grundlæggende udvikling i henhold til folketingets beslutning i 1989 om at øge Danmarks skove 
      til 20-25 % af det samlede areal i Danmark i 2100. I dag har vi nået en del af vejen, nemlig skov på omkring 
      14 % af vores areal, hvilket vil betyde vi i gennemsnit skal beplante mellem 3000-4500 ha skov årligt frem mod 2100.
      Ved beregningen af skovens CO2 optag bruger vi en gennemsnit antagelse på: CO2 optag på ny skov er svarende til 10 t 
      CO2/ha/år i 100 år efter beplantningen. Denne værdi er dog utrolig varierende og derfor relativ grov antagelse. 
      Afhængigt af træsort vil optaget kunne være op til 50 % højere per år, men så med optag over en kortere periode. 
      Der er dog langt flere hensyn at tage når der plantes skov end blot CO2, f.eks vil nåletræer have bedst klimavirkning, 
       mens løvtræer har bedre egenskaber i forhold til grundvand og skovgæster foretrækker løvskov.
      Konkret ved udtag af landbrugsjorde til natur: Baseret på nuværende forhold mellem åben natur og skove i Danmark, antages 
      samme opdeling i fremtiden, da der også tages hensyn til miljø og biodiversitet. Dette betyder at ca. 2/3 af landbrugsjorde 
      omstilles til skov og 1/3 omstilles til åben natur.
      Konkret for de kulstofrige/organogene jorde antager vi at der findes et maximalt potentiale for CO2 reduktion/optag 
      svarende til 1,3 mio t CO2e ved total omstilling af alle 108.000 ha af disse jorde til skov og moser. Der kan kun plantes 
      skov på ca. halvdelen af disse jorde da resten er moser og våde enge.
      De 1,3 mio. t CO2e er en netto antagelse, da der ved omstilling af jorderne både sker et øget metan udslip, men også en 
      reduktion i lattergas. Følgende med ovenstående antagelser, antages det at netto optaget for de samlede 108.000 ha bliver 
      ca. 0.8 mio t COe. 
      Vi tager ikke højde for den typiske forsinkelse mellem landbrugsjorde udtages og etableringstid for naturområderne.
    </AboutBody> 
    <AboutBody><Link to='/'>Tilbage til forsiden</Link></AboutBody>
  </AboutContainer>
)

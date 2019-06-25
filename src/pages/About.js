import React from "react";
import styled from "styled-components";
import breakpoint from "styled-components-breakpoint";

const AboutContainer = styled.div`
  padding: 0px 20px 20px 20px;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;
`;
const AboutHeader = styled.h1`
  font-size: 2em;
  ${breakpoint("mobile", "desktop")`
    font-size: 1.5em;
  `}
  font-weight: bold;
`;
const AboutHeader2 = styled.h2`
  font-size: 1.5em;
  ${breakpoint("mobile", "desktop")`
    font-size: 1em;
  `}
  font-weight: bold;
  margin-bottom: 0px;
`;
const AboutBody = styled.p`
  font-size: 1em;
  ${breakpoint("mobile", "desktop")`
    font-size: 0.7em;
  `}
`;
const BodyLink = styled.a`
  color: inherit;
  text-decoration: underline;
`;

export default () => (
  <AboutContainer>
    <AboutHeader>Om Værktøjet</AboutHeader>
    <AboutHeader2>ENERGIMODELLEN TIMES-DK</AboutHeader2>
    <AboutBody>
      TIMES-DK er et avanceret beregningsværktøj, der anvendes til at bygge
      scenarier for energi-systemet i Danmark. Modellen dækker energiforbrug i
      alle sektorer i Danmark. Den har en detaljeret repræsentation af{" "}
      <b>el- og fjernvarme sektoren, bygninger, industri samt transport</b> og
      kan dermed belyse målsætninger og politiske virkemidler på tværs af alle
      sektorer. Den inkluderer det danske energiafgiftssystem, så ændringer og
      det tilhørende provenu kan beregnes. Baseret på input om brændselspriser,
      teknologipriser og politiker (f.eks. støtte, afgifter, regulering), finder
      modellen den billigste kombination af teknologier i alle sektorer. Seneste
      tilføjelse er en simpel repræsentation af emissioner af andre
      drivhusgasser end CO2 fra{" "}
      <b>jord- og skovbrug samt strålingseffekt fra fly</b>
      således, at modellen nu inkluderer alle direkte udledte klimagasser.
    </AboutBody>
    <AboutBody>
      Modellen er udviklet i samarbejde mellem DTU, COMETS projektet og
      Energistyrelsen. Der er et fortsat samarbejde om den løbende udvikling og
      forbedring af modellen.
    </AboutBody>
    <AboutBody>
      Energiforliget 2012 efterspurgte en model, som kunne sammenligne
      klimatiltag på tværs af sektorer. DTU blev valgt til at hjælpe
      Energistyrelsen med at udvikle modellen som nu bruges på DTU i
      forskningsprojekter og i Energistyrelsen til dele af Basisfremskrivningen
      (for industri og husholdninger).
    </AboutBody>
    <AboutBody>
      I forskningsprojektet COMETS (Innovationsfonden: (
      <BodyLink href="http://www.cometsproject.dk/">
        www.cometsproject.dk
      </BodyLink>
      ) har vi sat en arbejdspakke af til at formidle modelresultater og det er
      i det regi vi har udviklet hjemmesiden (
      <BodyLink href="https://klimaaftalen.tokni.com/">
        klimaaftalen.tokni.com
      </BodyLink>
      ) og afholdt en høring i Folketinget. På hjemmesiden vises resultater for
      beregninger af målbare udspil på klimapolitikker og sandsynligheden for at
      leve op til Paris-aftalen med disse.
    </AboutBody>
    <AboutHeader2>VIGTIGE FORUDSÆTNINGER</AboutHeader2>
    <ul>
      <li>
        Energiaftalen 2018
        <br />
        <br /> Alle partiernes scenarier bygger oven på Energiaftalen fra 2018,
        hvorfor resultater for de forskellige partier ligger tæt frem til 2030.
        Dette inkluderer aftaler om havvind udbygning, begrænsning af landvind,
        de eksisterende bilafgifter etc.
      </li>
      <br />
      <li>
        Økonomisk fremskrivning
        <br />
        <br />
        Fremskrivning af sektorenes økonomiske aktivitet frem til 2050 er
        baseret på Finansministeriets konvergensprogram, samt ELModelBolig’s
        fremskrivning af elapparater per husstand og DREAM gruppens
        fremskrivning af boligareal. Dette er de samme kilder, som anvendes til
        Energistyrelsens basisfremskrivning. Udviklingen i de enkelte sektorers
        økonomiske aktivitet oversættes i modellen til en efterspørgsel efter
        energitjenester (m2 opvarmede boliger, procesenergi i tre temperatur
        intervaller, transportarbejde for personer og gods, antal elektriske
        apparater i boliger osv.)
      </li>
      <br />
      <li>
        Brændselspriser
        <br />
        <br />
        Her bruger vi Energistyrelsens fremskrivning af brændselspriserne for
        Danmark.
      </li>
      <br />
      <li>
        Teknologiudvikling
        <br />
        <br />
        Når man kigger frem til 2050 er den teknologiske udvikling vigtig for
        resultatet. Modellen indeholder en fremskrivning af alle
        energikonverteringsteknologiers effektivitet og omkostninger, hvor det
        antages, at der vil ske en fortsat udvikling. Data er baseret på
        Energistyrelsens teknologikataloger og internationale kilder (ex. på
        teknologier: biler, kedler til industri, havvind, solceller, naturgasfyr
        til boliger, vaskemaskiner,……).
      </li>
      <br />
      <li>
        Markeder
        <br />
        <br />
        Der antages perfekte markeder for de ”varer”, som handles i modellen
        (el, fjernvarme og brændsler). Det betyder bl.a. at de som agerer i
        markederne har fuld information om alle relevante forhold, og
        markedsprisen er defineret som den marginale pris i hvert tidsskridt.
        Modellen kan handle el og brændsler på et globalt marked – for el dog
        begrænset af transmissionsforbindelser og antaget elpris i de
        omkringliggende lande.
      </li>
      <br />
      <li>
        Drivhusgasser
        <br />
        <br />
        Modellen regner kun på drivhusgasudledninger i Danmark og dermed ikke
        hvad dansk el-eksport evt. fortrænger i andre lande. Al CO2 udledning
        fra energikonvertering indgår i modellens optimering, mens lattergas og
        metan fra landbruget, CO2 optag i skov og strålingseffekt fra fly indgår
        i modellen, men ikke er inkluderet i omkostningsminimeringen. Det
        betyder at effekter på de øvrige klimagasser, som følge af forskellige
        politikker, er baseret på videnskabelige studier og så lagt manuelt ind
        i modellen. Både international skibs- og flytrafik er inkluderet, og den
        danske del beregnes ved at transportarbejdet, energiforbrug og
        emissioner fordeles ligeligt mellem Danmark og destinationslandet.
      </li>
      <br />
      <li>
        Fjernelse af potentielle barrierer i alle scenarier
        <br />
        <br />
        Modellen er fri til at investerer i de teknologier, som er nødvendige
        for at energisystemet kan møde efterspørgslen efter energitjenester i
        fremtiden. Det betyder bl.a. at det antages, at der afsættes områder til
        ny havvind, solceller og andet arealkrævende, og dermed at hvad der
        måtte være af barrierer afhjælpes. Stigningen i antallet af elbiler og
        ellastbiler kræver udbygning med offentlige ladestandere, hvilket
        modellen gør efter behov uden at afvente en politisk beslutning. På
        samme måde antages det, at potentialet af overskudsvarme fra industrien
        kan udnyttes i fjernvarmenettet, hvis det kan betale sig.
      </li>
      <br />
      <li>
        Landbrug, skovbrug og strålingseffekt fra fly
        <br />
        <br />
        Det antages at Danmark fortsætter rejsning af skov i hht. beslutning i
        Folketinget fra 1989 om at Danmarks skove skal dække 20-25 % af det
        samlede areal i 2100. I dag er 14 % dækket af skov og i alle scenarier
        er der antaget en basis skovrejsning svarende til en lineær udvikling
        fra i dag til 2100. Mht. CO2 lagring ved udtag af specielle jorde og
        plantning af skov eller energiafgrøder er anvendt tal fra Århus
        universitet. (se specielt notat om disse antagelser).
        <br />
        <br />
        Fly er specielt skadelige for klimaet fordi de udleder højt oppe i
        atmosfæren. Hvis et fly bruger fossile brændsler, så er deres
        klimaeffekt 2,7 gange effekten ved jordoverfladen. Denne ekstra effekt
        kalder vi strålingseffekten, da den først og fremmest skyldes vanddamp
        fra udstødningen, som reflekterer varmestrålingen tilbage til jorden
        (altså forstærker drivhuseffekten).
      </li>
      <br />
      <li>
        Adfærd i modellen
        <br />
        <br />
        Brugeradfærd er svær at repræsenterer i en matematisk optimeringsmodel.
        Her er økonometrisk modeller bedre egnet, til gengæld mangler de den
        nødvendige teknologiske detalje til at se hvordan målsætninger kan nås.
        Der er stor forskel på den økonomiske horisont for en almindelig borger,
        der overvejer at købe nyt fyr eller efterisolere sin bolig og store
        energiselskaber, som investerer i nye kraftværker. For persontransport
        har vi indført et tidsbudget samt begrænsninger på infrastruktur til at
        repræsentere forbrugernes valg mellem transportformer. I alle sektorer
        har vi indført såkaldte Hurdle Rates, der repræsenterer den tidshorisont
        investorerne har. Indtil nu bruges 10% i alle sektorer og for alle
        investeringer, men modellen har mulighed for at variere dette for
        sektorer og teknologier.
      </li>
    </ul>
    <AboutHeader2>MODEL SPECIFIKATIONER</AboutHeader2>
    <ul>
      <li>
        Model type
        <br />
        <br />
        TIMES-DK er en såkaldt optimeringsmodel med endogene investeringer, dvs.
        modellen finder selv ud af hvad der skal investeres i og hvornår. Den
        matematiske formulering sikrer at modellen finder den billigste løsning
        for hele energisystemet givet de begrænsninger brugeren har defineret.
        Modellen har såkaldt fuldt fremsyn, dvs. den kan se alle antagelser og
        teknologiske udviklinger fra i dag frem til 2050. Derfor kan den tage
        hensyn til hvornår nye effektive teknologier forventes at blive
        tilgængelige.
      </li>
      <br />
      <li>
        Sektorer
        <br />
        <br />
        TIMES-DK har 5 hovedsektorer: husholdninger, transport, el og varme,
        forsyning og industri. Industrisektoren dækker alle erhverv og er
        underopdelt i 12 hovederhverv.
      </li>
      <br />
      <li>
        Geografi og tid
        <br />
        <br />
        TIMES-DK dækker Danmark og er geografisk delt op i Vest Danmark og Øst
        Danmark. Disse to regioner er hver underopdelt i tre
        varmeforsyningsområder; centrale, decentrale og individuelle. Året er
        opdelt i 32 tidsskridt, som er udvalgt til at dække alle
        driftssituationer i energisystemet, dvs. nogle tidsskridt repræsenterer
        situationer med lav vindproduktion og højst elforbrug og visa versa. Det
        er valgt at køre med forholdsvis få tidsskridt for at holde regnetiden
        nede.
      </li>
      <br />
      <li>
        Teknologier
        <br />
        <br />
        Det er en teknologirig model, som forsøger at repræsenterer de
        energikonverterende og -forbrugende teknologier tilpas detaljeret til at
        kunne vurdere om systemet kan fungere i praksis samt at kunne beregne de
        samlede omkostninger ved at drive hele energisystemet. Der er mere en
        3000 teknologier i modellen og det kan følges ned til de enkelte
        teknologier hvor meget der investeres i over scenarieperioden.
      </li>
    </ul>
    <AboutBody>
      Læs mere om TIMES-DK{" "}
      <BodyLink href="http://www.esymodels.man.dtu.dk/times-dk">
        www.esymodels.man.dtu.dk/times-dk
      </BodyLink>
    </AboutBody>
    <AboutHeader2>BEGRÆNSNINGER</AboutHeader2>
    <AboutBody>
      Alle modeller er en forsimplet repræsentation af virkeligheden og derfor
      er der selvfølgelig ting der ikke er med og områder den ikke kan sige
      noget om.
    </AboutBody>
    <ul>
      <li>
        Makroøkonomiske effekter (eksport/import, beskæftigelse, etc.)
        <br />
        <br />
        Modellen holder ikke styr på makroøkonomiske effekter, dvs. hvordan
        forskellige industrier påvirkes økonomisk af politiske tiltag. Hvis der
        indføres en afgift på f.eks. et brændsel, så antages det, at afgiften
        implementeres på en måde, så industriens konkurrenceevne ikke forværres
        relativt. Dvs. modellen kan ikke se om politikker skubber virksomheder
        til udlandet. Den siger heller ikke noget direkte om hvordan scenarier
        påvirker beskæftigelse eller hvordan investeringer i energisystemet
        konkurrerer med sundhedsudgifter o.lign. Men da modellen anvender en
        økonomisk fremskrivning fra Finansministeriet som basis, så sikrer dette
        at grundlæggende sammenhænge er overholdt som udgangspunkt.
      </li>
      <br />
      <li>
        Påvirkning fra udlandet
        <br />
        <br />
        Danmark er en lille åben økonomi i et stort internationalt marked og
        derfor har det stor betydning for modelresultaterne hvad der antages om
        udviklingen i nabolande og resten af verden. Der antages ikke ændrede
        påvirkninger fra udlandet i forskellige scenarier.
      </li>
    </ul>
    <AboutHeader2>VALIDERING</AboutHeader2>
    <AboutBody>
      For at validere modellen sammenligner vi resultater med andre lignende
      modeller, med statistik og litteratur
    </AboutBody>
    <ul>
      <li>
        Kalibrering
        <br />
        <br />
        Modellen er kalibreret til basisåret 2015. Dvs. det sikres den kan
        gengive energiforbruget, brændselsforbrug og CO2-udledninger i det
        historiske år.
      </li>
      <br />
      <li>
        Sammenligning med andre modeller
        <br />
        <br />
        Vi sammenligner bl.a. med Energistyrelsen modelkørsler, men også med
        mere detaljerede sektormodeller. Vi kører en detaljeret bilvalgsmodel
        ved siden af for at tjekke TIMES-DK’s resultater omkring valg af
        biltyper og elsystemmodellen Balmorel, der dækker Nord Europa til at
        tjekke el-handel og elpriser.
      </li>
      <br />
      <li>
        Kommentarer fra kollegaer
        <br />
        <br />
        Ligeså vigtigt er kommentarer fra kollegaer i Danmark, som arbejder med
        energisystemmodeller.
      </li>
    </ul>
    <AboutHeader2>TIMES VÆRKTØJET</AboutHeader2>
    <AboutBody>
      TIMES modelværktøjet er udviklet i et samarbejde under det Internationale
      Energiagentur (IEA) gennem mere end 30 år. Det anvendes i mere end 70
      lande til analyser fra by- til globalt niveau. Samarbejdet som hedder
      ETSAP (<BodyLink href="https://iea-etsap.org">iea-etsap.org</BodyLink>) er
      et såkaldt teknologiprogram under IEA som Danmark har været medlem af i
      mange år og lige nu er 22 lande og to internationale energivirksomheder
      aktive samt et utal af universiteter og forskningsinstitutioner. Kenneth
      Karlsson fra DTU er Operating Agent for ETSAP og koordinerer dette
      samarbejde inklusiv forskningsprojekter.
    </AboutBody>
    <AboutBody>
      TIMES modeller er bredt anvendt og bruges bl.a. af IEA til deres Energy
      Technology Perspective (ETP)-rapporter, af World Energy Council (WEC) til
      deres scenarier, af EC Joint Research Centre i Petten Holland (JRC) til
      analyser for kommissionen. Flere modelteams bruger også TIMES modeller til
      scenarieberegninger for IPCC.
    </AboutBody>
  </AboutContainer>
);

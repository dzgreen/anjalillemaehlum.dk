import Container from "components/Container"
import Koncertkort from "components/Koncertkort"

export default function Kalender({ kalender }) {
  return (
    <Container title="Kalender">
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          Kalender
        </h1>
        <h2 className="pb-4 text-lg font-semibold tracking-tight text-black md:text-xl">
          Kommende begivenheder
        </h2>

        <div className="flex flex-col space-y-8 pb-8">

          {/* 2) Onsdag 17. september */}
          <Koncertkort
            title="Duo Gaudia – Klassisk musik fra de varmere himmelstrøg"
            sted="Kirkegade 4A, 3790 Hasle, Denmark"
            tid="Onsdag 17. september kl. 20.00–21.00"
            entre={
              <a
                href="https://billetto.dk/e/duo-gaudia-klassisk-musik-fra-de-varmere-himmelstrog-billetter-1323256?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1323256"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/duoto.webp`}
            showLaesMere={true}
          ></Koncertkort>

          {/* 3) Torsdag 18. september */}
          <Koncertkort
            title="Ensemble Baroque Pleasures i Østermarie kirke"
            sted="Svanekevej 6, 3751 Østermarie"
            tid="Torsdag 18. september kl. 20.00–21.00"
            entre={
              <a
                href="https://bornholmskulturuge.dk/da/program/ensemble-baroque-pleasures-oestermarie-kirke/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/baroque.png`}
            showLaesMere={true}
          ></Koncertkort>

          {/* 4) Torsdag 18. september (tidligere på dagen) */}
          <Koncertkort
            title="Carl Nielsen Børnekoncert med Sigurd Barrett"
            sted="Skt. Nicolai Kirke, Kirkepladsen 20, 3700 Rønne"
            tid="Torsdag 18. september kl. 17.00"
            entre={
              <a
                href="https://www.sktnicolai.dk/b/carl-nielsen-bornekoncert-med-sigurd-barrett-36932103?utm_source=Widget+on+www.sktnicolai.dk%2Fkoncerter-og-kor%2Fkoncerter&utm_medium=Widgets"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/sigurd.jpeg`}
            showLaesMere={true}
          ></Koncertkort>

          {/* 5) Lørdag 20. september */}
          <Koncertkort
            title="Ensemble Baroque Pleasures i Gudhjem kirke"
            sted="Kirkevej 9, 3760 Gudhjem"
            tid="Lørdag 20. september kl. 16.00–17.00"
            entre={
              <a
                href="https://bornholmskulturuge.dk/da/program/ensemble-baroque-pleasures-gudhjem-kirke/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/baroque.png`}
            showLaesMere={true}
          ></Koncertkort>

          {/* 6) Søndag 21. september */}
          <Koncertkort
            title="KVINDELIV – Poetisk danseperformance med nykomponeret musik for Track og Cello"
            sted="Nygade 2, 3770 Allinge-Sandvig, Danmark"
            tid="Søndag 21. september kl. 14.00–14.40"
            entre={
              <a
                href="https://bornholmskulturuge.dk/da/program/kvindeliv/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/kvindeliv.jpg`}
            showLaesMere={true}
          ></Koncertkort>

          {/* 7) Tirsdag 30. september */}
          <Koncertkort
            title="Koncertturné med Arvid Asmussen og projektet Optaget"
            sted="Christian's Church, Frederikshaldsgade 15, 8200 Aarhus"
            tid="Tirsdag 30. september kl. 20.00–22.00"
            entre={
              <a
                href="https://www.christianskirken.dk/begivenhed/30-9-2025-lovsangskoncert-og-bogrelease-med-arvid-asmussen-63490"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/arvid.jpeg`}
            showLaesMere={true}
          ></Koncertkort>

          {/* 8) Lørdag 11. oktober */}
          <Koncertkort
            title="Jubilæums koncert med udrag fra Elgars Cellokoncert"
            sted="Skt. Nicolai Kirke, Kirkepladsen 20, 3700 Rønne"
            tid="Lørdag 11. oktober kl. 16.00"
            entre={
              <a
                href="https://www.sktnicolai.dk/b/skt-nicolai-kirkes-koncertkor-36315977?utm_source=Widget+on+www.sktnicolai.dk%2Fkoncerter-og-kor%2Fsommerkoncerter&utm_medium=Widgets"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/nicolai_kirkes_koncertkor.png`}
            showLaesMere={true}
          ></Koncertkort>
        </div>


        <h2 className="pb-4 text-lg font-semibold tracking-tight text-black md:text-xl">
          Tidligere begivenheder

        </h2>


        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Kvindeliv - En poetisk danseforestilling"
            sted="Grønbechs Gård 4, 3790 Hasle"
            tid="14. og 15. februar kl 19.00"
            entre={
              <a
                href="https://billetto.dk/e/kvindeliv-billetter-1161441?utm_source=billetto+advertising&utm_medium=billetto&utm_campaign=find&utm_content=3DK"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/kvindeliv.jpg`}
            showLaesMere={true}
          ></Koncertkort>
        </div>

        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Duo To - klassisk og folklore for cello og guitar"
            sted="Hasle Kirke, Kirkegade 4A, 3790, Hasle"
            tid="27. marts 2025 19:30 - 21:30"
            entre={
              <a
                href="https://bornholm.info/event/duo-to-klassisk-og-folklore-for-cello-og-guitar/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/duoto.webp`}
            showLaesMere={true}
          ></Koncertkort>
        </div>

        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Literaturperformance med Siff Mosin på Literaturens folkemøde"
            sted="Møbelfabrikken, Gl. Rønnevej 17, 3730 Nexø"
            tid="Torsdag 12. september kl. 20.00-21.00"
            entre={
              <a
                href="https://www.andersennexoe.dk/da/andersen-nexoe/litteraturens-folkemoede?_ga=2.142036594.1146317493.1725565724-2027723662.1716464391"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/siff.jpg`}
            showLaesMere={true}
          ></Koncertkort>
        </div>

        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Efterårskoncert med vokalensemblet Herlufs vokaler"
            sted="Kirkepladsen 3, 4800 Nykøbing Falster"
            tid="Søndag 15. september 2024, kl. 16.00"
            entre={
              <a
                href="https://www.nykfsogn.dk/b/koncert-31922996?utm_source=Widget+on+www.nykfsogn.dk%2Fkalender%2Fkoncerter&utm_medium=Widgets"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/tubicorde.webp`}
            showLaesMere={true}
          ></Koncertkort>
        </div>

        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Duo to"
            sted="Hasle Kirke, Kirkegade 4A, 3790, Hasle"
            tid="19. September kl. 19.30-20.30"
            entre={""}
            img={`/images/duoto.webp`}
            showLaesMere={false}
          ></Koncertkort>
        </div>


        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Feminine Cellotoner i MUTE studio"
            sted="MUTE studio, Gaden 21 Årsdale, 3740 Svaneke"
            tid="Tirsdag 16. Juli kl. 19.30"
            entre={"Musik for solo cello af kvindelige komponister. Værker af Andrea Cassaribios, Reena Esmail og Anja Lillemæhlum. Malerier og Keramik: Tilde Lerche Engstrøm."}
            img={`/images/fem_mute.webp`}
            showLaesMere={true}
          ></Koncertkort>
        </div>

        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Duo TubiCorde"
            sted="Nysted Orgelmuseum, Adelgade 30, 4880 Nysted"
            tid="Lørdag 20. Juli kl. 19.30"
            entre={
              <a
                href="https://orgelmuseum.dk/programs/orgelfestival-2024.html#DuoTubiCorde"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Værker af bl.a.: Vasks, Dupré, Rheinberger, Jongen
              </a>
            }
            img={`/images/tubicorde.webp`}
            showLaesMere={true}
          ></Koncertkort>
        </div>
        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Feminine Cellotoner"
            sted="Nylars Kirke"
            tid="Tirsdag 2. Juli kl. 19.30"
            entre={
              <a
                href="https://www.nylarskirke.dk/2024/06/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/feminine.webp`}
            showLaesMere={true}
          ></Koncertkort>
        </div>
        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Værker af Helweg, Kristina Arakelyan og Narverud"
            sted="Rønnebæk Kirke"
            tid="19. juni kl. 19.00"
            entre={
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
              </a>
            }
            img={`/images/bganja1.webp`}
            showLaesMere={true}
          ></Koncertkort>
        </div>

        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Kyndelmissekoncert med Herlufs Vokaler"
            sted="Kirketorvet 14A, 4760 Vordingborg (Vordingborg Kirke)"
            tid="1. februar kl. 19.00"
            entre={
              <a
                href="https://landing.churchdesk.com/da/e/24384568/koncert-med-herlufs-vokaler"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/herlufsvokaler.webp`}
            showLaesMere={true}
          ></Koncertkort>
        </div>

        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Nordic jazztrio"
            sted={
              <a
                href="https://kukihasle.dk/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                KuK i Hasle
              </a>
            }
            tid="29. februar kl 19.30, Hasle"
            entre={
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/anjamono.webp`}
            showLaesMere={false}
          ></Koncertkort>
        </div>

        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Duo Tubi Corde"
            sted="Herlufsholm Kirke"
            tid="10. september kl. 15.00"
            entre={
              <a
                href="https://www.herlufsholmkirke.dk/begivenhed/10-9-2023-koncert-sang-violin-og-orgel-36033"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Læs mere...
              </a>
            }
            img={`/images/karsten.webp`}
          ></Koncertkort>
        </div>

        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Duo Tubi Corde"
            sted="Aakirke, Åkirkeby"
            tid="17. september kl. 15.30"
            entre={
              <a
                href="https://billetto.dk/e/duo-tubicorde-originalmusik-for-orgel-og-cello-billetter-841874"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Bl.a. Musique du Soir af Peteris Vasks, Prière af Saint-Saëns samt Sonate for cello og orgel af Marcel Dupré.
              </a>
            }
            img={`/images/duo.avif`}
          ></Koncertkort>
        </div>
        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Feminine cellotoner"
            sted="Hasle Kirke, Kirkegade 4A, 3790 Hasle"
            tid="21. April kl. 19.30"
            entre="Værker af Bl.a. Andrea Cassarubios, Rena Esmail og Anja Lillemæhlum inspireret af Hildegard von Bingen"
            img={`/images/femininecellotoner.webp`}
          ></Koncertkort>
        </div>
        <h2 className="pb-4 text-lg font-semibold tracking-tight text-black md:text-xl">

        </h2>

        <div className="flex flex-col space-y-8 pb-8">
          <Koncertkort
            title="Koncertcafé med Cecilie Rau"
            sted="Sct. Pauls Kirke, Sct. Pauls Kirkeplads, 8000 Aarhus C"
            tid="Lørdag 10. september kl. 16.00. Fri kaffe/the med tilbehør fra kl. 15.30"
            entre={
              <a
                href="https://www.sctpauls.dk/nyhed/koncertcafe-loerdage-i-september-28333"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Sct. Pauls Kirke
              </a>
            }
            img={`/images/cecilie.webp`}
          ></Koncertkort>
          <Koncertkort
            title="Solo cellokoncert"
            sted="Østermarie Kirke"
            tid="Lørdag 17. September kl. 20:00-21:00"
            entre={
              <a
                href="https://bornholmskulturuge.dk/program-2022/solo-cello-koncert/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Bornholms Kulturuge
              </a>
            }
            img={`/images/kulturuge.webp`}
          ></Koncertkort>
          <Koncertkort
            title="LYDBILLEDER - En familieworkshop"
            sted="MUTE Studio, Gaden 21, Årsdale 3740 Svaneke"
            tid="Søndag 18. september kl. 13.30-15.30"
            entre={
              <a
                href="https://bornholmskulturuge.dk/program-2022/lydbilleder/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Bornholms Kulturuge
              </a>
            }
            img={`/images/lydbilleder.webp`}
          ></Koncertkort>
          <Koncertkort
            title="Trio Solkyst"
            sted="Aakirke, Åkirkeby"
            tid="Mandag 19. september kl. 19.30-21.00"
            entre={
              <a
                href="https://bornholmskulturuge.dk/program-2022/trio-solkyst/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Bornholms Kulturuge
              </a>
            }
            img={`/images/triosolkyst.webp`}
          ></Koncertkort>
          <Koncertkort
            title="FINAL CONCERT of Bornholm-Saaremaa Culture Festival"
            sted="Skt. Nicolai Kirke, Kirkepladsen 20, 3700 Rønne"
            tid="Søndag 25. september kl. 14.00-15.30"
            entre={
              <a
                href="https://bornholmskulturuge.dk/program-2022/final-concert-of-bornholm-saaremaa-culture-festival/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Bornholms Kulturuge
              </a>
            }
            img={`/images/kammerorkester.webp`}
          ></Koncertkort>
        </div>
        <div className="flex flex-col space-y-8">
          <Koncertkort
            title="Dreamers cirkus og DR&#39;s børnekor fortolker danske børnesange"
            sted="DR Byen"
            tid="Søndag 5. Juni kl. 15:00"
            entre={
              <a
                href="https://drkoncerthuset.dk/event/langt-ud-i-skoven/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                DR koncerthuset
              </a>
            }
            img={`/images/dreamers.webp`}
          ></Koncertkort>
        </div>
      </div>
    </Container>
  )
}

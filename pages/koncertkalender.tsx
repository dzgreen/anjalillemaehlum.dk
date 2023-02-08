import Container from "components/Container"
import Koncertkort from "components/Koncertkort"

export default function Koncertkalender({ koncertkalender }) {
  return (
    <Container title="Koncertkalender">
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          Koncertkalender
        </h1>
        <h2 className="pb-4 text-lg font-semibold tracking-tight text-black md:text-xl">
          Kommende koncerter
        </h2>

        <h2 className="pb-4 text-lg font-semibold tracking-tight text-black md:text-xl">
          Tidligere koncerter
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

import Container from "components/Container"
import Koncertkort from "components/Koncertkort"

export default function Koncertkalender({ koncertkalender }) {
  return (
    <Container title="Koncertkalender">
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          Koncertkalender
        </h1>
        <div className="flex flex-col space-y-8">
          <Koncertkort
            title="Solo cellokoncert"
            sted="Østermarie Kirke"
            tid="Lørdag 17. September kl 20:00-21:00"
            entre={
              <a
                href="https://bornholmskulturuge.dk/om-kulturugen/"
                target="_blank"
                rel="noreferrer"
              >
                Bornholms Kulturuge
              </a>
            }
            img="/kulturuge.jpg"
          ></Koncertkort>

          <Koncertkort
            title="Dreamers cirkus og DR‘s børnekor fortolker danske børnesange"
            sted="DR Byen"
            tid="Søndag 5. Juni kl 15:00"
            entre={
              <a
                href="https://drkoncerthuset.dk/event/langt-ud-i-skoven/"
                target="_blank"
                rel="noreferrer"
              >
                DR koncerthuset
              </a>
            }
            img="/dreamers.jpg"
          ></Koncertkort>
        </div>
      </div>
    </Container>
  )
}

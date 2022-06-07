import Container from "../components/Container"

export default function Undervisning({ undervisning }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-between">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          Undervisning
        </h1>

        <div className="max-w-none leading-6 text-gray-600 ">
          <p>
            Jeg underviser for tiden i cello, sammenspil og kor både på
            Bornholms Kulturskole og privat her i Lillemæhlum Musik. At se det
            enkelte barn udvikle sig musikalsk, ligger mig meget på hjerte.
            Korfællesskab og den umiddelbare sangglæde for børn, brænder jeg
            meget for og har netop fuldført en efteruddannelse i børnekorledelse
            hos Susanne Wendt fra DR Børnekors Akademi.
          </p>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}

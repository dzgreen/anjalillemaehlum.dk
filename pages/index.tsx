import Container from "../components/Container"
import Image from "next/image"
import bganja from "../public/bganja1.jpg"

export default function Home({ home }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-between">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black md:text-5xl">
          Anja Lillemæhlum
        </h1>
        <h2 className="pb-4 text-lg font-semibold tracking-tight text-black md:text-xl">
          Cellist, komponist og underviser
        </h2>
        <div className="w-full max-w-3xl">
          <Image
            src={bganja}
            alt="Picture of the author"
            className="rounded-md"
            priority
          />
        </div>
        <div className="prose max-w-none leading-6 text-gray-600 ">
          <figure>
            <blockquote className="text-gray-600 ">
              Sammenspillet med pianisten Kati Arikoski var blændende og
              suverænt. [...] Detbutkoncertens overskrift hed Den Stille Røst. I
              programmet beskriver Anja Lillemæhlum den filosofiske baggrund for
              titlen - i praksis som koncerten formede sig, var det en myndig
              røst, som jeg vil glæde mig til at høre igen.
            </blockquote>

            <figcaption className="text-right">
              —Lars Kristian Hansen, Fyens Kultur
            </figcaption>
          </figure>
          <figure>
            <blockquote className="text-gray-600 ">
              Tanja Zapolski og Anja Lillemæhlum spillede et utrolig spændende
              program fra forskellige tidsperioder i et meget sublimt samspil,
              med både vildskab, ro og fordybelse. Det var spændende og
              fængslende at lytte til musikken!
            </blockquote>

            <figcaption className="text-right">
              —Robert Wilbrandt, Musikforeningen Bornholm
            </figcaption>
          </figure>
        </div>
        <span className="h-16" />
      </div>
    </Container>
  )
}

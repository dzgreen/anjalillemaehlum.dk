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
        <h2 className="text-lg font-semibold tracking-tight text-black md:text-xl">
          Cellist, komponist og underviser
        </h2>

        <div className="prose max-w-none leading-6 text-gray-600 ">
          <p className="text-gray-600 ">
            <figure>
              <blockquote cite="Hvem sagde det"></blockquote>
            </figure>
            <figure>
              <blockquote>
                Sammenspillet med pianisten Kati Arikoski var blændende og
                suverænt. [...] Detbutkoncertens overskrift hed "Den stille
                røst". I programmet beskriver Anja Lillemæhlum den filosofiske
                baggrund for titlen - i praksis som koncerten formede sig, var
                det en myndig røst, som jeg vil glæde mig til at høre igen.
              </blockquote>

              <figcaption className="text-right">
                —Lars Kristian Hansen, <cite>Fyens Kultur</cite>
              </figcaption>
            </figure>
          </p>
          <div className="w-full max-w-3xl">
            <Image
              src={bganja}
              alt="Picture of the author"
              className="rounded-md"
              priority
            />
          </div>
          <h2 className="pt-2 text-lg font-semibold tracking-tight text-black md:text-xl">
            Bio
          </h2>
          <p className="text-gray-600 ">
            Anja begyndte som 17 årig på konservatoriet i København. Der
            studerede hun hos Morten Zeuthen, og spillede sidenhen også hos
            Miroslav Petrás i Tjekkiet og hos Henrik Dam Thomsen. Anja
            debuterede i 2015 fra solistklassen i Odense, med Niels Ullner som
            professor og har efterfølgende spillet flere værker som solist med
            Kammerkoret Herlufs vokaler, og kammermusikkoncerter med bl.a.
            pianisten Tanja Zapolski og Kati Arikosky.
          </p>
          <p className="text-gray-600 ">
            Anja er en meget alsidig musiker. Hun spiller bl.a solokoncerter med
            ny kompositionsmusik og Bach, kammermusikkoncerter, har medvirket på
            en lang række pop/world musik albums som cellist samt arbejdet med
            forskellige dansere, skuespillere og bands. Anja har både sin gang i
            det klassiske, folkemusikalske og skriver også selv musik.
          </p>
          <p className="text-gray-600 ">
            I 2022 spillede Anja, sammen med Dreamers Cirkus og DR s børnekor,
            til koncerten, Langt ud´i skoven. Støttet af Slots - og
            Kulturstyrelsen turnerede hun og organisten Anders Forsberg Svendsen
            med et klassisk program for orgel/klaver og cello, sensommeren 2021.
            I 2020 udgav hun sit første Album med egne meditative kompositioner:
            “In your peace”. Anja har arbejdet sammen med sopranen Annemette
            Phødenfandt om nymusikprojektet Vinterum og Ensemble Dísir. Hun har
            spillet flere forestillinger på Det Ny teater, og bl.a assisteret i
            Radiosymfoniorkesteret og Copenhagen Phil. Af
            musikformidligsprojekter kan nævnes LYDBILLEDER med billedkunstneren
            Tilde Engstrøm, støttet af Statens Kunstfond.… I samarbejde med Hope
            Now lavede hun en støttekoncert for handlede kvinder og med
            fotografen Martin Thaulow gav hun flygtningeportrætter en lydside i
            udstilllingen Reimagine.
          </p>
        </div>
        <span className="h-16" />
      </div>
    </Container>
  )
}

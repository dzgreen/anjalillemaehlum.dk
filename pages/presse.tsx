import Container from "../components/Container"
import Image from "next/image"

export default function Om({ om }) {
  return (
    <Container title="Bio">
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-between">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          Bio
        </h1>

        <div className="prose mb-8 max-w-none leading-6 text-gray-600 ">
          <p className="text-gray-600 ">
            Efter at have spillet <em>Kol Nidrei</em> som solist med nogle ungdomssymfoniorkestre begyndte Anja som 17-årig på Musikkonservatoriet i København. Her studerede hun hos Morten Zeuthen og tog sideløbende timer hos bl.a. Miroslav Petráš i Tjekkiet og Henrik Dam Thomsen fra DR’s Symfoniorkester.
          </p>

          <p className="text-gray-600 ">
            Anja debuterede i 2015 fra solistklassen i Odense med Niels Ullner som professor og har efterfølgende spillet flere værker som solist med bl.a. Kammerkoret Herlufs Vokaler samt kammermusikkoncerter med bl.a. pianisten Tanja Zapolski og Kati Arikosky.
          </p>

          <p className="text-gray-600 ">
            Anja har bl.a. assisteret i Radiosymfoniorkesteret, Copenhagen Phil og Aalborg Symfoniorkester. Hun har spillet flere forestillinger på Det Ny Teater og har ledet cellogruppen samt været førstecellist i symfoniorkestret Orquesta Sinfónica del Cusco i den periode, hun boede i Peru.
          </p>

          <p className="text-gray-600 ">
            Anja er også en meget alsidig musiker. Hun spiller bl.a. solokoncerter med ny kompositionsmusik og Bach, kammermusikkoncerter, har medvirket på en lang række pop-/worldmusik-album som cellist samt arbejdet med forskellige dansere, forfattere, skuespillere og bands. Anja har både sin gang i det klassiske, det folkemusikalske og det mere jazzede – og hun skriver også selv musik.
          </p>

          <p className="text-gray-600 ">
            I 2025 udgav Anja under sit eget label, LIMU Records, en lille samling nyere musik for kor og cello: <em>Songs of Hope</em>. Med Duo Gaudia spillede hun flere koncerter med både original musik for cello og guitar samt egne arrangementer – musik fra de varmere himmelstrøg.
          </p>

          <p className="text-gray-600 ">
            2023–2024 bød på flere koncerter med duoen TubiCorde: originalmusik for orgel og cello med organisten Karsten Gyldendorf.
          </p>

          <p className="text-gray-600 ">
            I 2022 spillede Anja sammen med Dreamers’ Circus og DR’s Børnekor til koncerten <em>Langt ud i skoven</em>.
          </p>

          <p className="text-gray-600 ">
            Støttet af Slots- og Kulturstyrelsen turnerede hun og organisten Anders Forsberg Svendsen med et klassisk program for orgel/klaver og cello i sensommeren 2021.
          </p>

          <p className="text-gray-600 ">
            I 2020 udgav hun sit første album med egne meditative kompositioner: <em>In Your Peace</em>.
          </p>

          <p className="text-gray-600 ">
            Anja har arbejdet sammen med sopranen Annemette Phødenfandt om nymusikprojektet <em>Vinterum</em> og Ensemble Dísir.
          </p>

          <p className="text-gray-600 ">
            Af musikformidlingsprojekter kan nævnes <em>LYDBILLEDER</em> med billedkunstneren Tilde Engstrøm, støttet af Statens Kunstfond.
          </p>

          <p className="text-gray-600 ">
            I samarbejde med Hope Now lavede hun en støttekoncert for kvinder udsat for menneskehandel, og sammen med fotografen Martin Thaulow gav hun flygtningeportrætter en lydside i udstillingen <em>Reimagine</em>.
          </p>

        </div>
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          Pressebilleder
        </h1>
        <div className="space-y-4">
          <div>
            <Image
              src={`/images/anjapresse.webp`}
              alt="Anja med cello"
              className="rounded-md"
              height={512}
              width={768}
            />
          </div>
          <div>
            <Image
              src={`/images/anjapresse2.webp`}
              alt="Anja med cello"
              className="rounded-md"
              height={512}
              width={768}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

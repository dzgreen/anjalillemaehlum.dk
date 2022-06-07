import Container from "../components/Container"

export default function Privatlivspolitik({ privatlivspolitik }) {
  return (
    <Container title="Privatlivspolitik">
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-between">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          Privatlivspolitik
        </h1>

        <div className="prose mb-8 max-w-none leading-6 text-gray-600 ">
          <p>Intet behov for cookies på denne hjemmeside 🍪.</p>
        </div>
      </div>
    </Container>
  )
}

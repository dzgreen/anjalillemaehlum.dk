import Container from "../components/Container"

export default function Colofon({ colofon }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-between">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          Colofon
        </h1>

        <div className="prose max-w-none leading-6 text-gray-600 ">
          <p>
            This website uses code kindly shared by Lee Robinson on{" "}
            <a
              href="https://github.com/leerob/leerob.io"
              target="_blank"
              rel="noreferrer"
              className=""
            >
              Github
            </a>
          </p>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}

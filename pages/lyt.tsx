import Container from "../components/Container"

export default function Lyt({ lyt }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-between">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          Lyt
        </h1>

        <div className="prose max-w-none pb-8 leading-6 text-gray-600">
          <p>
            Du kan lytte til min musik på{" "}
            <a
              href="https://open.spotify.com/artist/2o1cMinTyNMpfjLsSYePFx?si=X3wOgWzlRt6rhuw6VY2IEQ"
              target="_blank"
              rel="noreferrer"
            >
              Spotify
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/channel/UCtHWKjv5wnTDCMTIb7n79fw/videos"
              target="_blank"
              rel="noreferrer"
            >
              Youtube
            </a>{" "}
            og{" "}
            <a
              href="https://soundcloud.com/anja-lillemaehlum/tracks"
              target="_blank"
              rel="noreferrer"
            >
              Soundcloud
            </a>
            .
          </p>
          <p>Nyere musik for kor og cello.</p>
        </div>




        <div className="flex w-full flex-col space-y-4">
          <iframe
            className="aspect-video rounded-md"
            src="https://www.youtube-nocookie.com/embed/HhGan2q7JCM?rel=0"
          ></iframe>
          <iframe
            className="aspect-video rounded-md"
            src="https://www.youtube-nocookie.com/embed/gSniaI3bDFI?rel=0"
          ></iframe>
          <iframe
            className="aspect-video rounded-md"
            src="https://www.youtube-nocookie.com/embed/6twG29znGMs?rel=0"
          ></iframe>

          <iframe
            className="aspect-video rounded-md"
            src="https://www.youtube-nocookie.com/embed/lEz2DIuXiV4?rel=0"
          ></iframe>

          <iframe
            className="aspect-video rounded-md"
            src="https://www.youtube-nocookie.com/embed/JW3JdegFLpQ?rel=0"
          ></iframe>
          <iframe
            className="aspect-video rounded-md"
            src="https://www.youtube-nocookie.com/embed/yiTuqMm2Sbs?rel=0"
          ></iframe>
          <iframe
            className="aspect-video rounded-md"
            src="https://www.youtube-nocookie.com/embed/qtPtUBJDCVw?rel=0"
          ></iframe>
          <iframe
            className="aspect-video rounded-md"
            src="https://www.youtube-nocookie.com/embed/QGD1x1D1Ano?rel=0"
          ></iframe>
        </div>
        <span className="h-16" />
      </div>
    </Container>
  )
}

import Container from "../components/Container"
import Obfuscate from "react-obfuscate"

export default function Kontakt({ contakt }) {
  return (
    <Container>
      <div className="mx-auto mb-16 flex w-full max-w-3xl flex-col items-start justify-between">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          Kontakt
        </h1>

        {/* <div className="max-w-none leading-6 text-gray-600 ">
          <p className="pb-4">
            Jeg er bosidende på Bornholm, men spiller gerne på hele kloden 🌎.
          </p>
        </div> */}

        <div className="flex w-full flex-col space-y-2">
          <div className="flex w-full text-gray-600 ">
            <div className="w-2/5 text-gray-300 md:w-1/5">Mobil:</div>
            <div className="w-3/5">+45 28898891</div>
          </div>

          <div className="flex w-full text-gray-600 ">
            <div className="w-2/5 text-gray-300 md:w-1/5">Email:</div>
            <div className="w-3/5">
              <h1>
                <Obfuscate
                  email="anjalillemh@icloud.com"
                  className="text-gray-600 transition hover:underline "
                />
              </h1>
            </div>
          </div>
          <div className="flex w-full text-gray-600 ">
            <div className="w-2/5 text-gray-300 md:w-1/5">CVR:</div>
            <div className="w-3/5">42707864</div>
          </div>
          <div className="flex w-full text-gray-600 ">
            <div className="w-2/5 text-gray-300 md:w-1/5">Konto:</div>
            <div className="w-3/5">6695-1005466934</div>
          </div>
          <div className="flex w-full text-gray-600 ">
            <div className="w-2/5 text-gray-300 md:w-1/5">Facebook:</div>
            <div className="w-3/5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/Anja-Lillem%C3%A6hlum-111105941342837"
              >
                Anja Lillemæhlum
              </a>
            </div>
          </div>
        </div>

        <span className="h-16" />
      </div>
    </Container>
  )
}

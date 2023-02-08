import Image from "next/image"

export default function Koncertkort(props) {
  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-sm bg-white shadow-md">
      <div className="w-full md:flex">
        <div className="md:shrink-0">
          <Image
            className="h-48 w-full object-cover object-top md:h-full md:w-48"
            src={props.img}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="w-full p-4">
          <div className="text-sm font-semibold uppercase tracking-wide text-green-800">
            {props.trompet}
          </div>
          <div className="mt-1 block text-lg font-medium leading-tight text-black">
            {props.title}
          </div>
          <div className="py-6">
            <div className="space-y-1  text-gray-600 ">
              <div className="flex flex-col md:flex-row">
                <div className="font-medium  md:w-1/5 md:font-normal">
                  Sted:
                </div>

                <div className="text-sm md:w-4/5 md:text-base">
                  {props.sted}
                </div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="font-medium  md:w-1/5 md:font-normal">Tid:</div>
                <div className="text-sm md:w-4/5 md:text-base">{props.tid}</div>
              </div>
              <div className="flex flex-col md:flex-row">
                <div className="font-medium  md:w-1/5 md:font-normal">
                  Læs mere:
                </div>
                <div className="text-sm underline md:w-4/5 md:text-base">
                  {props.entre}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

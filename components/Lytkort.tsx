import Link from "next/link"

export default function Lytkort({ title, description, slug }) {
  return (
    <Link href={`/lyt/${slug}`}>
      <a className="rounded-xl bg-white p-10 shadow-md transition hover:shadow-lg">
        <div className="mt-4">
          <h3 className="text-lg font-medium text-black ">{title}</h3>
          <p className="mt-2 text-base font-medium text-gray-500 ">
            {description}
          </p>
        </div>
      </a>
    </Link>
  )
}

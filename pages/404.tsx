import Link from "next/link"

import Container from "components/Container"

export default function NotFound() {
  return (
    <Container title="404 – Siden findes ikke">
      <div className="mx-auto mb-16 flex max-w-3xl flex-col items-start justify-center">
        <h1 className="pb-8 text-3xl font-bold tracking-tight text-black  md:text-5xl">
          404 – Siden findes ikke
        </h1>
        <p className="mb-8 text-gray-600 ">Siden findes ikke.</p>
        <Link
          href="/"
          className="mx-auto w-64 rounded-md bg-gray-200 p-1 text-center font-bold text-black sm:p-4">
          
            Return Home
          
        </Link>
      </div>
    </Container>
  );
}

import Link from "next/link"
import ExternalLink from "./ExternalLink"

export default function Footer() {
  return (
    <footer className="bg-gray-50 ">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-start justify-center">
        <hr className="border-1 w-full border-gray-200" />
        <div className="w-full max-w-3xl py-2">
          <div className="flex h-4 justify-center space-x-4 text-sm">
            <Link href="/privacy" className="text-gray-600 transition hover:underline ">
              
                Privatlivspolitik
              
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

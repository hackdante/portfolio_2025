import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col items-center">
        <span className="text-center text-7xl">KENSAI</span>
        <Link href={`/sobre-nosotros`}>Nos encanta el software y la innovación</Link>
      </main>
    </>
  );
}

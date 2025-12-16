import Image from "next/image";

export function StaticPageLoader() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black/90">
      <div className="flex flex-col items-center gap-6 text-white">
        <div className="mb-4">
          <Image
            src="/images/light--logo-md.png"
            width={120}
            height={120}
            priority
            alt={`Kensai | Software`}
            style={{ width: "auto", height: "auto" }}
          />
        </div>

        <span className="text-xl">Conectando página...</span>
      </div>
    </div>
  );
}

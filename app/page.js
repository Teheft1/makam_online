import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold text-center text-gray-900">
        Makam Online
      </h1>
      <p className="mt-3 text-2xl text-center text-gray-900">
        Ayo segera agendakan kematiannya
      </p>
    </div>
  );
}

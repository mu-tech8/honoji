import Link from "next/link";

export default function Profile() {
  return (
    <>
      <div className="bg-blue-50 bg-opacity-40 ">
        <header>
          <nav>
            <ul className="flex justify-end p-4 text-sm">
              <li className="mx-2 text-gray-400 hover:text-gray-600 duration-200">
                <Link href="/">Home</Link>
              </li>
              <li className="mx-2 text-gray-400 hover:text-gray-600 duration-200">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="mx-2 text-gray-400 hover:text-gray-600 duration-200">
                <Link href="https://www.instagram.com/_249cm/">Instagram</Link>
              </li>
            </ul>
          </nav>
        </header>
        <div className="flex flex-col items-center pt-10">
          <div className="text-gray-500 font-sans">さとう　ほなつ</div>
          <p className="text-xs text-gray-400 text-center mt-6">
            自己紹介あればここに
            <br />
            書きます。
          </p>
          <h2 className="my-16 md:my-28 text-center">Works</h2>
        </div>
      </div>
    </>
  );
}

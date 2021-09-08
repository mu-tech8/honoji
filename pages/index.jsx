import Link from "next/link";
import { client } from "../libs/client";
import Image from "next/image";

export default function Home({ painting }) {
  return (
    <>
      <div className="bg-blue-50 bg-opacity-40">
        <header>
          <nav>
            <ul className="flex justify-end p-4 text-sm">
              <li className="mx-2 text-gray-400 hover:text-gray-600 duration-200">
                <Link href="/">Home</Link>
              </li>
              <li className="mx-2 text-gray-400 hover:text-gray-600 duration-200">
                <Link href="./profile">Profile</Link>
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
            生まれ育った小さな港町を素材に
            <br />
            「この世にあって欲しいもの」を作っています。
          </p>
          <h2 className="my-16 md:my-28 text-center">Works</h2>
        </div>
        <div className="">
          <ul className="flex flex-wrap justify-center items-center">
            {painting.map((painting) => (
              <li key={painting.id} className="p-2">
                <Image
                  alt={"Painting of the author"}
                  src={painting.image.url}
                  width={440}
                  height={320}
                  layout={"intrinsic"}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "painting" });

  return {
    props: {
      painting: data.contents,
    },
  };
};

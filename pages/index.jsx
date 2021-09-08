import Link from "next/link";
import { client } from "../libs/client";
import Image from "next/image";

export default function Home({ painting }) {
  return (
    <div>
      <div>さとう　ほなつ</div>
      <p>
        生まれ育った小さな港町を素材に「この世にあって欲しいもの」を作っています。
      </p>
      <ul>
        <li>
          <Link href="https://www.instagram.com/_249cm/">Profile</Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/_249cm/">Instagram</Link>
        </li>
      </ul>
      <ul>
        {painting.map((painting) => (
          <Image
            key={painting.id}
            alt={"Painting of the author"}
            src={painting.image.url}
            width={500}
            height={500}
          />
        ))}
      </ul>
    </div>
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

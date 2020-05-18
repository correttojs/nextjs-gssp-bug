import Link from "next/link";

export default function Page2(props) {
  console.log(`rendering ${props.name}`);
  return (
    <div>
      <p>{props.name}</p>
      <Link href="/page2">
        <a>Page2</a>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      name: "Page2",
    },
  };
}

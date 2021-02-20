import Head from "next/head";
import Layouts from "../components/Layouts";
import Dashboard from "../components/dashboard/Dashboard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Advotics Web Dev Assignment</title>
        <link rel="icon" href="/advotics-favicon.png" />
      </Head>
      <Layouts>
        <Dashboard />
      </Layouts>
    </div>
  );
}

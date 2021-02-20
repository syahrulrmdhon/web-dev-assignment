import Head from "next/head";
import Layouts from "../components/Layouts";
import Dashboard from "../components/dashboard/Dashboard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layouts>
        <Dashboard />
      </Layouts>
    </div>
  );
}

import Head from "next/head";

function HomePage() {
  return (
    <div>
      <Head>
        <title>Quiz Up</title>
        <meta name="description" content="Online Quiz App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="p-12">Quiz Up Home Page</h1>
    </div>
  );
}

export default HomePage;

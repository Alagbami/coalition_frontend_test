import Head from 'next/head';
import MainContent from './components/MainContent';

function HomePage() {
  return (
    <div className="container">
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="A simple Next.js app" />
      </Head>
      <MainContent />
    </div>
  );
}

export default HomePage;
import './globals.css';
import Footer from './components/Shared/Footer';
import Header from '@app/components/Layout/Header';

/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Code&Craft | Online Coding and Robotics classes</title>
        <meta
          name="description"
          content="Robotics and Coding curriculums - Project-Based Learning for a Better Tomorrow"
        />
      </head>
      <body className="text-blue-site bg-white">
        {process.env.NEXT_PUBLIC_WIX_CLIENT_ID ? (
          <>
            <Header />
            <main className="bg-white mt-[81px] min-h-[600px]">{children}</main>
            <Footer />
          </>
        ) : (
          <div className="bg-white min-h-[600px] max-w-5xl mx-auto p-5">
            <p>
              Page not available. Please add an environment variable called
              NEXT_PUBLIC_WIX_CLIENT_ID, containing the client ID, to your
              deployment provider.
            </p>
          </div>
        )}
      </body>
    </html>
  );
}

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Creed</title>
        <meta name="description" content="Can you take me higher?!" />
        <meta
          name="keywords"
          content="creed, solana, cryptocurrency, token, meme"
        />
        <meta name="author" content="Creed" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="index, follow" />
        <meta name="og:title" content="Creed" />
        <meta name="og:description" content="Can you take me higher?!" />
        <meta name="og:image" content="/creed.png" />
        <meta name="og:url" content="https://creedtokensolami.xyz" />
        <meta name="og:site_name" content="Creed" />
        <meta name="og:locale" content="en_US" />
        <meta name="og:type" content="website" />
        <meta name="og:author" content="Creed" />
        <meta name="og:site_name" content="Creed" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@creed_token_sol" />
        <meta name="twitter:creator" content="@creed_token_sol" />
        <meta name="twitter:title" content="Creed" />
        <meta name="twitter:description" content="Can you take me higher?!" />
        <meta name="twitter:image" content="/og-image.png" />
        <meta name="twitter:url" content="https://creedtokensolami.xyz" />
      </Head>

      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Contract Address:&nbsp;
            <code className="font-mono font-bold">
              creedYCqY4bRNvnR3eRw3Np61EWMXL2RZFqRNhfSUNw
            </code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <Link
              href="https://twitter.com/creed_token_sol"
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/creed.png"
                alt="Creed Logo"
                width={100}
                height={24}
                priority
              />
            </Link>
          </div>
        </div>

        <div className="relative flex place-items-center">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/creed.png"
            alt="Creed Logo"
            width={375}
            height={375}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href="https://twitter.com/creed_token_sol"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Twitter{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Follow us on Twitter to get the latest news and updates.
            </p>
          </Link>

          <Link
            href="https://t.co/nftxUsiVBP"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Telegram{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              We welcome you to the Telegram with arms wide open. I heard that
              Creed themselves are in there...
            </p>
          </Link>

          <Link
            href="https://jup.ag/swap/SOL-CREED_creedYCqY4bRNvnR3eRw3Np61EWMXL2RZFqRNhfSUNw"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Buy{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              You can take us higher by buying some Creed.
            </p>
          </Link>

          <Link
            href="https://birdeye.so/token/creedYCqY4bRNvnR3eRw3Np61EWMXL2RZFqRNhfSUNw?chain=solana"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Chart{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Check price, good price.
            </p>
          </Link>
        </div>
      </main>
    </>
  );
}

import type { NextPage } from "next";

const Faucet: NextPage = () => {
  return (
    <>
      <div className="text-center mt-8 p-10 w-full">
        <h1 className="text-4xl my-0">Fund Your Wallet</h1>

        {/* Second Flexbox Container (now first) */}
        <div className="max-w-[60rem] w-full p-6 bg-secondary shadow-lg mt-[3rem] mx-auto">
          <h2 className="text-2xl mb-4">Mainnet Sepolia Faucets</h2>
          <ul className="flex flex-row flex-wrap space-x-4 items-center justify-center">
            <li className="bg-white rounded-[0.813rem] p-4 shadow-md">
              <a
                href="https://sepoliafaucet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Sepolia Faucet
              </a>
            </li>
            <li className="bg-white rounded-[0.813rem] p-4 shadow-md">
              <a
                href="https://arbitrum.faucet.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Arbitrum Faucet
              </a>
            </li>
            <li className="bg-white rounded-[0.813rem] p-4 shadow-md">
              <a
                href="https://www.infura.io/faucet/sepolia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Infura Sepolia Faucet
              </a>
            </li>
            <li className="bg-white rounded-[0.813rem] p-4 shadow-md">
              <a
                href="https://sepolia-faucet.pk910.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Another Sepolia Faucet
              </a>
            </li>
          </ul>
        </div>

        {/* Paragraph in between the two containers */}
        <p className="mt-6 text-lg">
          You can bridge your Mainnet ETH Sepolia tokens to Arbitrum Sepolia using the bridge.
        </p>

        {/* First Flexbox Container (now second) */}
        <div className="max-w-[60rem] w-full p-6 bg-secondary shadow-lg mt-[3rem] mx-auto">
          <h2 className="text-2xl mb-4">Arbitrum Bridge</h2>
          <ul className="flex flex-row flex-wrap space-x-4 items-center justify-center">
            <li className="bg-white rounded-[0.813rem] p-4 shadow-md">
              <a
                href="https://bridge.arbitrum.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Arbitrum Bridge
              </a>
            </li>
          </ul>
        </div>

        <p className="mt-6 text-lg">Or...</p>

        {/* Third Flexbox Container */}
        <div className="max-w-[60rem] w-full p-6 bg-secondary shadow-lg mt-[3rem] mx-auto">
          <h2 className="text-2xl mb-4">Claim ETH Sepolia directly to Arbitrum Sepolia.</h2>
          <ul className="flex flex-row flex-wrap space-x-4 items-center justify-center">
            <li className="bg-white rounded-[0.813rem] p-4 shadow-md">
              <a
                href="https://faucet.quicknode.com/arbitrum/sepolia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                QuickNode Arbitrum Faucet
              </a>
            </li>
            <li className="bg-white rounded-[0.813rem] p-4 shadow-md">
              <a
                href="https://www.l2faucet.com/arbitrum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                L2 Faucet for Arbitrum
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Faucet;

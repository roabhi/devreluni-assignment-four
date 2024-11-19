"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
          <p className="my-2 font-medium">Connected Address:</p>
          <Address address={connectedAddress} />
        </div>

        <div className="flex-grow bg-base-300 w-full mt-16 px-8 py-12 flex flex-col justify-center items-center">
          {/* Logo Image */}
          <div className="flex justify-center mb-4">
            <Image
              src="/stylus_logo.png" // Path to your image in the public folder
              alt="Stylus Logo"
              width={200} // Set the desired width
              height={200} // Set the desired height
            />
          </div>

          {/* Purpose Description */}
          <p className="text-center text-lg w-full max-w-[25rem]">
            This webpage demonstrates how easy it is to interact with Stylus deployed contracts on Arbitrum using
            Scaffold-ETH.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;

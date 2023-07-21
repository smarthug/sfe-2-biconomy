// import { BiconomySmartAccount, BiconomySmartAccountConfig } from "@biconomy/account";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { BiconomySmartAccount, BiconomySmartAccountConfig, DEFAULT_ENTRYPOINT_ADDRESS } from "@biconomy/account";
import { Bundler, IBundler } from "@biconomy/bundler";
import { ChainId } from "@biconomy/core-types";
import { BiconomyPaymaster, IPaymaster } from "@biconomy/paymaster";
import SocialLogin from "@biconomy/web3-auth";
import { ethers } from "ethers";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const DynamicHeader = dynamic(() => import("~~/components/Auth"), {
  ssr: false,
});

const Test: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <h1>Test</h1>
      <DynamicHeader />
    </>
  );
};

export default Test;

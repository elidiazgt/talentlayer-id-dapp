import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { Contract, ethers } from 'ethers';
import React, { useEffect, useMemo, useState } from 'react';
import { config } from '../config/app';
import TalentLayerIDABI from '../contracts/TalentLayerID.json';

const TalentLayerContext = React.createContext<{
  talentLayerId: string | null;
}>({
  talentLayerId: null,
});

const TalentLayerProvider: React.FC = props => {
  const { account, library } = useWeb3React<Web3Provider>();
  const [talentLayerId, setTalentLayerId] = useState<string | null>(null);

  useEffect(() => {
    if (!library || !account) {
      return;
    }

    (async () => {
      const signer = library.getSigner(account);
      const talentLayerID = new Contract(config.talentLayerIdAddress, TalentLayerIDABI.abi, signer);
      console.log({
        account,
        talentLayerID,
        signer,
        abi: TalentLayerIDABI.abi,
      });
      const numberMinted = (await talentLayerID.numberMinted(account)).toString();
      const id = (await talentLayerID.walletOfOwner(account)).toString();
      console.log({
        numberMinted,
        id,
      });

      setTalentLayerId(id);
    })();
  }, [library, account]);

  const value = useMemo(() => {
    return {
      talentLayerId,
    };
  }, [talentLayerId]);

  return <TalentLayerContext.Provider value={value}>{props.children}</TalentLayerContext.Provider>;
};

export { TalentLayerProvider };

export default TalentLayerContext;

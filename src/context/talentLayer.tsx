import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { Contract, ethers } from 'ethers';
import React, { useEffect, useMemo, useState } from 'react';
import { config } from '../config/app';
import TalentLayerIDABI from '../contracts/TalentLayerID.json';
import MockProofOfHumanity from '../contracts/MockProofOfHumanity.json';

const TalentLayerContext = React.createContext<{
  talentLayerId: string | null;
  talentLayerHandle: string | null;
  isRegisterToPoh: boolean | null;
}>({
  talentLayerId: null,
  talentLayerHandle: null,
  isRegisterToPoh: null,
});

const TalentLayerProvider: React.FC = props => {
  const { account, library } = useWeb3React<Web3Provider>();
  const [talentLayerId, setTalentLayerId] = useState<string | null>(null);
  const [talentLayerHandle, setTalentLayerHandle] = useState<string | null>(null);
  const [isRegisterToPoh, setIsRegisterToPoh] = useState<boolean | null>(null);

  useEffect(() => {
    if (!library || !account) {
      return;
    }

    (async () => {
      const signer = library.getSigner(account);
      const talentLayerID = new Contract(config.talentLayerIdAddress, TalentLayerIDABI.abi, signer);
      const id = (await talentLayerID.walletOfOwner(account)).toString();
      const handle = (await talentLayerID.handles(id)).toString();

      const poh = new Contract(config.proofOfHumanityAddress, MockProofOfHumanity.abi, signer);
      const isRegister = await poh.isRegistered(account);

      setTalentLayerId(id);
      setTalentLayerHandle(handle);
      setIsRegisterToPoh(isRegister);
    })();
  }, [library, account]);

  const value = useMemo(() => {
    return {
      isRegisterToPoh,
      talentLayerId,
      talentLayerHandle,
    };
  }, [isRegisterToPoh, talentLayerId, talentLayerHandle]);

  return <TalentLayerContext.Provider value={value}>{props.children}</TalentLayerContext.Provider>;
};

export { TalentLayerProvider };

export default TalentLayerContext;

import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { Contract } from '@ethersproject/contracts';
import { Signer } from 'ethers';
import React, { useEffect, useMemo, useState } from 'react';
import { config } from '../config/app';
import TalentLayerIDABI from '../contracts/TalentLayerID.json';
import MockProofOfHumanity from '../contracts/MockProofOfHumanity.json';

const TalentLayerContext = React.createContext<{
  talentLayerId: string | null;
  talentLayerHandle: string | null;
  isRegisterToPoh: boolean | null;
  signer: Signer | null;
}>({
  talentLayerId: null,
  talentLayerHandle: null,
  isRegisterToPoh: null,
  signer: null,
});

const TalentLayerProvider: React.FC = ({ children }) => {
  const { account, library } = useWeb3React<Web3Provider>();
  const [talentLayerId, setTalentLayerId] = useState<string | null>(null);
  const [talentLayerHandle, setTalentLayerHandle] = useState<string | null>(null);
  const [isRegisterToPoh, setIsRegisterToPoh] = useState<boolean | null>(null);
  const [signer, setSigner] = useState<any>(null);

  useEffect(() => {
    if (!library || !account) {
      return;
    }

    (async () => {
      const currentSigner = library.getSigner(account);
      const talentLayerIDContract = new Contract(
        config.talentLayerIdAddress,
        TalentLayerIDABI.abi,
        currentSigner,
      );
      const id = (await talentLayerIDContract.walletOfOwner(account)).toString();
      const handle = (await talentLayerIDContract.handles(id)).toString();

      const poh = new Contract(
        config.proofOfHumanityAddress,
        MockProofOfHumanity.abi,
        currentSigner,
      );
      const isRegister = await poh.isRegistered(account);

      setSigner(currentSigner);
      setTalentLayerId(id);
      setTalentLayerHandle(handle);
      setIsRegisterToPoh(isRegister);
    })();
  }, [library, account, talentLayerId, isRegisterToPoh]);

  const value = useMemo(() => {
    return {
      isRegisterToPoh,
      talentLayerId,
      talentLayerHandle,
      signer,
    };
  }, [isRegisterToPoh, talentLayerId, talentLayerHandle, signer]);

  return <TalentLayerContext.Provider value={value}>{children}</TalentLayerContext.Provider>;
};

export { TalentLayerProvider };

export default TalentLayerContext;

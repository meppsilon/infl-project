import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 137],
});

const Header = () => {
  const context = useWeb3React();
  console.log('context', context);
  const { activate, active, account, deactivate } = context;

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAuthorization = async () => {
      if (!active) {
        const isAuthorized = await injected.isAuthorized();
        if (isAuthorized) {
          await activate(injected);
        }
      }
    };
    checkAuthorization();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading && active) {
      setIsLoading(false);
    }
  }, [isLoading, active, setIsLoading, account]);
  return (
    <div className="flex justify-between md:px-10 px-4 py-2 border-b">
      <h1 className="text-xl font-bold">Infl</h1>
      <button
        type="button"
        onClick={() => {
          if (!active) {
            setIsLoading(true);
            activate(injected);
          } else {
            deactivate();
          }
        }}
        className="items-center ml-3 inline-flex py-1 text-blue-500 hover:text-blue-700"
      >
        {isLoading && 'Loading...'}
        {!isLoading && !active && 'Connect'}
        {active && `Disconnect: ${account.slice(0, 5)}...${account.slice(account.length - 4, account.length)}`}
      </button>
    </div>
  );
};

export default Header;

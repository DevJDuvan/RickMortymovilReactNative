import React, { useState, useContext, createContext, Dispatch, SetStateAction } from 'react';

interface Context {
  onCreate?: boolean;
  setOnCreate?:Dispatch<SetStateAction<boolean>>
}

const VideoContext = createContext<Context>({} as Context);

export const VideoProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [onCreate, setOnCreate] = useState(false);
  return <VideoContext.Provider value={{ onCreate, setOnCreate }}>
    {children}
  </VideoContext.Provider>;
};


export const useVideo = ()=> useContext(VideoContext);

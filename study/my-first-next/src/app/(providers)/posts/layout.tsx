import { PropsWithChildren } from "react";

const ProvidersLayout = ({ children }: PropsWithChildren) => {
  return (
    <div id="some-kind-of-provider">
      <h1>프로바이더 주입완료</h1>
      {children}
    </div>
  );
};

export default ProvidersLayout;

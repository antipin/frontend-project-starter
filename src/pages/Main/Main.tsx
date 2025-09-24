import { Root } from '@/components/Root';
import { Header } from '@/components/Header';

export const Main = () => {
  return (
    <Root>
      <Header
        logo={<div>🚀</div>}
        title="Frontend Starter"
        rightSide={<div>Menu</div>}
      />
      <div>
        <h1>Hello World</h1>
      </div>
    </Root>
  );
};
import { FC, Suspense, ReactElement } from "react";
import { lazily } from "react-lazily";
const { WelcomeBanner } = lazily(() => import("./_components/welcome-banner"));

export const Component: FC = (): ReactElement => {
  return (
    <Suspense>
      <WelcomeBanner />
    </Suspense>
  );
};

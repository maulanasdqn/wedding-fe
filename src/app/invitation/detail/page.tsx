import { FC, Suspense, ReactElement } from "react";

export const Component: FC = (): ReactElement => {
  return (
    <Suspense>
      <h1>Hallo</h1>
    </Suspense>
  );
};

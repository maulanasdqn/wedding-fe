import { FC, Suspense, ReactElement } from "react";
import { lazily } from "react-lazily";
const { InvitationPoster } = lazily(
  () => import("./_components/invitation-poster"),
);

export const Component: FC = (): ReactElement => {
  return (
    <Suspense>
      <InvitationPoster />
    </Suspense>
  );
};

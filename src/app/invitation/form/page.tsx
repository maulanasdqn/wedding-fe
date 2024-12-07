import { FC, Suspense, ReactElement } from "react";
import { lazily } from "react-lazily";
const { InvitationForm } = lazily(
  () => import("../_components/invitation-form"),
);

export const Component: FC = (): ReactElement => {
  return (
    <Suspense>
      <InvitationForm />
    </Suspense>
  );
};

import { FC, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../_components/ui/navbar";
import { AudioControl } from "./_components/audio-control";

export const InvitationLayout: FC = () => {
  return (
    <Fragment>
      <AudioControl />
      <Outlet />
      <Navbar />
    </Fragment>
  );
};

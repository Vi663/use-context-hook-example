// import {  } from "react";
import { useAlert } from "./AlertProvider";

export function Alert() {
  const alert = useAlert()

  if (alert) {
    return (
      <div className={'alert alert-danger pt-3'}>
        Important message
      </div>
    )
  } return null;
}
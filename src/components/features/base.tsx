
import React, { Fragment, FunctionComponent } from "react";
import { DeviceState, Device, Endpoint, GenericExposedFeature, CompositeFeature } from "../../types";

export interface BaseFeatureProps<T> {
  feature: T;
  deviceState: DeviceState;
  device: Device;
  onChange(endpoint: Endpoint, value: object): void;
  onRead(endpoint: Endpoint, value: object): void;
}


export const BaseViewer: FunctionComponent<BaseFeatureProps<GenericExposedFeature>> = (props) => {
  const { feature: { property, unit }, deviceState } = props;
  return <Fragment><strong>{JSON.stringify(deviceState[property]) ?? "N/A"}</strong>{unit ? <small className="text-muted ml-1">{unit}</small> : null}</Fragment>
}

export const NoAccessError: FunctionComponent<BaseFeatureProps<GenericExposedFeature | CompositeFeature>> = ({ feature: { access } }) => <div className="alert alert-warning p-0" role="alert">Unknown acces {JSON.stringify(access, null, 4)}</div>;
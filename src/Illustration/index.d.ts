// @flow
/*
  DOCUMENTATION: https://orbit.kiwi/components/illustration/
*/

import * as React from "react";

import * as Common from "../common/common";

declare module "@kiwicom/orbit-components/lib/Illustration";
type Name =
  | "Accommodation"
  | "AirHelp"
  | "AirportTransport"
  | "AirportTransportTaxi"
  | "AirportShuttle"
  | "AppQRCode"
  | "BaggageDrop"
  | "Boarding"
  | "BoardingPass"
  | "BusinessTravel"
  | "CabinBaggage"
  | "CompassCollectPoints"
  | "CompassDemoted"
  | "CompassEmailAdventurer"
  | "CompassEmailCaptain"
  | "CompassEmailPromoted"
  | "CompassEmailPromotedCaptain"
  | "CompassEmailScout"
  | "CompassPoints"
  | "CompassTravelPlan"
  | "CompassSaveOnBooking"
  | "DesktopSearch"
  | "EnjoyApp"
  | "Error"
  | "Error404"
  | "FastTrack"
  | "Feedback"
  | "Help"
  | "Improve"
  | "Insurance"
  | "InviteAFriend"
  | "Login"
  | "Lounge"
  | "Mailbox"
  | "Meal"
  | "MobileApp"
  | "Money"
  | "MusicalInstruments"
  | "NetVerify"
  | "NoBookings"
  | "NoFavoriteFlights"
  | "Nomad"
  | "NomadNeutral"
  | "NoNotification"
  | "NoResults"
  | "Offline"
  | "OnlineCheckIn"
  | "OpenSearch"
  | "Parking"
  | "Pets"
  | "PlaceholderAirport"
  | "PlaceholderDestination"
  | "PlaceholderHotel"
  | "PlaceholderTours"
  | "PlaneAndMoney"
  | "PriorityBoarding"
  | "Rating"
  | "ReferAFriend"
  | "RentalCar"
  | "Seating"
  | "SpecialAssistance"
  | "SportsEquipment"
  | "Success"
  | "Time"
  | "TimelineBoarding"
  | "TimelineDropBaggage"
  | "TimelineLeave"
  | "TimelinePick"
  | "Tours"
  | "Train"
  | "TransportBus"
  | "TransportTaxi"
  | "WomanWithPhone";

export interface Props extends Common.Global, Common.SpaceAfter {
  readonly size?: "extraSmall" | "small" | "medium" | "large" | "display";
  readonly name: Name;
  readonly alt?: string;
}

declare const Illustration: React.FunctionComponent<Props>;
export { Illustration, Illustration as default };

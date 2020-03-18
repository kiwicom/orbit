// @flow
// Type definitions for @kiwicom/orbit-components
// Project: http://github.com/kiwicom/orbit-components

import * as React from "react";

import * as Common from "../common.d.ts";

declare module "@kiwicom/orbit-components/lib/Illustration";

export { Illustration, Illustration as default };

declare namespace Illustration {
  type Size = "small" | "medium";
  type Name =
    | "Accommodation"
    | "AirHelp"
    | "AirportTransport"
    | "AirportTransportTaxi"
    | "AirportShuttle"
    | "BaggageDrop"
    | "BGYFastTrack"
    | "Boarding"
    | "BoardingPass"
    | "BusinessTravel"
    | "CabinBaggage"
    | "DesktopSearch"
    | "EnjoyApp"
    | "Error"
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
    | "NCEFastTrack"
    | "NetVerify"
    | "NoBookings"
    | "NoFavoriteFlights"
    | "Nomad"
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
    | "TransportTaxi";

  interface Props extends Common.Global, Common.SpaceAfter {
    readonly size?: Size;
    readonly name: Name;
  }
}

declare class Illustration extends React.Component<Illustration.Props> {}

import * as React from "react";
import { test, expect } from "@playwright/experimental-ct-react";

import IllustrationStory from "./Illustration.ct-story";
import type { Name } from "./types";

export const NAMES: Name[] = [
  "AppKiwi",
  "Accommodation",
  "AirHelp",
  "AirportShuttle",
  "AirportTransport", // TODO: Get rid off 22.11
  "AirportTransportTaxi", // TODO: Get rid off 22.11
  "Ambulance",
  "AppQRCode",
  "BaggageDrop",
  "Boarding",
  "BoardingPass",
  "BusinessTravel",
  "CabinBaggage",
  "Chatbot",
  "Cancelled",
  "CompassCollectPoints",
  "CompassDemoted",
  "CompassEmailAdventurer",
  "CompassEmailCaptain",
  "CompassEmailPromoted",
  "CompassEmailPromotedCaptain",
  "CompassEmailScout",
  "CompassPoints",
  "CompassSaveOnBooking",
  "CompassTravelPlan",
  "Damage",
  "DesktopSearch",
  "EnjoyApp",
  "Error",
  "Error404",
  "EVisa",
  "FastBooking",
  "FastTrack",
  "FastTrackMan",
  "FareLock",
  "FareLockSuccess",
  "Feedback",
  "FlexibleDates",
  "FlightChange",
  "FlightDisruptions",
  "GroundTransport404",
  "Help",
  "Improve",
  "Insurance",
  "InviteAFriend",
  "Login",
  "Lounge",
  "Mailbox",
  "Meal",
  "MobileApp",
  "MobileApp2",
  "Money",
  "MusicalInstruments",
  "NetVerify",
  "NoBookings", // TODO: Get rid off 22.11
  "NoFavoriteFlights",
  "NoFlightChange",
  "Nomad",
  "NomadNeutral",
  "NoNotification",
  "NoResults",
  "Offline",
  "OnlineCheckIn",
  "OpenSearch",
  "Parking",
  "PassportUpdate",
  "Pets",
  "PlaceholderAirport",
  "PlaceholderDestination",
  "PlaceholderHotel",
  "PlaceholderTours",
  "PlaneAndMoney",
  "PlaneDelayed",
  "PriorityBoarding",
  "Rating",
  "ReferAFriend",
  "RentalCar",
  "Seating",
  "SpecialAssistance",
  "SportsEquipment",
  "Success",
  "TicketFlexi",
  "Time",
  "TimelineBoarding", // TODO: Get rid off 22.11
  "TimelineDropBaggage", // TODO: Get rid off 22.11
  "TimelineLeave",
  "TimelinePick",
  "Tours",
  "Train",
  "TransportBus",
  "TransportTaxi",
  "Wheelchair",
  "WomanWithPhone",
];

test.describe("visual Illustration", () => {
  NAMES.map(name =>
    test(`Illustration ${name}`, async ({ mount, page }, info) => {
      if (info.project.name === "Small Mobile") {
        const component = await mount(<IllustrationStory name={name} size="extraSmall" />);
        page.waitForRequest(/images.kiwi.com/);
        await expect(component).toHaveScreenshot();
      }

      if (info.project.name === "Medium Mobile" || info.project.name === "Large Mobile") {
        const component = await mount(<IllustrationStory name={name} size="small" />);
        page.waitForRequest(/images.kiwi.com/);
        await expect(component).toHaveScreenshot();
      }

      if (info.project.name === "Tablet") {
        const component = await mount(<IllustrationStory name={name} size="medium" />);
        page.waitForRequest(/images.kiwi.com/);
        await expect(component).toHaveScreenshot();
      }

      if (info.project.name === "Desktop") {
        const component = await mount(<IllustrationStory name={name} size="large" />);
        page.waitForRequest(/images.kiwi.com/);
        await expect(component).toHaveScreenshot();
      }

      if (info.project.name === "Large Desktop") {
        const component = await mount(<IllustrationStory name={name} size="display" />);
        page.waitForRequest(/images.kiwi.com/);
        await expect(component).toHaveScreenshot();
      }
    }),
  );
});

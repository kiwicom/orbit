import * as React from "react";
import { ButtonMobileStore, Stack } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Stack direction="column">
      <Stack flex>
        <ButtonMobileStore
          alt="Download on the App Store"
          href="https://apps.apple.com/us/app/kiwi-com-cheap-travel-deals/id657843853"
          type="appStore"
        />
        <ButtonMobileStore
          alt="Get it on Google Play"
          href="https://play.google.com/store/apps/details?id=com.skypicker.main"
          type="googlePlay"
        />
      </Stack>
      <Stack flex>
        <ButtonMobileStore
          variant="light"
          alt="Download on the App Store"
          href="https://apps.apple.com/us/app/kiwi-com-cheap-travel-deals/id657843853"
          type="appStore"
        />
        <ButtonMobileStore
          variant="light"
          alt="Get it on Google Play"
          href="https://play.google.com/store/apps/details?id=com.skypicker.main"
          type="googlePlay"
        />
      </Stack>
    </Stack>
  ),
  info: {
    title: "Types",
    description: "Mobile store buttons can be either dark (the default) or light.",
  },
};

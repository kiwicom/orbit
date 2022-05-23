import axios from "axios";

import { fetchConfigs, IOS_URL, ANDROID_URL, mergeConfigs } from "../componentStatuses";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

const swiftRaw = `
- component: Alert
  ios: Released
- component: ButtonLink
  ios: Planned
`;

const androidRaw = `
- component: Alert
  android: Released
- component: ButtonLink
  android: Planned
`;

const currentRaw = `
- component: Alert
  figma: Released
  android: N/A
  ios: N/A
  react: Released
  docs: Released
  group: Information
- component: ButtonLink
  android: N/A
  ios: N/A
  figma: Released
  react: Released
  docs: Released
  group: Action
`;

describe("componentStatuses", () => {
  const spreadResult = jest.fn();

  beforeEach(() => {
    mockedAxios.get.mockClear();
    mockedAxios.all.mockResolvedValue([]);
    mockedAxios.spread.mockReturnValue(spreadResult);
  });

  it("should call correct api", async () => {
    await fetchConfigs(ANDROID_URL, IOS_URL);

    expect(spreadResult).toHaveBeenCalled();
    expect(mockedAxios.all).toHaveBeenCalledWith([
      mockedAxios.get(ANDROID_URL),
      mockedAxios.get(IOS_URL),
    ]);
  });

  it("should return both configs and merge them", async () => {
    const expectedResult = androidRaw.concat(swiftRaw);
    mockedAxios.spread.mockReturnValue(() => expectedResult);
    const result = await fetchConfigs(ANDROID_URL, IOS_URL);

    expect(result).toEqual(expectedResult);
    expect(mergeConfigs(currentRaw, expectedResult)).toMatchInlineSnapshot(`
      Object {
        "Alert": Object {
          "android": "Released",
          "component": "Alert",
          "docs": "Released",
          "figma": "Released",
          "group": "Information",
          "ios": "Released",
          "react": "Released",
        },
        "ButtonLink": Object {
          "android": "Planned",
          "component": "ButtonLink",
          "docs": "Released",
          "figma": "Released",
          "group": "Action",
          "ios": "Planned",
          "react": "Released",
        },
      }
    `);
  });
});

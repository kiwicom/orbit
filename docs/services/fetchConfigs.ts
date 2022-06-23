import axios from "axios";

export default async function fetchConfigs(android: string, ios: string) {
  const iosReq = axios.get(ios);
  const androidReq = axios.get(android);

  const data = await axios.all([androidReq, iosReq]).then(
    axios.spread((...responses) => {
      const { data: androidData } = responses[0];
      const { data: iosData } = responses[1];
      return androidData.concat(iosData);
    }),
  );

  return data;
}

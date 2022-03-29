import React from "react";
// import {getDataDiff} from '../../plugins/dashboard/

const DifferencePage = () => {
  return (
    <main>
      <h1>SSR Page with Dogs</h1>
    </main>
  );
};

export default DifferencePage;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
    if (!res.ok) {
      throw new Error(`Response failed`);
    }
    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}

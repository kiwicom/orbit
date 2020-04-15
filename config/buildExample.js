// @flow
import { parse } from "@babel/parser";
import generate from "@babel/generator";
import glob from "glob";

const files = glob.sync("src/**/__examples__/*.js");

(async () => {
  try {
  } catch (error) {
    console.error(error);
  }
})();

import * as React from "react";
import { shallow } from "enzyme";
import Table from "../";
import Header from "../Header";
import Body from "../Body";
import Footer from "../Footer";
import Row from "../Row";
import Cell from "../Cell";

describe("Table", () => {
  it("Should contain a <table> element", () => {
    const component = shallow(<Table />);
    expect(component.find("table").exists()).toBe(true);
  });
});

describe("TableHeader", () => {
  it("Should contain a <thead> element ", () => {
    const component = shallow(<Header />);
    expect(component.find("thead").exists()).toBe(true);
  });
});

describe("TableBody", () => {
  it("Should contain a <tbody> element ", () => {
    const component = shallow(<Body />);
    expect(component.find("tbody").exists()).toBe(true);
  });
});

describe("TableFooter", () => {
  it("Should contain a <tfoot> element ", () => {
    const component = shallow(<Footer />);
    expect(component.find("tfoot").exists()).toBe(true);
  });
});

describe("TableRow", () => {
  it("Should contain a <tr> element ", () => {
    const component = shallow(<Row />);
    expect(component.find("tr").exists()).toBe(true);
  });
});

describe("TableCell", () => {
  it("Should contain a <td> element ", () => {
    const component = shallow(<Cell />);
    expect(component.find("td").exists()).toBe(true);
  });
});

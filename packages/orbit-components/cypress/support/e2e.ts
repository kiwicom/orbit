import { configure } from "@testing-library/cypress";

/// <reference types="@testing-library/cypress" />
/// <reference types="cypress" />
import "@testing-library/cypress/add-commands";

configure({ testIdAttribute: "data-test" });

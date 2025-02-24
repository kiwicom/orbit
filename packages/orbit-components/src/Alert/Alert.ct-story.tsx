import * as React from "react";

import * as Icons from "../icons";
import TextLink from "../TextLink";
import type { Type } from "./types";
import { TYPE_OPTIONS } from "./consts";

import Alert, { AlertButton } from ".";

export function TestLeftIcon({ type }: { type: Type }) {
  return (
    <div className="p-100 inline-block">
      <AlertButton iconLeft={<Icons.Airplane />} type={type} dataTest="button">
        Button
      </AlertButton>
    </div>
  );
}

export function TestAlert() {
  return (
    <div className="gap-400 p-100 flex flex-col items-stretch">
      <h2>Only title, icon and inline button</h2>
      <div className="gap-400 flex flex-col items-stretch">
        {Object.values(TYPE_OPTIONS).map(type => {
          const Icon = typeof type === "string" && Icons[type];

          return (
            <Alert
              title="You can change the title by changing the Title control"
              type={type}
              icon={Icon ? <Icon /> : true}
              inlineActions={
                <AlertButton type={type} href="#">
                  Link
                </AlertButton>
              }
            />
          );
        })}
      </div>
      <h2>Title and text, closable and inline button</h2>
      <div className="gap-400 flex flex-col items-stretch">
        {Object.values(TYPE_OPTIONS).map(type => (
          <Alert
            title="You can change the title by changing the Title control"
            type={type}
            icon={false}
            closable
            labelClose="Close"
            inlineActions={
              <AlertButton type={type} href="#">
                Link
              </AlertButton>
            }
          >
            <p>The quick, brown fox jumps over a lazy dog.</p>
          </Alert>
        ))}
      </div>
      <h2>Title and text, icon, closable and inline button</h2>
      <div className="gap-400 flex flex-col items-stretch">
        {Object.values(TYPE_OPTIONS).map(type => (
          <Alert
            title="You can change the title by changing the Title control"
            type={type}
            icon={<Icons.Ai />}
            closable
            labelClose="Close"
            inlineActions={
              <AlertButton type={type} href="#">
                Link
              </AlertButton>
            }
          >
            <p>The quick, brown fox jumps over a lazy dog.</p>
          </Alert>
        ))}
      </div>
      <h2>With custom icon</h2>
      <div className="gap-400 flex flex-col items-stretch">
        {Object.values(TYPE_OPTIONS).map(type => (
          <Alert
            title="You can change the title by changing the Title control"
            type={type}
            icon={<Icons.Ai />}
          >
            The quick, brown fox jumps over a lazy dog.
          </Alert>
        ))}
      </div>
      <h2>With multiline text, closable, without icon</h2>
      <div className="gap-400 flex flex-col items-stretch">
        {Object.values(TYPE_OPTIONS).map(type => (
          <Alert type={type} closable icon={false} labelClose="Close">
            <p>
              <TextLink type="primary">This is</TextLink> a primary textlink.
              <br />
              <TextLink type="secondary">This is</TextLink> a secondary textlink.
            </p>
          </Alert>
        ))}
      </div>
      <h2>Suppressed</h2>
      <div className="gap-400 flex flex-col items-stretch">
        <Alert
          title="You can change the title by changing the Title control"
          type="info"
          suppressed
          icon
        />
      </div>
    </div>
  );
}

import S from "@sanity/desk-tool/structure-builder";
import React from "react";

import Emoji from "a11y-react-emoji";
const About = () => <Emoji style={{ fontSize: "2rem" }} symbol="📓" />;
const Contact = () => <Emoji style={{ fontSize: "2rem" }} symbol="📞" />;

const url = "https://collinsbuilding.vercel.app/";

const WebPreview = () => {
  let targetURL = url + `/?preview=true`;
  return (
    <iframe src={targetURL} frameBorder={0} width="1280px" height="100%" />
  );
};

export default () =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Mission")
        .child(
          S.document()
            .schemaType("mission")
            .documentId("mission")
            .views([
              S.view.form(),
              S.view.component(WebPreview).title("Web Preview"),
            ])
            .title("Mission")
        ),
      S.listItem()
        .title("Settings")
        .child(
          S.document()
            .schemaType("settings")
            .documentId("settings")
            .views([
              S.view.form(),
              S.view.component(WebPreview).title("Web Preview"),
            ])
            .title("Settings")
        ),
      S.listItem()
        // Give it a title
        .title("People & Careers")
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title("People & Careers")
            .items([
              // Add the first list item
              S.listItem()
                .title("Info")
                .child(
                  S.document()
                    .schemaType("people")
                    .documentId("people")
                    .views([
                      S.view.form(),
                      S.view.component(WebPreview).title("Web Preview"),
                    ])
                    .title("People")
                ),
              S.listItem()
                .title("Vacancies")
                .schemaType("vacancy")
                // When you open this list item, list out the documents
                // of the type category"
                .child(S.documentTypeList("vacancy").title("Vacancies")),
            ])
        ),
      S.listItem()
        .title("Contact")
        .child(
          S.document()
            .schemaType("contact")
            .documentId("contact")
            .views([
              S.view.form(),
              S.view.component(WebPreview).title("Web Preview"),
            ])
            .title("Contact")
        ),
      ...S.documentTypeListItems()
        .filter((listItem) => !["mission"].includes(listItem.getId()))
        .filter((listItem) => !["people"].includes(listItem.getId()))
        .filter((listItem) => !["contact"].includes(listItem.getId()))
        .filter((listItem) => !["settings"].includes(listItem.getId())),
    ]);
export const getDefaultDocumentNode = ({ schemaType }) => {
  return S.document().views([
    S.view.form(),
    S.view.component(WebPreview).title("Web Preview"),
  ]);
};

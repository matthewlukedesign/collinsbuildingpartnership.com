import S from "@sanity/desk-tool/structure-builder";
import React from "react";
import { GrCircleInformation } from "react-icons/gr";
import { BiCog } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";
import { AiOutlinePhone } from "react-icons/ai";

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
        .icon(GrCircleInformation)
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
        .icon(BiCog)
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
        .icon(BsFillPeopleFill)
        .child(
          // Make a list in the second pane called Portfolio
          S.list()
            .title("People & Careers")
            .items([
              // Add the first list item
              S.listItem()
                .title("Info")
                .icon(BsFillPeopleFill)
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
                .icon(GrDocumentText)
                .schemaType("vacancy")
                // When you open this list item, list out the documents
                // of the type category"
                .child(S.documentTypeList("vacancy").title("Vacancies")),
            ])
        ),
      S.listItem()
        .title("Contact")
        .icon(AiOutlinePhone)
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
        .filter((listItem) => !["vacancy"].includes(listItem.getId()))
        .filter((listItem) => !["contact"].includes(listItem.getId()))
        .filter((listItem) => !["settings"].includes(listItem.getId())),
    ]);
export const getDefaultDocumentNode = ({ schemaType }) => {
  return S.document().views([
    S.view.form(),
    S.view.component(WebPreview).title("Web Preview"),
  ]);
};

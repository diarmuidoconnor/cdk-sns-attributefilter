/* eslint-disable import/extensions, import/no-absolute-path */
import { SNSHandler } from "aws-lambda";

export const handler: SNSHandler = async (event) => {
  console.log("Event ", JSON.stringify(event));
  const message = JSON.parse(event.Records[0].Sns.Message);
  if (!message?.name) {
    throw new Error("Bad message");
  }
};

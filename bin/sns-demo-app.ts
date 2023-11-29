#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { SNSDemoStack } from "../lib/sns-demo-stack";

const app = new cdk.App();
new SNSDemoStack(app, "SHSDemoStack", {
  env: { region: "eu-west-1" },
});

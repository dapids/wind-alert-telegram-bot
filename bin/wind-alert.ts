#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { WindAlertStack } from '../lib/wind-alert-stack'

const app = new cdk.App()

new WindAlertStack(app, 'WindAlertStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
})

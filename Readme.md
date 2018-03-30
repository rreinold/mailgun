
# ipm package: mailgun

## Overview

Transactional Email API Service For Developers

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

Create an API key at [https://www.mailgun.com/](https://www.mailgun.com/)

## Usage

### Code Services

`Example` - Sends an example email thru Mailgun library

### Code Libraries

`Mailgun` - Library for sending emails thru Mailgun's REST API

## API

### Mailgun
Mailgun - Send emails via Mailgun REST API

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| apikey | <code>string</code> | API Key found in Mailgun Console (https://www.mailgun.com/) |
| domain | <code>string</code> | Domain ex. mg.yoursite.com, provided by Mailgun |
| originEmail | <code>string</code> | origin address from which to send emails, provided by Mailgun |

<a name="Mailgun.send"></a>

#### Mailgun.send(body, subject, recipient)
**Kind**: static method of [<code>Mailgun</code>](#Mailgun)  

| Param | Type |
| --- | --- |
| body | <code>string</code> | 
| subject | <code>string</code> | 
| recipient | <code>string</code> | 


## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
<a name="Mailgun"></a>

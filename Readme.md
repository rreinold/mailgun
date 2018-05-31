
# ipm package: mailgun

## Overview

Transactional Email API Service For Developers

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

Create an API key at [https://www.mailgun.com/](https://www.mailgun.com/)

## Usage
This ipm-package is used to send emails effortlessly using a mailgun API. It is extensible, more features can be added into the library.

## Assets
### Code Services

#### Example
`MailgunExampleSend` - Sends an MailgunExampleSend email through Mailgun library

#### Test

`MailgunTestSetup` - Ensures MailgunConstants are set.

### Code Libraries

`MailgunLib` - Library for sending emails through Mailgun's REST API. The library can be used using the **Mailgun** object. 

`MailgunConstants` - A constants library to have a centralized location for constants like API-key.

## API
### Typedefs

<dl>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>This callback is displayed as part of this library.</p>
</dd>
<dt><a href="#Mailgun">Mailgun</a> : <code>Object</code></dt>
<dd><p>Mailgun - Send emails via Mailgun REST API
<a href="https://documentation.mailgun.com/en/latest/api_reference.html">https://documentation.mailgun.com/en/latest/api_reference.html</a></p>
</dd>
</dl>

<a name="callback"></a>

### callback : <code>function</code>
This callback is displayed as part of this library.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| err | <code>Object</code> | 
| resp | <code>Object</code> | 

<a name="Mailgun"></a>

### Mailgun : <code>Object</code>
Mailgun - Send emails via Mailgun REST API
https://documentation.mailgun.com/en/latest/api_reference.html

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| apiKey | <code>string</code> | API Key found in Mailgun Console (https://www.mailgun.com/) |
| domain | <code>string</code> | Domain ex. mg.yoursite.com, provided by Mailgun |
| originEmail | <code>string</code> | origin address from which to send emails, provided by Mailgun |

<a name="Mailgun.send"></a>

#### Mailgun.send(body, subject, recipient)
This method is used to send an email with subject and body and other components can be added. Refer to the mailgun api https://documentation.mailgun.com/en/latest/api-sending.html#sending

**Kind**: static method of [<code>Mailgun</code>](#Mailgun)  

| Param | Type | Description |
| --- | --- | --- |
| body | <code>string</code> | the body of the email |
| subject | <code>string</code> | the subject of the email |
| recipient | <code>string</code> | the recipient of the email |

**Example**  

```js
var mgconf = MAILGUN_CONFIG;
var mailgun = Mailgun(mgconf.API_KEY, mgconf.DOMAIN, mgconf.ORIGIN_EMAIL)
var body = "Sample body";
var subject = "Mailgun IPM Package";
var recipient = "Bob <bob@host.com>";
mailgun.send(body, subject, recipient, function(err, data){
    if(err){
        resp.error(err)
    }
    resp.success(data)
})
```

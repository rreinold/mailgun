
# ipm package: mailgun

## Overview

Transactional Email API Service For Developers

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

Create an API key at [https://www.mailgun.com/](https://www.mailgun.com/)

## Usage

### Code Services

`MailgunExampleSend` - Sends an MailgunExampleSend email thru Mailgun library

### Code Libraries

`Mailgun` - Library for sending emails thru Mailgun's REST API

## API
### Typedefs

<dl>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>This callback is displayed as part of sgEmail.</p>
</dd>
<dt><a href="#Mailgun">Mailgun</a> : <code>Object</code></dt>
<dd><p>Mailgun - Send emails via Mailgun REST API
<a href="https://documentation.mailgun.com/en/latest/api_reference.html">https://documentation.mailgun.com/en/latest/api_reference.html</a></p>
</dd>
</dl>

<a name="callback"></a>

### callback : <code>function</code>
This callback is displayed as part of sgEmail.

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
| apikey | <code>string</code> | API Key found in Mailgun Console (https://www.mailgun.com/) |
| domain | <code>string</code> | Domain ex. mg.yoursite.com, provided by Mailgun |
| originEmail | <code>string</code> | origin address from which to send emails, provided by Mailgun |

<a name="Mailgun.send"></a>

#### Mailgun.send(body, subject, recipient)
This method is used to send an email with subject and body and other components can be added. Refer to the mailgun api https://documentation.mailgun.com/en/latest/api-sending.html#sending

**Kind**: static method of [<code>Mailgun</code>](#Mailgun)  

| Param | Type |
| --- | --- |
| body | <code>string</code> | 
| subject | <code>string</code> | 
| recipient | <code>string</code> | 

**Example**  
```js
var mailgun = Mailgun(API_KEY, DOMAIN, ORIGIN_EMAIL)
mailgun.send("Sample body","Mailgun IPM Package", RECIPIENT_EMAIL, function(err, data){
    if(err){
        resp.error(err)
    }
    resp.success(data)
})
```

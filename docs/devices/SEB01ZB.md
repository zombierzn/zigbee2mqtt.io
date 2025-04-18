---
title: "Feibit SEB01ZB control via MQTT"
description: "Integrate your Feibit SEB01ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway."
addedAt: 2020-04-08T17:49:06Z
pageClass: device-page
---

<!-- !!!! -->
<!-- ATTENTION: This file is auto-generated through docgen! -->
<!-- You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". -->
<!-- Do not use h1 or h2 heading within "## Notes"-Section. -->
<!-- !!!! -->

# Feibit SEB01ZB

|     |     |
|-----|-----|
| Model | SEB01ZB  |
| Vendor  | [Feibit](/supported-devices/#v=Feibit)  |
| Description | SOS button |
| Exposes | sos, battery_low, tamper, battery |
| Picture | ![Feibit SEB01ZB](https://www.zigbee2mqtt.io/images/devices/SEB01ZB.png) |


<!-- Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. -->


<!-- Notes END: Do not edit below this line -->




## Exposes

### SOS (binary)
SOS alarm.
Value can be found in the published state on the `sos` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` sOS is ON, if `false` OFF.

### Battery low (binary)
Indicates if the battery of this device is almost empty.
Value can be found in the published state on the `battery_low` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` battery low is ON, if `false` OFF.

### Tamper (binary)
Indicates whether the device is tampered.
Value can be found in the published state on the `tamper` property.
It's not possible to read (`/get`) or write (`/set`) this value.
If value equals `true` tamper is ON, if `false` OFF.

### Battery (numeric)
Remaining battery in %, can take up to 24 hours before reported.
Value can be found in the published state on the `battery` property.
It's not possible to read (`/get`) or write (`/set`) this value.
The minimal value is `0` and the maximum value is `100`.
The unit of this value is `%`.


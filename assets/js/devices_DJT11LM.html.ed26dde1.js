"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88649],{30405:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>s,data:()=>n});var o=a(6254);const i={},s=(0,a(15356).A)(i,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[8]||(t[8]=(0,o.Lk)("h1",{id:"aqara-djt11lm",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#aqara-djt11lm"},[(0,o.Lk)("span",null,"Aqara DJT11LM")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"DJT11LM")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=Aqara"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("Aqara")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Vibration sensor")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"battery, device_temperature, vibration, strength, sensitivity, angle_x, angle_y, angle_z, x_axis, y_axis, z_axis, voltage, power_outage_count, action")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/DJT11LM.png",alt:"Aqara DJT11LM"})])],-1))])]),t[9]||(t[9]=(0,o.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery"><span>Battery</span></a></h3><p>Uses a CR2032 battery</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Press the reset button for about 5 seconds. The LED lights up 3 times. Then press the button again every 2 seconds to keep it awake (maximum 20 times).</p><p><em>NOTE: When you fail to pair a device, try replacing the battery, this could solve the problem.</em></p><h3 id="meaning-of-strength-value" tabindex="-1"><a class="header-anchor" href="#meaning-of-strength-value"><span>Meaning of <code>strength</code> value</span></a></h3><p>The <code>strength</code> value, which is reported every 300 seconds after vibration is detected, is the max strength measured during a period of 300 second.</p><h3 id="frequency-of-vibration-actions" tabindex="-1"><a class="header-anchor" href="#frequency-of-vibration-actions"><span>Frequency of <code>vibration</code> actions</span></a></h3><p>The subtopic <code>/action</code> with payload <code>vibration</code> and associated status JSON blobs are emitted about one second after onset, but not more frequently than once per minute regardless of whether vibrations are continuous or intermittent within that minute. This action message is distinct from the status JSON blob message emitted approximately every hour and after <code>vibration_timeout</code> described below.</p><p>If vibrations should persist, another <code>vibration</code> action will be emitted after that minute interval expires. There is no evident way of changing the duration of this hold-off period.</p><h3 id="troubleshooting-device-stops-sending-messages-disconnects-from-network" tabindex="-1"><a class="header-anchor" href="#troubleshooting-device-stops-sending-messages-disconnects-from-network"><span>Troubleshooting: device stops sending messages/disconnects from network</span></a></h3><p>Since Xiaomi devices do not fully comply to the Zigbee standard, it sometimes happens that they disconnect from the network. Most of the times this happens because of the following reasons:</p><ul><li>Device has a weak signal, you can see the signal quality in the published messages as <code>linkquality</code>. A linkquality &lt; 20 is considered weak.</li><li>Low battery voltage, this can even happen when the battery still appears full. Try a different battery.</li><li>The device is connected through a router which cannot deal with Xiaomi devices. This is known to happen devices from: Centralite, General Electric, Iris, Ledvance, Legrand, OSRAM, Sylvania, SmartThings, Securifi. A possible solution is to connect the device directly to the central coordinator by pushing the reset button while being physically close to it.</li></ul><p>More detailed information about this can be found <a href="https://community.hubitat.com/t/xiaomi-aqara-devices-pairing-keeping-them-connected/623" target="_blank" rel="noopener noreferrer">here</a>.</p><h3 id="sensitivity" tabindex="-1"><a class="header-anchor" href="#sensitivity"><span>Sensitivity</span></a></h3><p>The sensitivity can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;sensitivity&quot;: &quot;SENSITIVITY&quot;}</code> where <code>SENSITIVITY</code> is one of the following values: <code>low</code>, <code>medium</code>, <code>high</code>.</p><p>After setting the sensitivity you immediately have to start pressing the reset button with an interval of 1 second until you see Zigbee2MQTT publishing the new sensitivity to MQTT.</p><h3 id="calibration" tabindex="-1"><a class="header-anchor" href="#calibration"><span>Calibration</span></a></h3><p>In order to improve the factory calibration or lack thereof, you can get a better result with a 2 step offset calibration:</p><ul><li>Ensure the x, y and z offset are set to 0 in the device specific settings</li><li>Put the device on a level surface, face up. <ul><li>A few seconds after the tilt action, the angles and accelerometer values (<code>x_axis</code>, <code>y_axis</code>, <code>z_axis</code>) are updated</li><li><code>x_axis</code> and <code>y_axis</code> should be small, <code>z_axis</code> around 1000</li><li>Set the offset for x and y to the opposite values of <code>x_axis</code> and <code>y_axis</code> to compensate.</li></ul></li><li>Put the device on a side <ul><li>After a few seconds, te values update, and <code>z_axis</code> should be small, as well as one of the <code>x_axis</code> or <code>y_axis</code>, the other being around ±1000</li><li>Set the offset for z to the opposite of <code>z_axis</code> You can fine tune the values of the offset by trying other sides and picking values that match best. Remember that the device sends accelerometer values a few seconds after the actual tilt event.</li></ul></li></ul><p><strong>Important note on software-based calibration</strong><br> The calibration offsets (<code>x_calibration</code>, <code>y_calibration</code>, <code>z_calibration</code>) are only applied <strong>inside</strong> Zigbee2MQTT after the sensor has already sent its raw data. This means:</p><p><strong>Raw values</strong> (<code>x_axis</code>, <code>y_axis</code>, <code>z_axis</code>) in logs, MQTT messages, and the Zigbee2MQTT UI will remain the same as reported by the hardware.</p><ul><li>The offsets will <em>not</em> change what Home Assistant (or other software) sees if you are directly reading those raw properties.</li><li>If you want to work with the &quot;corrected&quot; or &quot;calibrated&quot; values in another system (e.g., Home Assistant), you would need to create a <a href="https://www.home-assistant.io/integrations/template/" target="_blank" rel="noopener noreferrer">template sensor</a> or otherwise apply the offsets yourself.</li><li>Seeing the same raw numbers after setting offsets does <strong>not</strong> mean calibration isn&#39;t working—it&#39;s simply that the sensor output itself is never altered by the offsets.</li></ul><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',25)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>t[7]||(t[7]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,o.Fv)('<ul><li><p><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>vibration_timeout</code>: Time in seconds after which vibration is cleared after detecting it (default 90 seconds). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>x_calibration</code>: Calibrates the x value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>y_calibration</code>: Calibrates the y value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>z_calibration</code>: Calibrates the z value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric"><span>Device temperature (numeric)</span></a></h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="vibration-binary" tabindex="-1"><a class="header-anchor" href="#vibration-binary"><span>Vibration (binary)</span></a></h3><p>Indicates whether the device detected vibration. Value can be found in the published state on the <code>vibration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> vibration is ON, if <code>false</code> OFF.</p><h3 id="strength-numeric" tabindex="-1"><a class="header-anchor" href="#strength-numeric"><span>Strength (numeric)</span></a></h3><p>Value can be found in the published state on the <code>strength</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#sensitivity-numeric"><span>Sensitivity (numeric)</span></a></h3><p>Sensitivity, 1 = highest, 21 = lowest. Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>21</code>.</p><h3 id="angle-x-numeric" tabindex="-1"><a class="header-anchor" href="#angle-x-numeric"><span>Angle x (numeric)</span></a></h3><p>Value can be found in the published state on the <code>angle_x</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-90</code> and the maximum value is <code>90</code>. The unit of this value is <code>°</code>.</p><h3 id="angle-y-numeric" tabindex="-1"><a class="header-anchor" href="#angle-y-numeric"><span>Angle y (numeric)</span></a></h3><p>Value can be found in the published state on the <code>angle_y</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-90</code> and the maximum value is <code>90</code>. The unit of this value is <code>°</code>.</p><h3 id="angle-z-numeric" tabindex="-1"><a class="header-anchor" href="#angle-z-numeric"><span>Angle z (numeric)</span></a></h3><p>Value can be found in the published state on the <code>angle_z</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>-90</code> and the maximum value is <code>90</code>. The unit of this value is <code>°</code>.</p><h3 id="x-axis-numeric" tabindex="-1"><a class="header-anchor" href="#x-axis-numeric"><span>X axis (numeric)</span></a></h3><p>Accelerometer X value. Value can be found in the published state on the <code>x_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="y-axis-numeric" tabindex="-1"><a class="header-anchor" href="#y-axis-numeric"><span>Y axis (numeric)</span></a></h3><p>Accelerometer Y value. Value can be found in the published state on the <code>y_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="z-axis-numeric" tabindex="-1"><a class="header-anchor" href="#z-axis-numeric"><span>Z axis (numeric)</span></a></h3><p>Accelerometer Z value. Value can be found in the published state on the <code>z_axis</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric"><span>Power outage count (numeric)</span></a></h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>vibration</code>, <code>tilt</code>, <code>drop</code>.</p>',30))])}]]),n=JSON.parse('{"path":"/devices/DJT11LM.html","title":"Aqara DJT11LM control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Aqara DJT11LM control via MQTT","description":"Integrate your Aqara DJT11LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2019-07-22T20:08:17.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/DJT11LM.md"}')}}]);
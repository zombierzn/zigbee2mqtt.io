"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[68057],{82409:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>u,data:()=>d});var i=o(6254);const a={},u=(0,o(15356).A)(a,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[7]||(t[7]=(0,i.Lk)("h1",{id:"moes-bht-002-bht-006",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#moes-bht-002-bht-006"},[(0,i.Lk)("span",null,"Moes BHT-002/BHT-006")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"BHT-002/BHT-006")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(o,{to:"/supported-devices/#v=Moes"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Moes")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"Smart heating thermostat")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"child_lock, deadzone_temperature, max_temperature_limit, min_temperature_limit, climate (current_heating_setpoint, local_temperature, local_temperature_calibration, system_mode, running_state, preset), sensor, program")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BHT-002-BHT-006.png",alt:"Moes BHT-002/BHT-006"})])],-1))])]),t[8]||(t[8]=(0,i.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="deadzone-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#deadzone-temperature-numeric"><span>Deadzone temperature (numeric)</span></a></h3><p>The delta between local_temperature and current_heating_setpoint to trigger Heat. Value can be found in the published state on the <code>deadzone_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;deadzone_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="max-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-limit-numeric"><span>Max temperature limit (numeric)</span></a></h3><p>Maximum temperature limit. Cuts the thermostat out regardless of air temperature if the external floor sensor exceeds this temperature. Only used by the thermostat when in AL sensor mode.. Value can be found in the published state on the <code>max_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>45</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-limit-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-limit-numeric"><span>Min temperature limit (numeric)</span></a></h3><p>Minimum temperature limit for frost protection. Turns the thermostat on regardless of setpoint if the temperature drops below this.. Value can be found in the published state on the <code>min_temperature_limit</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature_limit&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>5</code>. The unit of this value is <code>°C</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>local_temperature_calibration</code>, <code>system_mode</code>, <code>running_state</code>, <code>preset</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>45</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>hold</code>, <code>program</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>, <code>cool</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-30</code> and the maximum value is <code>30</code> with a step size of <code>0.1</code>.</li></ul><h3 id="sensor-enum" tabindex="-1"><a class="header-anchor" href="#sensor-enum"><span>Sensor (enum)</span></a></h3><p>Select temperature sensor to use. Value can be found in the published state on the <code>sensor</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor&quot;: NEW_VALUE}</code>. The possible values are: <code>IN</code>, <code>AL</code>, <code>OU</code>.</p><h3 id="program-composite" tabindex="-1"><a class="header-anchor" href="#program-composite"><span>Program (composite)</span></a></h3><p>Time of day and setpoint to use when in program mode. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;program&quot;: {&quot;weekdays_p1_hour&quot;: VALUE, &quot;weekdays_p1_minute&quot;: VALUE, &quot;weekdays_p1_temperature&quot;: VALUE, &quot;weekdays_p2_hour&quot;: VALUE, &quot;weekdays_p2_minute&quot;: VALUE, &quot;weekdays_p2_temperature&quot;: VALUE, &quot;weekdays_p3_hour&quot;: VALUE, &quot;weekdays_p3_minute&quot;: VALUE, &quot;weekdays_p3_temperature&quot;: VALUE, &quot;weekdays_p4_hour&quot;: VALUE, &quot;weekdays_p4_minute&quot;: VALUE, &quot;weekdays_p4_temperature&quot;: VALUE, &quot;saturday_p1_hour&quot;: VALUE, &quot;saturday_p1_minute&quot;: VALUE, &quot;saturday_p1_temperature&quot;: VALUE, &quot;saturday_p2_hour&quot;: VALUE, &quot;saturday_p2_minute&quot;: VALUE, &quot;saturday_p2_temperature&quot;: VALUE, &quot;saturday_p3_hour&quot;: VALUE, &quot;saturday_p3_minute&quot;: VALUE, &quot;saturday_p3_temperature&quot;: VALUE, &quot;saturday_p4_hour&quot;: VALUE, &quot;saturday_p4_minute&quot;: VALUE, &quot;saturday_p4_temperature&quot;: VALUE, &quot;sunday_p1_hour&quot;: VALUE, &quot;sunday_p1_minute&quot;: VALUE, &quot;sunday_p1_temperature&quot;: VALUE, &quot;sunday_p2_hour&quot;: VALUE, &quot;sunday_p2_minute&quot;: VALUE, &quot;sunday_p2_temperature&quot;: VALUE, &quot;sunday_p3_hour&quot;: VALUE, &quot;sunday_p3_minute&quot;: VALUE, &quot;sunday_p3_temperature&quot;: VALUE, &quot;sunday_p4_hour&quot;: VALUE, &quot;sunday_p4_minute&quot;: VALUE, &quot;sunday_p4_temperature&quot;: VALUE}}</code></p><ul><li><code>weekdays_p1_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p1_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p1_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>weekdays_p2_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p2_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p2_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>weekdays_p3_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p3_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p3_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>weekdays_p4_hour</code> (numeric) max value is 23, unit is h</li><li><code>weekdays_p4_minute</code> (numeric) max value is 59, unit is m</li><li><code>weekdays_p4_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p1_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p1_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p1_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p2_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p2_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p2_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p3_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p3_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p3_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>saturday_p4_hour</code> (numeric) max value is 23, unit is h</li><li><code>saturday_p4_minute</code> (numeric) max value is 59, unit is m</li><li><code>saturday_p4_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p1_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p1_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p1_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p2_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p2_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p2_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p3_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p3_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p3_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li><li><code>sunday_p4_hour</code> (numeric) max value is 23, unit is h</li><li><code>sunday_p4_minute</code> (numeric) max value is 59, unit is m</li><li><code>sunday_p4_temperature</code> (numeric) min value is 5, max value is 35, unit is °C</li></ul>',17))])}]]),d=JSON.parse('{"path":"/devices/BHT-002_BHT-006.html","title":"Moes BHT-002/BHT-006 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Moes BHT-002/BHT-006 control via MQTT","description":"Integrate your Moes BHT-002/BHT-006 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-10-03T08:44:52.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/BHT-002_BHT-006.md"}')}}]);
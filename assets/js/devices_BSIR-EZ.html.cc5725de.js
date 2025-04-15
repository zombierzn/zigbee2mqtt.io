"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21638],{4771:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>s});var a=t(6254);const d={},i=(0,t(15356).A)(d,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[7]||(o[7]=(0,a.Lk)("h1",{id:"bosch-bsir-ez",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#bosch-bsir-ez"},[(0,a.Lk)("span",null,"Bosch BSIR-EZ")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"BSIR-EZ")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Bosch"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Bosch")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Outdoor siren")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"alarm_state, light_delay, siren_delay, siren_duration, light_duration, siren_volume, siren_and_light, power_source, warning, test, tamper, battery, voltage, battery_low, ac_status")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/BSIR-EZ.png",alt:"Bosch BSIR-EZ"})])],-1))])]),o[8]||(o[8]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><p>You will need to add the install code from the back of the unit in order to pair the siren. If you do not complete this step the interview will fail and the unit will be shown as unsupported. On the back of the siren is a QR code and a 36 digit code that is called &quot;Install code&quot; - do NOT use this 36 digit code. Instead, scan the QR code with your phone and this will return a 91 long code. Use this code by going to Z2M GUI, Settings, Tools, &quot;Add Install Code&quot;.</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="alarm-state-binary" tabindex="-1"><a class="header-anchor" href="#alarm-state-binary"><span>Alarm state (binary)</span></a></h3><p>Alarm turn ON/OFF. Value can be found in the published state on the <code>alarm_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;alarm_state&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm_state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> alarm state is ON, if <code>OFF</code> OFF.</p><h3 id="light-delay-numeric" tabindex="-1"><a class="header-anchor" href="#light-delay-numeric"><span>Light delay (numeric)</span></a></h3><p>Flashing light delay. Value can be found in the published state on the <code>light_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;light_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>30</code>. The unit of this value is <code>s</code>.</p><h3 id="siren-delay-numeric" tabindex="-1"><a class="header-anchor" href="#siren-delay-numeric"><span>Siren delay (numeric)</span></a></h3><p>Siren alarm delay. Value can be found in the published state on the <code>siren_delay</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;siren_delay&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;siren_delay&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>30</code>. The unit of this value is <code>s</code>.</p><h3 id="siren-duration-numeric" tabindex="-1"><a class="header-anchor" href="#siren-duration-numeric"><span>Siren duration (numeric)</span></a></h3><p>Duration of the alarm siren. Value can be found in the published state on the <code>siren_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;siren_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;siren_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15</code>. The unit of this value is <code>m</code>.</p><h3 id="light-duration-numeric" tabindex="-1"><a class="header-anchor" href="#light-duration-numeric"><span>Light duration (numeric)</span></a></h3><p>Duration of the alarm light. Value can be found in the published state on the <code>light_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;light_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;light_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15</code>. The unit of this value is <code>m</code>.</p><h3 id="siren-volume-enum" tabindex="-1"><a class="header-anchor" href="#siren-volume-enum"><span>Siren volume (enum)</span></a></h3><p>Volume of the alarm. Value can be found in the published state on the <code>siren_volume</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;siren_volume&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;siren_volume&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="siren-and-light-enum" tabindex="-1"><a class="header-anchor" href="#siren-and-light-enum"><span>Siren and light (enum)</span></a></h3><p>Siren and Light behaviour during alarm . Value can be found in the published state on the <code>siren_and_light</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;siren_and_light&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;siren_and_light&quot;: NEW_VALUE}</code>. The possible values are: <code>only_light</code>, <code>only_siren</code>, <code>siren_and_light</code>.</p><h3 id="power-source-enum" tabindex="-1"><a class="header-anchor" href="#power-source-enum"><span>Power source (enum)</span></a></h3><p>Siren power source. Value can be found in the published state on the <code>power_source</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_source&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_source&quot;: NEW_VALUE}</code>. The possible values are: <code>solar_panel</code>, <code>ac_power_supply</code>, <code>dc_power_supply</code>.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite"><span>Warning (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li></ul><h3 id="test-binary" tabindex="-1"><a class="header-anchor" href="#test-binary"><span>Test (binary)</span></a></h3><p>Indicates whether the device is being tested. Value can be found in the published state on the <code>test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> test is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric"><span>Voltage (numeric)</span></a></h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="ac-status-binary" tabindex="-1"><a class="header-anchor" href="#ac-status-binary"><span>Ac status (binary)</span></a></h3><p>Is the device plugged in. Value can be found in the published state on the <code>ac_status</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> ac status is ON, if <code>false</code> OFF.</p>',34))])}]]),s=JSON.parse('{"path":"/devices/BSIR-EZ.html","title":"Bosch BSIR-EZ control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Bosch BSIR-EZ control via MQTT","description":"Integrate your Bosch BSIR-EZ via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-30T19:41:12.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/BSIR-EZ.md"}')}}]);
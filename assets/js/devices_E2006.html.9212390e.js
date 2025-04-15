"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[3949],{33557:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>c});var a=t(6254);const d={},i=(0,t(15356).A)(d,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[11]||(o[11]=(0,a.Lk)("h1",{id:"ikea-e2006",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ikea-e2006"},[(0,a.Lk)("span",null,"IKEA E2006")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"E2006")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=IKEA"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("IKEA")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"STARKVIND air purifier table")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"fan (state, mode), fan_speed, pm25, air_quality, led_enable, child_lock, replace_filter, filter_age, device_age, identify")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/E2006.png",alt:"IKEA E2006"})])],-1))])]),o[12]||(o[12]=(0,a.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,a.Lk)("span",null,"OTA updates")])],-1)),(0,a.Lk)("p",null,[o[8]||(o[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("OTA updates")]))),_:1}),o[9]||(o[9]=(0,a.eW)("."))]),o[13]||(o[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[10]||(o[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[14]||(o[14]=(0,a.Fv)('<ul><li><p><code>pm25_calibration</code>: Calibrates the pm25 value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>identify_timeout</code>: Sets the duration of the identification procedure in seconds (i.e., how long the device would flash).The value ranges from 1 to 30 seconds (default: 3). The value must be a number with a minimum value of <code>1</code> and with a with a maximum value of <code>30</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="fan" tabindex="-1"><a class="header-anchor" href="#fan"><span>Fan</span></a></h3><p>The current state of this fan is in the published state under the <code>fan_state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_state&quot;: &quot;ON&quot;}</code> or <code>{&quot;fan_state&quot;: &quot;OFF&quot;}</code>. To read the current state of this fan publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_state&quot;: &quot;&quot;}</code>. To change the mode publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;fan_mode&quot;: VALUE}</code> where <code>VALUE</code> can be: <code>off</code>, <code>auto</code>, <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code>, <code>5</code>, <code>6</code>, <code>7</code>, <code>8</code>, <code>9</code>.</p><h3 id="fan-speed-numeric" tabindex="-1"><a class="header-anchor" href="#fan-speed-numeric"><span>Fan speed (numeric)</span></a></h3><p>Current fan speed. Value can be found in the published state on the <code>fan_speed</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fan_speed&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>9</code>.</p><h3 id="pm25-numeric" tabindex="-1"><a class="header-anchor" href="#pm25-numeric"><span>PM25 (numeric)</span></a></h3><p>Measured PM2.5 (particulate matter) concentration. Value can be found in the published state on the <code>pm25</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pm25&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>µg/m³</code>.</p><h3 id="air-quality-enum" tabindex="-1"><a class="header-anchor" href="#air-quality-enum"><span>Air quality (enum)</span></a></h3><p>Calculated air quality. Value can be found in the published state on the <code>air_quality</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;air_quality&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>excellent</code>, <code>good</code>, <code>moderate</code>, <code>poor</code>, <code>unhealthy</code>, <code>hazardous</code>, <code>out_of_range</code>, <code>unknown</code>.</p><h3 id="led-enable-binary" tabindex="-1"><a class="header-anchor" href="#led-enable-binary"><span>Led enable (binary)</span></a></h3><p>Controls the LED. Value can be found in the published state on the <code>led_enable</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_enable&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> led enable is ON, if <code>false</code> OFF.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Controls physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="replace-filter-binary" tabindex="-1"><a class="header-anchor" href="#replace-filter-binary"><span>Replace filter (binary)</span></a></h3><p>Indicates if the filter is older than 6 months and needs replacing. Value can be found in the published state on the <code>replace_filter</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;replace_filter&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> replace filter is ON, if <code>false</code> OFF.</p><h3 id="filter-age-numeric" tabindex="-1"><a class="header-anchor" href="#filter-age-numeric"><span>Filter age (numeric)</span></a></h3><p>Duration the filter has been used. Value can be found in the published state on the <code>filter_age</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;filter_age&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>minutes</code>.</p><h3 id="device-age-numeric" tabindex="-1"><a class="header-anchor" href="#device-age-numeric"><span>Device age (numeric)</span></a></h3><p>Duration the air purifier has been used. Value can be found in the published state on the <code>device_age</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_age&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>minutes</code>.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Initiate device identification. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p>',22))])}]]),c=JSON.parse('{"path":"/devices/E2006.html","title":"IKEA E2006 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"IKEA E2006 control via MQTT","description":"Integrate your IKEA E2006 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-09-29T21:38:40.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/E2006.md"}')}}]);
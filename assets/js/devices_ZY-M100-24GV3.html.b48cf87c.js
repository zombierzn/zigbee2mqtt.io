"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[21485],{47566:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>n,data:()=>s});var i=a(6254);const o={},n=(0,a(15356).A)(o,[["render",function(e,t){const a=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[8]||(t[8]=(0,i.Lk)("h1",{id:"tuya-zy-m100-24gv3",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#tuya-zy-m100-24gv3"},[(0,i.Lk)("span",null,"Tuya ZY-M100-24GV3")])],-1)),(0,i.Lk)("table",null,[t[6]||(t[6]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th"),(0,i.Lk)("th")])],-1)),(0,i.Lk)("tbody",null,[t[2]||(t[2]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Model"),(0,i.Lk)("td",null,"ZY-M100-24GV3")],-1)),(0,i.Lk)("tr",null,[t[1]||(t[1]=(0,i.Lk)("td",null,"Vendor",-1)),(0,i.Lk)("td",null,[(0,i.bF)(a,{to:"/supported-devices/#v=Tuya"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Tuya")]))),_:1})])]),t[3]||(t[3]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Description"),(0,i.Lk)("td",null,"24G MmWave radar human presence motion sensor（added distance switch）")],-1)),t[4]||(t[4]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Exposes"),(0,i.Lk)("td",null,"state, presence, distance, find_switch, illuminance, move_sensitivity, presence_sensitivity, presence_timeout, detection_distance_min, detection_distance_max")],-1)),t[5]||(t[5]=(0,i.Lk)("tr",null,[(0,i.Lk)("td",null,"Picture"),(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZY-M100-24GV3.png",alt:"Tuya ZY-M100-24GV3"})])],-1))])]),t[9]||(t[9]=(0,i.Lk)("h2",{id:"spammy",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#spammy"},[(0,i.Lk)("span",null,"Spammy")])],-1)),t[10]||(t[10]=(0,i.Lk)("p",null,"Note that this device is very spammy (1-6 messages per second per device) which can hamper network performance.",-1)),t[11]||(t[11]=(0,i.Lk)("h2",{id:"options",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#options"},[(0,i.Lk)("span",null,"Options")])],-1)),(0,i.Lk)("p",null,[(0,i.Lk)("em",null,[(0,i.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,i.k6)((()=>t[7]||(t[7]=[(0,i.eW)("How to use device type specific configuration")]))),_:1})])]),t[12]||(t[12]=(0,i.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="state-enum" tabindex="-1"><a class="header-anchor" href="#state-enum"><span>State (enum)</span></a></h3><p>Presence state sensor. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>none</code>, <code>presence</code>, <code>move</code>.</p><h3 id="presence-binary" tabindex="-1"><a class="header-anchor" href="#presence-binary"><span>Presence (binary)</span></a></h3><p>Occupancy. Value can be found in the published state on the <code>presence</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> presence is ON, if <code>false</code> OFF.</p><h3 id="distance-numeric" tabindex="-1"><a class="header-anchor" href="#distance-numeric"><span>Distance (numeric)</span></a></h3><p>Target distance. Value can be found in the published state on the <code>distance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="find-switch-binary" tabindex="-1"><a class="header-anchor" href="#find-switch-binary"><span>Find switch (binary)</span></a></h3><p>distance switch. Value can be found in the published state on the <code>find_switch</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;find_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> find switch is ON, if <code>OFF</code> OFF.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Illuminance sensor. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="move-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#move-sensitivity-numeric"><span>Move sensitivity (numeric)</span></a></h3><p>Motion Sensitivity. Value can be found in the published state on the <code>move_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="presence-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#presence-sensitivity-numeric"><span>Presence sensitivity (numeric)</span></a></h3><p>Presence Sensitivity. Value can be found in the published state on the <code>presence_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="presence-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#presence-timeout-numeric"><span>Presence timeout (numeric)</span></a></h3><p>Fade time. Value can be found in the published state on the <code>presence_timeout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15000</code>. The unit of this value is <code>s</code>.</p><h3 id="detection-distance-min-numeric" tabindex="-1"><a class="header-anchor" href="#detection-distance-min-numeric"><span>Detection distance min (numeric)</span></a></h3><p>Minimum range. Value can be found in the published state on the <code>detection_distance_min</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_distance_min&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>6</code>. The unit of this value is <code>m</code>.</p><h3 id="detection-distance-max-numeric" tabindex="-1"><a class="header-anchor" href="#detection-distance-max-numeric"><span>Detection distance max (numeric)</span></a></h3><p>Maximum range. Value can be found in the published state on the <code>detection_distance_max</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detection_distance_max&quot;: NEW_VALUE}</code>. The minimal value is <code>0.5</code> and the maximum value is <code>9</code>. The unit of this value is <code>m</code>.</p>',22))])}]]),s=JSON.parse('{"path":"/devices/ZY-M100-24GV3.html","title":"Tuya ZY-M100-24GV3 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZY-M100-24GV3 control via MQTT","description":"Integrate your Tuya ZY-M100-24GV3 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-09-01T12:36:44.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/ZY-M100-24GV3.md"}')}}]);
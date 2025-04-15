"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88090],{23135:(e,t,i)=>{i.r(t),i.d(t,{comp:()=>r,data:()=>n});var a=i(6254);const o={},r=(0,i(15356).A)(o,[["render",function(e,t){const i=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[7]||(t[7]=(0,a.Lk)("h1",{id:"giex-qt06-2",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#giex-qt06-2"},[(0,a.Lk)("span",null,"GiEX QT06_2")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"QT06_2")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(i,{to:"/supported-devices/#v=GiEX"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("GiEX")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Water irrigation valve")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery, state, mode, cycle_irrigation_num_times, irrigation_start_time, irrigation_end_time, last_irrigation_duration, water_consumed, irrigation_target, cycle_irrigation_interval")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/QT06_2.png",alt:"GiEX QT06_2"})])],-1))])]),t[8]||(t[8]=(0,a.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="state-binary" tabindex="-1"><a class="header-anchor" href="#state-binary"><span>State (binary)</span></a></h3><p>State. Value can be found in the published state on the <code>state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> state is ON, if <code>OFF</code> OFF.</p><h3 id="mode-enum" tabindex="-1"><a class="header-anchor" href="#mode-enum"><span>Mode (enum)</span></a></h3><p>Irrigation mode. Value can be found in the published state on the <code>mode</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mode&quot;: NEW_VALUE}</code>. The possible values are: <code>duration</code>, <code>capacity</code>.</p><h3 id="cycle-irrigation-num-times-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-irrigation-num-times-numeric"><span>Cycle irrigation num times (numeric)</span></a></h3><p>Number of cycle irrigation times, set to 0 for single cycle. Value can be found in the published state on the <code>cycle_irrigation_num_times</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_irrigation_num_times&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="irrigation-start-time-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-start-time-numeric"><span>Irrigation start time (numeric)</span></a></h3><p>Last irrigation start time. Value can be found in the published state on the <code>irrigation_start_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="irrigation-end-time-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-end-time-numeric"><span>Irrigation end time (numeric)</span></a></h3><p>Last irrigation end time. Value can be found in the published state on the <code>irrigation_end_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="last-irrigation-duration-numeric" tabindex="-1"><a class="header-anchor" href="#last-irrigation-duration-numeric"><span>Last irrigation duration (numeric)</span></a></h3><p>Last irrigation duration. Value can be found in the published state on the <code>last_irrigation_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="water-consumed-numeric" tabindex="-1"><a class="header-anchor" href="#water-consumed-numeric"><span>Water consumed (numeric)</span></a></h3><p>Last irrigation water consumption. Value can be found in the published state on the <code>water_consumed</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>L</code>.</p><h3 id="irrigation-target-numeric" tabindex="-1"><a class="header-anchor" href="#irrigation-target-numeric"><span>Irrigation target (numeric)</span></a></h3><p>Irrigation target, duration in seconds or capacity in litres (depending on mode), set to 0 to leave the valve on indefinitely, for safety reasons the target will be forced to a minimum of 10 seconds in duration mode. Value can be found in the published state on the <code>irrigation_target</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;irrigation_target&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>seconds or litres</code>.</p><h3 id="cycle-irrigation-interval-numeric" tabindex="-1"><a class="header-anchor" href="#cycle-irrigation-interval-numeric"><span>Cycle irrigation interval (numeric)</span></a></h3><p>Cycle irrigation interval. Value can be found in the published state on the <code>cycle_irrigation_interval</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cycle_irrigation_interval&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>43200</code>. The unit of this value is <code>sec</code>.</p>',21))])}]]),n=JSON.parse('{"path":"/devices/QT06_2.html","title":"GiEX QT06_2 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"GiEX QT06_2 control via MQTT","description":"Integrate your GiEX QT06_2 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-03-30T17:14:41.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/QT06_2.md"}')}}]);
"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[29026],{76830:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>i,data:()=>d});var o=a(6254);const n={},i=(0,a(15356).A)(n,[["render",function(e,t){const a=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[t[7]||(t[7]=(0,o.Lk)("h1",{id:"qoto-qt-05m",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#qoto-qt-05m"},[(0,o.Lk)("span",null,"QOTO QT-05M")])],-1)),(0,o.Lk)("table",null,[t[6]||(t[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[t[2]||(t[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"QT-05M")],-1)),(0,o.Lk)("tr",null,[t[1]||(t[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(a,{to:"/supported-devices/#v=QOTO"},{default:(0,o.k6)((()=>t[0]||(t[0]=[(0,o.eW)("QOTO")]))),_:1})])]),t[3]||(t[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"Solar powered garden watering timer")],-1)),t[4]||(t[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"water_flow, last_watering_duration, remaining_watering_time, valve_state, valve_state_auto_shutdown, shutdown_timer, battery")],-1)),t[5]||(t[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/QT-05M.png",alt:"QOTO QT-05M"})])],-1))])]),t[8]||(t[8]=(0,o.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="water-flow-numeric" tabindex="-1"><a class="header-anchor" href="#water-flow-numeric"><span>Water flow (numeric)</span></a></h3><p>Current water flow in %.. Value can be found in the published state on the <code>water_flow</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="last-watering-duration-numeric" tabindex="-1"><a class="header-anchor" href="#last-watering-duration-numeric"><span>Last watering duration (numeric)</span></a></h3><p>Last watering duration in seconds.. Value can be found in the published state on the <code>last_watering_duration</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>sec</code>.</p><h3 id="remaining-watering-time-numeric" tabindex="-1"><a class="header-anchor" href="#remaining-watering-time-numeric"><span>Remaining watering time (numeric)</span></a></h3><p>Remaning watering time (for auto shutdown). Updates every minute, and every 10s in the last minute.. Value can be found in the published state on the <code>remaining_watering_time</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>sec</code>.</p><h3 id="valve-state-numeric" tabindex="-1"><a class="header-anchor" href="#valve-state-numeric"><span>Valve state (numeric)</span></a></h3><p>Set valve to %.. Value can be found in the published state on the <code>valve_state</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_state&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="valve-state-auto-shutdown-numeric" tabindex="-1"><a class="header-anchor" href="#valve-state-auto-shutdown-numeric"><span>Valve state auto shutdown (numeric)</span></a></h3><p>Set valve to % with auto shutdown. Must be set before setting the shutdown timer.. Value can be found in the published state on the <code>valve_state_auto_shutdown</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_state_auto_shutdown&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="shutdown-timer-numeric" tabindex="-1"><a class="header-anchor" href="#shutdown-timer-numeric"><span>Shutdown timer (numeric)</span></a></h3><p>Auto shutdown in seconds. Must be set after setting valve state auto shutdown.. Value can be found in the published state on the <code>shutdown_timer</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;shutdown_timer&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>14400</code>. The unit of this value is <code>sec</code>.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p>',15))])}]]),d=JSON.parse('{"path":"/devices/QT-05M.html","title":"QOTO QT-05M control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"QOTO QT-05M control via MQTT","description":"Integrate your QOTO QT-05M via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-08-31T11:26:27.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/QT-05M.md"}')}}]);
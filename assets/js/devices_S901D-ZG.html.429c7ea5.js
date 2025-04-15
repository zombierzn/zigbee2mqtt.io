"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[15611],{17289:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>r,data:()=>n});var d=a(6254);const o={},r=(0,a(15356).A)(o,[["render",function(e,t){const a=(0,d.g2)("RouteLink");return(0,d.uX)(),(0,d.CE)("div",null,[t[7]||(t[7]=(0,d.Lk)("h1",{id:"shyugj-s901d-zg",tabindex:"-1"},[(0,d.Lk)("a",{class:"header-anchor",href:"#shyugj-s901d-zg"},[(0,d.Lk)("span",null,"Shyugj S901D-ZG")])],-1)),(0,d.Lk)("table",null,[t[6]||(t[6]=(0,d.Lk)("thead",null,[(0,d.Lk)("tr",null,[(0,d.Lk)("th"),(0,d.Lk)("th")])],-1)),(0,d.Lk)("tbody",null,[t[2]||(t[2]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Model"),(0,d.Lk)("td",null,"S901D-ZG")],-1)),(0,d.Lk)("tr",null,[t[1]||(t[1]=(0,d.Lk)("td",null,"Vendor",-1)),(0,d.Lk)("td",null,[(0,d.bF)(a,{to:"/supported-devices/#v=Shyugj"},{default:(0,d.k6)((()=>t[0]||(t[0]=[(0,d.eW)("Shyugj")]))),_:1})])]),t[3]||(t[3]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Description"),(0,d.Lk)("td",null,"Door sensor")],-1)),t[4]||(t[4]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Exposes"),(0,d.Lk)("td",null,"battery, alarm_1, alarm_2, tamper, battery_low")],-1)),t[5]||(t[5]=(0,d.Lk)("tr",null,[(0,d.Lk)("td",null,"Picture"),(0,d.Lk)("td",null,[(0,d.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/S901D-ZG.png",alt:"Shyugj S901D-ZG"})])],-1))])]),t[8]||(t[8]=(0,d.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="factory-reset" tabindex="-1"><a class="header-anchor" href="#factory-reset"><span>Factory Reset</span></a></h3><p>Factory reset the sensor by holding the small rear button for 10 seconds. The LED will blink quickly in red for this duration, then go solid for three seconds, indicating a reset.</p><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>Short press the small rear button three times. If the device is not in the network, the LED will blink slowly in orange then attempt to join an available network. If the device is already in the network, the LED will blink green for five seconds - a factory reset is needed to pair to a new network.</p><h3 id="led-meanings" tabindex="-1"><a class="header-anchor" href="#led-meanings"><span>LED meanings</span></a></h3><table><thead><tr><th>Blink/Solid</th><th>Color</th><th>Duration</th><th>Meaning</th></tr></thead><tbody><tr><td>Blink</td><td>Green</td><td>7 secs</td><td>Power on</td></tr><tr><td>Blink</td><td>Orange</td><td>-</td><td>Pairing (timeout: 2 mins)</td></tr><tr><td>Solid</td><td>Green</td><td>-</td><td>Pairing successful</td></tr><tr><td>Solid</td><td>Orange</td><td>3 secs</td><td>Pairing failed</td></tr><tr><td>Blink</td><td>Orange</td><td>Once per minute</td><td>Low battery</td></tr><tr><td>Blink</td><td>Orange</td><td>Quickly</td><td>Lost network connection</td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;battery&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="alarm-1-binary" tabindex="-1"><a class="header-anchor" href="#alarm-1-binary"><span>Alarm 1 (binary)</span></a></h3><p>Indicates whether IAS Zone alarm 1 is active. Value can be found in the published state on the <code>alarm_1</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> alarm 1 is ON, if <code>false</code> OFF.</p><h3 id="alarm-2-binary" tabindex="-1"><a class="header-anchor" href="#alarm-2-binary"><span>Alarm 2 (binary)</span></a></h3><p>Indicates whether IAS Zone alarm 2 is active. Value can be found in the published state on the <code>alarm_2</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> alarm 2 is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates whether the battery of the device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p>',18))])}]]),n=JSON.parse('{"path":"/devices/S901D-ZG.html","title":"Shyugj S901D-ZG control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Shyugj S901D-ZG control via MQTT","description":"Integrate your Shyugj S901D-ZG via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-11-30T20:27:20.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/S901D-ZG.md"}')}}]);
"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[58184],{712:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>o,data:()=>i});var n=a(6254);const s={},o=(0,a(15356).A)(s,[["render",function(e,t){const a=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"owon-slc603",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#owon-slc603"},[(0,n.Lk)("span",null,"OWON SLC603")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"SLC603")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(a,{to:"/supported-devices/#v=OWON"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("OWON")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Zigbee remote dimmer")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"battery, battery_low, action")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SLC603.png",alt:"OWON SLC603"})])],-1))])]),t[9]||(t[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>To pair the dimmer with Zigbee2MQTT, follow these steps:</p><ol><li>Return the dimmer to default factory settings by pressing the reset button for 10 seconds (the LED indicator will flash 3 times in three seconds and flash again 3 times in 10 seconds).</li><li>Enable Zigbee2MQTT pairing mode.</li><li>Push reset button one time.</li><li>Push rotaty button one time.</li></ol><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',5)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(a,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric"><span>Battery (numeric)</span></a></h3><p>Remaining battery in %, can take up to 24 hours before reported. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>toggle</code>, <code>brightness_step_up</code>, <code>brightness_step_down</code>, <code>color_temperature_step_up</code>, <code>color_temperature_step_down</code>.</p>',9))])}]]),i=JSON.parse('{"path":"/devices/SLC603.html","title":"OWON SLC603 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"OWON SLC603 control via MQTT","description":"Integrate your OWON SLC603 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-12T16:00:00.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/SLC603.md"}')}}]);
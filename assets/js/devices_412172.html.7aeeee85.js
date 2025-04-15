"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[16655],{36333:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>s,data:()=>i});var o=t(6254);const n={},s=(0,t(15356).A)(n,[["render",function(e,a){const t=(0,o.g2)("RouteLink");return(0,o.uX)(),(0,o.CE)("div",null,[a[11]||(a[11]=(0,o.Lk)("h1",{id:"legrand-412172",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#legrand-412172"},[(0,o.Lk)("span",null,"Legrand 412172")])],-1)),(0,o.Lk)("table",null,[a[6]||(a[6]=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th"),(0,o.Lk)("th")])],-1)),(0,o.Lk)("tbody",null,[a[2]||(a[2]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Model"),(0,o.Lk)("td",null,"412172")],-1)),(0,o.Lk)("tr",null,[a[1]||(a[1]=(0,o.Lk)("td",null,"Vendor",-1)),(0,o.Lk)("td",null,[(0,o.bF)(t,{to:"/supported-devices/#v=Legrand"},{default:(0,o.k6)((()=>a[0]||(a[0]=[(0,o.eW)("Legrand")]))),_:1})])]),a[3]||(a[3]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Description"),(0,o.Lk)("td",null,"DIN power consumption module")],-1)),a[4]||(a[4]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Exposes"),(0,o.Lk)("td",null,"power, power_apparent, power_alarm_active, power_alarm")],-1)),a[5]||(a[5]=(0,o.Lk)("tr",null,[(0,o.Lk)("td",null,"Picture"),(0,o.Lk)("td",null,[(0,o.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/412172.png",alt:"Legrand 412172"})])],-1))])]),a[12]||(a[12]=(0,o.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,o.Lk)("span",null,"OTA updates")])],-1)),(0,o.Lk)("p",null,[a[8]||(a[8]=(0,o.eW)("This device supports OTA updates, for more information see ")),(0,o.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,o.k6)((()=>a[7]||(a[7]=[(0,o.eW)("OTA updates")]))),_:1}),a[9]||(a[9]=(0,o.eW)("."))]),a[13]||(a[13]=(0,o.Lk)("h2",{id:"options",tabindex:"-1"},[(0,o.Lk)("a",{class:"header-anchor",href:"#options"},[(0,o.Lk)("span",null,"Options")])],-1)),(0,o.Lk)("p",null,[(0,o.Lk)("em",null,[(0,o.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,o.k6)((()=>a[10]||(a[10]=[(0,o.eW)("How to use device type specific configuration")]))),_:1})])]),a[14]||(a[14]=(0,o.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>identity_effect</code>: Defines the identification effect to simplify the device identification. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml"><pre><code><span class="line"><span class="token key atrule">identity_effect</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">effect</span><span class="token punctuation">:</span> blink 3 <span class="token comment"># allowed: &#39;blink 3&#39;, &#39;fixed&#39;, &#39;blink green&#39;, &#39;blink blue&#39;</span></span>\n<span class="line">  <span class="token key atrule">color</span><span class="token punctuation">:</span> red <span class="token comment"># allowed: &#39;default&#39;, &#39;red&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;lightblue&#39;, &#39;yellow&#39;, &#39;pink&#39;, &#39;white&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-apparent-numeric" tabindex="-1"><a class="header-anchor" href="#power-apparent-numeric"><span>Power apparent (numeric)</span></a></h3><p>Instantaneous measured apparent power. Value can be found in the published state on the <code>power_apparent</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>VA</code>.</p><h3 id="power-alarm-active-binary" tabindex="-1"><a class="header-anchor" href="#power-alarm-active-binary"><span>Power alarm active (binary)</span></a></h3><p>Value can be found in the published state on the <code>power_alarm_active</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> power alarm active is ON, if <code>false</code> OFF.</p><h3 id="power-alarm-binary" tabindex="-1"><a class="header-anchor" href="#power-alarm-binary"><span>Power alarm (binary)</span></a></h3><p>Enable/disable the power alarm. Value can be found in the published state on the <code>power_alarm</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_alarm&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_alarm&quot;: NEW_VALUE}</code>. If value equals <code>true</code> power alarm is ON, if <code>false</code> OFF.</p>',11))])}]]),i=JSON.parse('{"path":"/devices/412172.html","title":"Legrand 412172 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand 412172 control via MQTT","description":"Integrate your Legrand 412172 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-11-01T18:54:40.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/412172.md"}')}}]);
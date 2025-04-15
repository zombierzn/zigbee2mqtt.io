"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[91194],{77794:(e,a,s)=>{s.r(a),s.d(a,{comp:()=>n,data:()=>p});var t=s(6254);const o={},n=(0,s(15356).A)(o,[["render",function(e,a){const s=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[a[11]||(a[11]=(0,t.Lk)("h1",{id:"tuya-ts0601-thermostat",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#tuya-ts0601-thermostat"},[(0,t.Lk)("span",null,"Tuya TS0601_thermostat")])],-1)),(0,t.Lk)("table",null,[a[7]||(a[7]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[a[2]||(a[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"TS0601_thermostat")],-1)),(0,t.Lk)("tr",null,[a[1]||(a[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(s,{to:"/supported-devices/#v=Tuya"},{default:(0,t.k6)((()=>a[0]||(a[0]=[(0,t.eW)("Tuya")]))),_:1})])]),a[3]||(a[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Radiator valve with thermostat")],-1)),a[4]||(a[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"child_lock, switch (state), window_open, battery_low, position, climate (current_heating_setpoint, local_temperature, system_mode, local_temperature_calibration, preset, running_state), away_preset_days, boost_time, comfort_temperature, eco_temperature, force, max_temperature, min_temperature, away_preset_temperature, week, workdays_schedule, holidays_schedule")],-1)),a[5]||(a[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS0601_thermostat.png",alt:"Tuya TS0601_thermostat"})])],-1)),a[6]||(a[6]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"White-label"),(0,t.Lk)("td",null,"Moes HY368, Moes HY369RT, SHOJZJ 378RT, Silvercrest TVR01, Immax 07732B, Evolveo Heat M30")],-1))])]),a[12]||(a[12]=(0,t.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><p>While pairing, keep the valve close to the coordinator.</p><ol><li><em>Turn the display on</em>: Short press home (🏠).</li><li><em>Enter settings</em>: Long press home (🏠) for 3sec.</li><li><em>Select WiFi settings</em>: Press the plus button (➕) button 4 times to see the digital <strong><code>5</code></strong> on the right hand side and the blinking WiFi logo.</li><li><em>Enter WiFi settings</em>: Press home (🏠) once again. Now only WiFi logo is showing without blinking.</li><li><em>Enable pairing mode</em>: Long press home (🏠). WiFi logo is now blinking.</li><li><em>Keep display on</em>: Touch home (🏠) every few seconds.</li></ol><h3 id="local-temperature" tabindex="-1"><a class="header-anchor" href="#local-temperature"><span>Local temperature</span></a></h3><p>If you&#39;d like to force device to send local_temperature you can use this MQTT command:</p><ul><li><code>topic</code>: zigbee2mqtt/FRIENDLY_NAME/set/local_temperature_calibration</li><li><code>payload</code>: YOUR_CURRENT_CALIBRATION_VALUE</li></ul><p>YOUR_CURRENT_CALIBRATION_VALUE can be 0, but if you calibrated temperature for this device send current value. After this command thermostat responds with two messages. One for calibration change confirmation, and other with current local_temperature.</p><h3 id="controlling-device-specific-features" tabindex="-1"><a class="header-anchor" href="#controlling-device-specific-features"><span>Controlling device specific features</span></a></h3><ul><li><p>If all you need is to control on and off, you can set &quot;force&quot; with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>.</p><p>The payload values are:<br> open -&gt; fully opens valve and stays there<br> close -&gt; fully closes valve and stays there<br> normal -&gt; normal valve operation</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;force&quot;</span><span class="token operator">:</span> <span class="token string">&quot;open&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Use topic <code>zigbee2mqtt/FRIENDLY_NAME/set/schedule</code> to set the schedule of the device with 6 timeslots on workdays or holidays (e.g. weekend). Example payload values are:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;workdays&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">]</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;holidays&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">18</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">21</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">22</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">19</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token punctuation">{</span><span class="token property">&quot;hour&quot;</span><span class="token operator">:</span><span class="token number">23</span><span class="token punctuation">,</span><span class="token property">&quot;minute&quot;</span><span class="token operator">:</span><span class="token number">30</span><span class="token punctuation">,</span><span class="token property">&quot;temperature&quot;</span><span class="token operator">:</span><span class="token number">15</span><span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">]</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can set &quot;week&quot; schedule pattern with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>. The payload values are: 5+2 -&gt; to be used when workdays for example are monday-friday and saturday &amp; sunday are holidays 6+1 -&gt; to be used when workdays for example are monday-saturday and sunday is a holiday 7 -&gt; to be used when workdays schedule will be used for the whole week</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;week&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5+2&quot;</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can set &quot;boost time&quot; with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>. But be aware that it rounds the values down to multiple of 100.</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;boost_time&quot;</span><span class="token operator">:</span> <span class="token number">200</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can set &quot;comfort temperature&quot; level on the device with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>.</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;comfort_temperature&quot;</span><span class="token operator">:</span> <span class="token number">21</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>You can set &quot;eco temperature&quot; level on the device with topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>.</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;eco_temperature&quot;</span><span class="token operator">:</span> <span class="token number">17</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',11)),(0,t.Lk)("p",null,[a[9]||(a[9]=(0,t.eW)("This device supports OTA updates, for more information see ")),(0,t.bF)(s,{to:"/guide/usage/ota_updates.html"},{default:(0,t.k6)((()=>a[8]||(a[8]=[(0,t.eW)("OTA updates")]))),_:1}),a[10]||(a[10]=(0,t.eW)("."))]),a[13]||(a[13]=(0,t.Fv)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="window-detection-switch" tabindex="-1"><a class="header-anchor" href="#window-detection-switch"><span>Window detection (switch)</span></a></h3><p>The current state of this switch is in the published state under the <code>window_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;window_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;window_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="window-open-binary" tabindex="-1"><a class="header-anchor" href="#window-open-binary"><span>Window open (binary)</span></a></h3><p>Window open?. Value can be found in the published state on the <code>window_open</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> window open is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="valve-detection-switch" tabindex="-1"><a class="header-anchor" href="#valve-detection-switch"><span>Valve detection (switch)</span></a></h3><p>The current state of this switch is in the published state under the <code>valve_detection</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_detection&quot;: &quot;ON&quot;}</code>, <code>{&quot;valve_detection&quot;: &quot;OFF&quot;}</code> or <code>{&quot;valve_detection&quot;: &quot;TOGGLE&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="position-numeric" tabindex="-1"><a class="header-anchor" href="#position-numeric"><span>Position (numeric)</span></a></h3><p>Position. Value can be found in the published state on the <code>position</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>current_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>local_temperature_calibration</code>, <code>preset</code>, <code>running_state</code>.</p><ul><li><code>current_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;current_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>35</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). Reading (<code>/get</code>) this attribute is not possible.</li><li><code>system_mode</code>: Mode of this device, in the <code>heat</code> mode the TS0601 will remain continuously heating, i.e. it does not regulate to the desired temperature. If you want TRV to properly regulate the temperature you need to use mode <code>auto</code> instead setting the desired temperature.. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>, <code>auto</code>, <code>off</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>schedule</code>, <code>manual</code>, <code>boost</code>, <code>complex</code>, <code>comfort</code>, <code>eco</code>, <code>away</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. Reading (<code>/get</code>) this attribute is not possible.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>The minimal value is <code>-9</code> and the maximum value is <code>9</code> with a step size of <code>0.5</code>.</li></ul><h3 id="auto-lock-switch" tabindex="-1"><a class="header-anchor" href="#auto-lock-switch"><span>Auto lock (switch)</span></a></h3><p>The current state of this switch is in the published state under the <code>auto_lock</code> property (value is <code>AUTO</code> or <code>MANUAL</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_lock&quot;: &quot;AUTO&quot;}</code>, <code>{&quot;auto_lock&quot;: &quot;MANUAL&quot;}</code> or <code>{&quot;auto_lock&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="away-mode-switch" tabindex="-1"><a class="header-anchor" href="#away-mode-switch"><span>Away mode (switch)</span></a></h3><p>The current state of this switch is in the published state under the <code>away_mode</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_mode&quot;: &quot;ON&quot;}</code>, <code>{&quot;away_mode&quot;: &quot;OFF&quot;}</code> or <code>{&quot;away_mode&quot;: &quot;undefined&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value.</p><h3 id="away-preset-days-numeric" tabindex="-1"><a class="header-anchor" href="#away-preset-days-numeric"><span>Away preset days (numeric)</span></a></h3><p>Away preset days. Value can be found in the published state on the <code>away_preset_days</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_preset_days&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>.</p><h3 id="boost-time-numeric" tabindex="-1"><a class="header-anchor" href="#boost-time-numeric"><span>Boost time (numeric)</span></a></h3><p>Boost time. Value can be found in the published state on the <code>boost_time</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>900</code>. The unit of this value is <code>s</code>.</p><h3 id="comfort-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#comfort-temperature-numeric"><span>Comfort temperature (numeric)</span></a></h3><p>Comfort temperature. Value can be found in the published state on the <code>comfort_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;comfort_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>30</code>. The unit of this value is <code>°C</code>.</p><h3 id="eco-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#eco-temperature-numeric"><span>Eco temperature (numeric)</span></a></h3><p>Eco temperature. Value can be found in the published state on the <code>eco_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;eco_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="force-enum" tabindex="-1"><a class="header-anchor" href="#force-enum"><span>Force (enum)</span></a></h3><p>Force the valve position. Value can be found in the published state on the <code>force</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;force&quot;: NEW_VALUE}</code>. The possible values are: <code>normal</code>, <code>open</code>, <code>close</code>.</p><h3 id="max-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#max-temperature-numeric"><span>Max temperature (numeric)</span></a></h3><p>Maximum temperature. Value can be found in the published state on the <code>max_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>16</code> and the maximum value is <code>70</code>. The unit of this value is <code>°C</code>.</p><h3 id="min-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#min-temperature-numeric"><span>Min temperature (numeric)</span></a></h3><p>Minimum temperature. Value can be found in the published state on the <code>min_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;min_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>15</code>. The unit of this value is <code>°C</code>.</p><h3 id="away-preset-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#away-preset-temperature-numeric"><span>Away preset temperature (numeric)</span></a></h3><p>Away preset temperature. Value can be found in the published state on the <code>away_preset_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;away_preset_temperature&quot;: NEW_VALUE}</code>. The minimal value is <code>-10</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="week-enum" tabindex="-1"><a class="header-anchor" href="#week-enum"><span>Week (enum)</span></a></h3><p>Week format user for schedule. Value can be found in the published state on the <code>week</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;week&quot;: NEW_VALUE}</code>. The possible values are: <code>5+2</code>, <code>6+1</code>, <code>7</code>.</p><h3 id="workdays-schedule-text" tabindex="-1"><a class="header-anchor" href="#workdays-schedule-text"><span>Workdays schedule (text)</span></a></h3><p>Workdays schedule, 6 entries max, example: &quot;00:20/5°C 01:20/5°C 6:59/15°C 18:00/5°C 20:00/5°C 23:30/5°C&quot;. Value can be found in the published state on the <code>workdays_schedule</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;workdays_schedule&quot;: NEW_VALUE}</code>.</p><h3 id="holidays-schedule-text" tabindex="-1"><a class="header-anchor" href="#holidays-schedule-text"><span>Holidays schedule (text)</span></a></h3><p>Holidays schedule, 6 entries max, example: &quot;00:20/5°C 01:20/5°C 6:59/15°C 18:00/5°C 20:00/5°C 23:30/5°C&quot;. Value can be found in the published state on the <code>holidays_schedule</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holidays_schedule&quot;: NEW_VALUE}</code>.</p>',42))])}]]),p=JSON.parse('{"path":"/devices/TS0601_thermostat.html","title":"Tuya TS0601_thermostat control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya TS0601_thermostat control via MQTT","description":"Integrate your Tuya TS0601_thermostat via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-10-30T12:58:50.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/TS0601_thermostat.md"}')}}]);
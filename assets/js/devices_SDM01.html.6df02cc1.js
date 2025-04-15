"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[96507],{2686:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>c,data:()=>n});var a=t(6254);const r={},c=(0,t(15356).A)(r,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"tuya-sdm01",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-sdm01"},[(0,a.Lk)("span",null,"Tuya SDM01")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"SDM01")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Tuya")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart energy monitor for 3P+N system")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"voltage_a, voltage_b, voltage_c, power_a, power_b, power_c, current_a, current_b, current_c, energy, produced_energy, power_factor, power, ac_frequency, energy_a, energy_b, energy_c, energy_produced_a, energy_produced_b, energy_produced_c, power_factor_a, power_factor_b, power_factor_c")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SDM01.png",alt:"Tuya SDM01"})])],-1))])]),o[9]||(o[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,a.Fv)('<ul><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>ac_frequency_calibration</code>: Calibrates the ac_frequency value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>ac_frequency_precision</code>: Number of digits after decimal point for ac_frequency, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="voltage-a-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-a-numeric"><span>Voltage a (numeric)</span></a></h3><p>Measured electrical potential value (phase A). Value can be found in the published state on the <code>voltage_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-b-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-b-numeric"><span>Voltage b (numeric)</span></a></h3><p>Measured electrical potential value (phase B). Value can be found in the published state on the <code>voltage_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="voltage-c-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-c-numeric"><span>Voltage c (numeric)</span></a></h3><p>Measured electrical potential value (phase C). Value can be found in the published state on the <code>voltage_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="power-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-a-numeric"><span>Power a (numeric)</span></a></h3><p>Instantaneous measured power (phase A). Value can be found in the published state on the <code>power_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-b-numeric"><span>Power b (numeric)</span></a></h3><p>Instantaneous measured power (phase B). Value can be found in the published state on the <code>power_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="power-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-c-numeric"><span>Power c (numeric)</span></a></h3><p>Instantaneous measured power (phase C). Value can be found in the published state on the <code>power_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-a-numeric" tabindex="-1"><a class="header-anchor" href="#current-a-numeric"><span>Current a (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase A). Value can be found in the published state on the <code>current_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-b-numeric" tabindex="-1"><a class="header-anchor" href="#current-b-numeric"><span>Current b (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase B). Value can be found in the published state on the <code>current_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="current-c-numeric" tabindex="-1"><a class="header-anchor" href="#current-c-numeric"><span>Current c (numeric)</span></a></h3><p>Instantaneous measured electrical current (phase C). Value can be found in the published state on the <code>current_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Total forward active energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="produced-energy-numeric" tabindex="-1"><a class="header-anchor" href="#produced-energy-numeric"><span>Produced energy (numeric)</span></a></h3><p>Total reverse active energy. Value can be found in the published state on the <code>produced_energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-factor-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-numeric"><span>Power factor (numeric)</span></a></h3><p>Total power factor. Value can be found in the published state on the <code>power_factor</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Total active power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="ac-frequency-numeric" tabindex="-1"><a class="header-anchor" href="#ac-frequency-numeric"><span>AC frequency (numeric)</span></a></h3><p>Measured electrical AC frequency. Value can be found in the published state on the <code>ac_frequency</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>Hz</code>.</p><h3 id="energy-a-numeric" tabindex="-1"><a class="header-anchor" href="#energy-a-numeric"><span>Energy a (numeric)</span></a></h3><p>Sum of consumed energy (phase A). Value can be found in the published state on the <code>energy_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-b-numeric" tabindex="-1"><a class="header-anchor" href="#energy-b-numeric"><span>Energy b (numeric)</span></a></h3><p>Sum of consumed energy (phase B). Value can be found in the published state on the <code>energy_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-c-numeric" tabindex="-1"><a class="header-anchor" href="#energy-c-numeric"><span>Energy c (numeric)</span></a></h3><p>Sum of consumed energy (phase C). Value can be found in the published state on the <code>energy_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-a-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-a-numeric"><span>Energy produced a (numeric)</span></a></h3><p>Sum of produced energy (phase A). Value can be found in the published state on the <code>energy_produced_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-b-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-b-numeric"><span>Energy produced b (numeric)</span></a></h3><p>Sum of produced energy (phase B). Value can be found in the published state on the <code>energy_produced_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="energy-produced-c-numeric" tabindex="-1"><a class="header-anchor" href="#energy-produced-c-numeric"><span>Energy produced c (numeric)</span></a></h3><p>Sum of produced energy (phase C). Value can be found in the published state on the <code>energy_produced_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="power-factor-a-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-a-numeric"><span>Power factor a (numeric)</span></a></h3><p>Instantaneous measured power factor (phase A). Value can be found in the published state on the <code>power_factor_a</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-b-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-b-numeric"><span>Power factor b (numeric)</span></a></h3><p>Instantaneous measured power factor (phase B). Value can be found in the published state on the <code>power_factor_b</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="power-factor-c-numeric" tabindex="-1"><a class="header-anchor" href="#power-factor-c-numeric"><span>Power factor c (numeric)</span></a></h3><p>Instantaneous measured power factor (phase C). Value can be found in the published state on the <code>power_factor_c</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p>',48))])}]]),n=JSON.parse('{"path":"/devices/SDM01.html","title":"Tuya SDM01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya SDM01 control via MQTT","description":"Integrate your Tuya SDM01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-04-29T19:24:38.000Z"},"git":{"updatedTime":1744661151000,"contributors":[{"name":"dependabot[bot]","username":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com","commits":2,"url":"https://github.com/dependabot[bot]"}],"changelog":[{"hash":"a816bae8dce9784ebf5154d92161202dc84de4de","time":1744661151000,"email":"49699333+dependabot[bot]@users.noreply.github.com","author":"dependabot[bot]","message":"Bump the all group with 8 updates (#3692)","coAuthors":[{"name":"dependabot[bot]","email":"49699333+dependabot[bot]@users.noreply.github.com"}]}]},"filePathRelative":"devices/SDM01.md"}')}}]);
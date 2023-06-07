import { c as create_ssr_component, s as setContext, e as escape, a as add_attribute, b as compute_slots, d as compute_rest_props, g as getContext, f as spread, h as escape_attribute_value, i as escape_object, j as subscribe, v as validate_component, l as each } from "../../chunks/index2.js";
import { S as ServerInfoPanel } from "../../chunks/ServerInfoPanel.js";
import { s as servers, I as Icon, T as Toaster } from "../../chunks/Toaster.js";
import { t as tabSet } from "../../chunks/TabSet.js";
import { p as page } from "../../chunks/stores.js";
const cBase$1 = "space-y-4";
const cList = "flex overflow-x-auto hide-scrollbar";
const cPanel = "";
const TabGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesList;
  let classesPanel;
  let $$slots = compute_slots(slots);
  let { justify = "justify-start" } = $$props;
  let { border = "border-b border-surface-400-500-token" } = $$props;
  let { active = "border-b-2 border-surface-900-50-token" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { flex = "flex-none" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { rounded = "rounded-tl-container-token rounded-tr-container-token" } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { regionList = "" } = $$props;
  let { regionPanel = "" } = $$props;
  let { labelledby = "" } = $$props;
  let { panel = "" } = $$props;
  setContext("active", active);
  setContext("hover", hover);
  setContext("flex", flex);
  setContext("padding", padding);
  setContext("rounded", rounded);
  setContext("spacing", spacing);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.regionList === void 0 && $$bindings.regionList && regionList !== void 0)
    $$bindings.regionList(regionList);
  if ($$props.regionPanel === void 0 && $$bindings.regionPanel && regionPanel !== void 0)
    $$bindings.regionPanel(regionPanel);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  if ($$props.panel === void 0 && $$bindings.panel && panel !== void 0)
    $$bindings.panel(panel);
  classesBase = `${cBase$1} ${$$props.class ?? ""}`;
  classesList = `${cList} ${justify} ${border} ${regionList}`;
  classesPanel = `${cPanel} ${regionPanel}`;
  return `<div class="${"tab-group " + escape(classesBase, true)}" data-testid="tab-group">
	<div class="${"tab-list " + escape(classesList, true)}" role="tablist"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>
	
	${$$slots.panel ? `<div class="${"tab-panel " + escape(classesPanel, true)}" role="tabpanel"${add_attribute("aria-labelledby", panel, 0)} tabindex="0">${slots.panel ? slots.panel({}) : ``}</div>` : ``}</div>`;
});
const cBase = "text-center cursor-pointer transition-colors duration-100";
const cInterface = "";
const Tab = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesInterface;
  let classesTab;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "controls",
    "regionTab",
    "active",
    "hover",
    "flex",
    "padding",
    "rounded",
    "spacing"
  ]);
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { controls = "" } = $$props;
  let { regionTab = "" } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { flex = getContext("flex") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { spacing = getContext("spacing") } = $$props;
  let elemInput;
  function prunedRestProps() {
    delete $$restProps.class;
    return $$restProps;
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.controls === void 0 && $$bindings.controls && controls !== void 0)
    $$bindings.controls(controls);
  if ($$props.regionTab === void 0 && $$bindings.regionTab && regionTab !== void 0)
    $$bindings.regionTab(regionTab);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.flex === void 0 && $$bindings.flex && flex !== void 0)
    $$bindings.flex(flex);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  selected = value === group;
  classesActive = selected ? active : hover;
  classesBase = `${cBase} ${flex} ${padding} ${rounded} ${classesActive} ${$$props.class ?? ""}`;
  classesInterface = `${cInterface} ${spacing}`;
  classesTab = `${regionTab}`;
  return `<label${add_attribute("class", classesBase, 0)}>
	<div class="${"tab " + escape(classesTab, true)}" data-testid="tab" role="tab"${add_attribute("aria-controls", controls, 0)}${add_attribute("aria-selected", selected, 0)}${add_attribute("tabindex", selected ? 0 : -1, 0)}>
		<div class="h-0 w-0 overflow-hidden"><input${spread(
    [
      { type: "radio" },
      { name: escape_attribute_value(name) },
      { value: escape_attribute_value(value) },
      escape_object(prunedRestProps()),
      { tabindex: "-1" }
    ],
    {}
  )}${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}></div>
		
		<div class="${"tab-interface " + escape(classesInterface, true)}">${$$slots.lead ? `<div class="tab-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
			<div class="tab-label">${slots.default ? slots.default({}) : ``}</div></div></div></label>`;
});
const plus = {
  plus: {
    width: 1408,
    height: 1792,
    paths: [
      {
        d: "M1408 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"
      }
    ]
  }
};
const minus = {
  minus: {
    width: 1408,
    height: 1792,
    paths: [
      {
        d: "M1408 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"
      }
    ]
  }
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  let $tabSet, $$unsubscribe_tabSet;
  let $servers, $$unsubscribe_servers;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$unsubscribe_tabSet = subscribe(tabSet, (value) => $tabSet = value);
  $$unsubscribe_servers = subscribe(servers, (value) => $servers = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="m-4 bg-surface-900"><div class="mx-auto container relative"><h1 class="p-2">Servers Dashboard</h1>
		${validate_component(TabGroup, "TabGroup").$$render($$result, {}, {}, {
      panel: () => {
        return `${$servers[$tabSet] != void 0 ? `${validate_component(ServerInfoPanel, "ServerInfoPanel").$$render($$result, { server: $servers[$tabSet] }, {}, {})}` : `<div class="p-4"><div class="mt-4 text-center">Hi there! Add a server to see it&#39;s current instance data. <br>
							You can also add/start/stop server instances on each server <br>
							via the dashboard. 
						</div></div>`}
			`;
      },
      default: () => {
        return `${each($servers, (s) => {
          return `${validate_component(Tab, "Tab").$$render(
            $$result,
            {
              name: s.name,
              value: $servers.indexOf(s),
              group: $tabSet
            },
            {
              group: ($$value) => {
                $tabSet = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${escape(s.name)}`;
              }
            }
          )}`;
        })}
			<div class="flex absolute right-0"><div class="btn bg-secondary-500 flex-1"><div>${validate_component(Icon, "Icon").$$render($$result, { data: plus }, {}, {})}</div></div>
				<div class="btn bg-error-500 flex-1"><div>${validate_component(Icon, "Icon").$$render($$result, { data: minus }, {}, {})}</div></div></div>`;
      }
    })}</div></div>
${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_page();
  $$unsubscribe_tabSet();
  $$unsubscribe_servers();
  return $$rendered;
});
export {
  Page as default
};

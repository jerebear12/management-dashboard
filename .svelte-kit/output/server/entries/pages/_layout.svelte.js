import { c as create_ssr_component, e as escape, a as add_attribute, b as compute_slots, s as setContext, g as getContext, d as compute_rest_props, f as spread, h as escape_attribute_value, i as escape_object, j as subscribe, k as createEventDispatcher, v as validate_component, m as missing_component, l as each } from "../../chunks/index2.js";
import { w as writable } from "../../chunks/index.js";
import { s as servers, I as Icon, T as Toaster } from "../../chunks/Toaster.js";
import { computePosition, autoUpdate, offset, shift, flip, arrow } from "@floating-ui/dom";
import { p as page } from "../../chunks/stores.js";
import { t as tabSet } from "../../chunks/TabSet.js";
const themeRocket = "";
const skeleton = "";
const app = "";
const storePopup = writable(void 0);
function modalService() {
  const { subscribe: subscribe2, set, update } = writable([]);
  return {
    subscribe: subscribe2,
    set,
    update,
    /** Append to end of queue. */
    trigger: (modal) => update((mStore) => {
      mStore.push(modal);
      return mStore;
    }),
    /**  Remove first item in queue. */
    close: () => update((mStore) => {
      if (mStore.length > 0)
        mStore.shift();
      return mStore;
    }),
    /** Remove all items from queue. */
    clear: () => set([])
  };
}
const modalStore = modalService();
const cBase$4 = "flex flex-col";
const cRowMain = "grid items-center";
const cRowHeadline = "";
const cSlotLead = "flex-none flex justify-between items-center";
const cSlotDefault = "flex-auto";
const cSlotTrail = "flex-none flex items-center space-x-4";
const AppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesRowMain;
  let classesRowHeadline;
  let classesSlotLead;
  let classesSlotDefault;
  let classesSlotTrail;
  let $$slots = compute_slots(slots);
  let { background = "bg-surface-100-800-token" } = $$props;
  let { border = "" } = $$props;
  let { padding = "p-4" } = $$props;
  let { shadow = "" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { gridColumns = "grid-cols-[auto_1fr_auto]" } = $$props;
  let { gap = "gap-4" } = $$props;
  let { regionRowMain = "" } = $$props;
  let { regionRowHeadline = "" } = $$props;
  let { slotLead = "" } = $$props;
  let { slotDefault = "" } = $$props;
  let { slotTrail = "" } = $$props;
  let { label = "" } = $$props;
  let { labelledby = "" } = $$props;
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.gridColumns === void 0 && $$bindings.gridColumns && gridColumns !== void 0)
    $$bindings.gridColumns(gridColumns);
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.regionRowMain === void 0 && $$bindings.regionRowMain && regionRowMain !== void 0)
    $$bindings.regionRowMain(regionRowMain);
  if ($$props.regionRowHeadline === void 0 && $$bindings.regionRowHeadline && regionRowHeadline !== void 0)
    $$bindings.regionRowHeadline(regionRowHeadline);
  if ($$props.slotLead === void 0 && $$bindings.slotLead && slotLead !== void 0)
    $$bindings.slotLead(slotLead);
  if ($$props.slotDefault === void 0 && $$bindings.slotDefault && slotDefault !== void 0)
    $$bindings.slotDefault(slotDefault);
  if ($$props.slotTrail === void 0 && $$bindings.slotTrail && slotTrail !== void 0)
    $$bindings.slotTrail(slotTrail);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$4} ${background} ${border} ${spacing} ${padding} ${shadow} ${$$props.class ?? ""}`;
  classesRowMain = `${cRowMain} ${gridColumns} ${gap} ${regionRowMain}`;
  classesRowHeadline = `${cRowHeadline} ${regionRowHeadline}`;
  classesSlotLead = `${cSlotLead} ${slotLead}`;
  classesSlotDefault = `${cSlotDefault} ${slotDefault}`;
  classesSlotTrail = `${cSlotTrail} ${slotTrail}`;
  return `<div class="${"app-bar " + escape(classesBase, true)}" data-testid="app-bar" role="toolbar"${add_attribute("aria-label", label, 0)}${add_attribute("aria-labelledby", labelledby, 0)}>
	<div class="${"app-bar-row-main " + escape(classesRowMain, true)}">
		${$$slots.lead ? `<div class="${"app-bar-slot-lead " + escape(classesSlotLead, true)}">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
		
		<div class="${"app-bar-slot-default " + escape(classesSlotDefault, true)}">${slots.default ? slots.default({}) : ``}</div>
		
		${$$slots.trail ? `<div class="${"app-bar-slot-trail " + escape(classesSlotTrail, true)}">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div>
	
	${$$slots.headline ? `<div class="${"app-bar-row-headline " + escape(classesRowHeadline, true)}">${slots.headline ? slots.headline({}) : ``}</div>` : ``}</div>`;
});
const cBaseAppShell = "w-full h-full flex flex-col overflow-hidden";
const cContentArea = "w-full h-full flex overflow-hidden";
const cPage = "flex-1 overflow-x-hidden flex flex-col";
const cSidebarLeft = "flex-none overflow-x-hidden overflow-y-auto";
const cSidebarRight = "flex-none overflow-x-hidden overflow-y-auto";
const AppShell = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesHeader;
  let classesSidebarLeft;
  let classesSidebarRight;
  let classesPageHeader;
  let classesPageContent;
  let classesPageFooter;
  let classesFooter;
  let $$slots = compute_slots(slots);
  let { regionPage = "" } = $$props;
  let { slotHeader = "z-10" } = $$props;
  let { slotSidebarLeft = "w-auto" } = $$props;
  let { slotSidebarRight = "w-auto" } = $$props;
  let { slotPageHeader = "" } = $$props;
  let { slotPageContent = "" } = $$props;
  let { slotPageFooter = "" } = $$props;
  let { slotFooter = "" } = $$props;
  if ($$props.regionPage === void 0 && $$bindings.regionPage && regionPage !== void 0)
    $$bindings.regionPage(regionPage);
  if ($$props.slotHeader === void 0 && $$bindings.slotHeader && slotHeader !== void 0)
    $$bindings.slotHeader(slotHeader);
  if ($$props.slotSidebarLeft === void 0 && $$bindings.slotSidebarLeft && slotSidebarLeft !== void 0)
    $$bindings.slotSidebarLeft(slotSidebarLeft);
  if ($$props.slotSidebarRight === void 0 && $$bindings.slotSidebarRight && slotSidebarRight !== void 0)
    $$bindings.slotSidebarRight(slotSidebarRight);
  if ($$props.slotPageHeader === void 0 && $$bindings.slotPageHeader && slotPageHeader !== void 0)
    $$bindings.slotPageHeader(slotPageHeader);
  if ($$props.slotPageContent === void 0 && $$bindings.slotPageContent && slotPageContent !== void 0)
    $$bindings.slotPageContent(slotPageContent);
  if ($$props.slotPageFooter === void 0 && $$bindings.slotPageFooter && slotPageFooter !== void 0)
    $$bindings.slotPageFooter(slotPageFooter);
  if ($$props.slotFooter === void 0 && $$bindings.slotFooter && slotFooter !== void 0)
    $$bindings.slotFooter(slotFooter);
  classesBase = `${cBaseAppShell} ${$$props.class ?? ""}`;
  classesHeader = `${slotHeader}`;
  classesSidebarLeft = `${cSidebarLeft} ${slotSidebarLeft}`;
  classesSidebarRight = `${cSidebarRight} ${slotSidebarRight}`;
  classesPageHeader = `${slotPageHeader}`;
  classesPageContent = `${slotPageContent}`;
  classesPageFooter = `${slotPageFooter}`;
  classesFooter = `${slotFooter}`;
  return `<div id="appShell"${add_attribute("class", classesBase, 0)} data-testid="app-shell">
	${$$slots.header ? `<header id="shell-header" class="${"flex-none " + escape(classesHeader, true)}">${slots.header ? slots.header({}) : ``}</header>` : ``}

	
	<div class="${"flex-auto " + escape(cContentArea, true)}">
		${$$slots.sidebarLeft ? `<aside id="sidebar-left"${add_attribute("class", classesSidebarLeft, 0)}>${slots.sidebarLeft ? slots.sidebarLeft({}) : ``}</aside>` : ``}

		
		<div id="page" class="${escape(regionPage, true) + " " + escape(cPage, true)}">
			${$$slots.pageHeader ? `<header id="page-header" class="${"flex-none " + escape(classesPageHeader, true)}">${slots.pageHeader ? slots.pageHeader({}) : `(slot:header)`}</header>` : ``}

			
			<main id="page-content" class="${"flex-auto " + escape(classesPageContent, true)}">${slots.default ? slots.default({}) : ``}</main>

			
			${$$slots.pageFooter ? `<footer id="page-footer" class="${"flex-none " + escape(classesPageFooter, true)}">${slots.pageFooter ? slots.pageFooter({}) : `(slot:footer)`}</footer>` : ``}</div>

		
		${$$slots.sidebarRight ? `<aside id="sidebar-right"${add_attribute("class", classesSidebarRight, 0)}>${slots.sidebarRight ? slots.sidebarRight({}) : ``}</aside>` : ``}</div>

	
	${$$slots.footer ? `<footer id="shell-footer" class="${"flex-none " + escape(classesFooter, true)}">${slots.footer ? slots.footer({}) : ``}</footer>` : ``}</div>`;
});
const cBase$3 = "";
const ListBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { multiple = false } = $$props;
  let { spacing = "space-y-1" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { padding = "px-4 py-2" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("multiple", multiple);
  setContext("rounded", rounded);
  setContext("active", active);
  setContext("hover", hover);
  setContext("padding", padding);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$3} ${spacing} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"listbox " + escape(classesBase, true)}" role="listbox"${add_attribute("aria-labelledby", labelledby, 0)} data-testid="listbox">${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase$2 = "cursor-pointer -outline-offset-[3px]";
const cLabel = "flex items-center space-x-4";
function areDeeplyEqual(param1, param2) {
  if (param1 === param2)
    return true;
  if (!(param1 instanceof Object) || !(param2 instanceof Object))
    return false;
  const keys1 = Object.keys(param1);
  const keys2 = Object.keys(param2);
  if (keys1.length !== keys2.length)
    return false;
  for (const key of keys1) {
    const value1 = param1[key];
    const value2 = param2[key];
    if (!areDeeplyEqual(value1, value2))
      return false;
  }
  return true;
}
const ListBoxItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected;
  let classesActive;
  let classesBase;
  let classesLabel;
  let $$slots = compute_slots(slots);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { multiple = getContext("multiple") } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let checked;
  let elemInput;
  function updateCheckbox(group2) {
    checked = group2.indexOf(value) >= 0;
  }
  function updateGroup(checked2) {
    const index = group.indexOf(value);
    if (checked2) {
      if (index < 0) {
        group.push(value);
        group = group;
      }
    } else {
      if (index >= 0) {
        group.splice(index, 1);
        group = group;
      }
    }
  }
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  {
    if (multiple)
      updateCheckbox(group);
  }
  {
    if (multiple)
      updateGroup(checked);
  }
  selected = multiple ? group.some((groupVal) => areDeeplyEqual(value, groupVal)) : areDeeplyEqual(group, value);
  classesActive = selected ? active : hover;
  classesBase = `${cBase$2} ${rounded} ${padding} ${classesActive} ${$$props.class ?? ""}`;
  classesLabel = `${cLabel}`;
  return `<label>
	<div class="${"listbox-item " + escape(classesBase, true)}" data-testid="listbox-item" role="option"${add_attribute("aria-selected", selected, 0)} tabindex="0">
		<div class="h-0 w-0 overflow-hidden">${multiple ? `<input type="checkbox"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${add_attribute("checked", checked, 1)}>` : `<input type="radio"${add_attribute("name", name, 0)}${add_attribute("value", value, 0)} tabindex="-1"${add_attribute("this", elemInput, 0)}${value === group ? add_attribute("checked", true, 1) : ""}>`}</div>
		
		<div class="${"listbox-label " + escape(classesLabel, true)}">
			${$$slots.lead ? `<div class="listbox-label-lead">${slots.lead ? slots.lead({}) : ``}</div>` : ``}
			
			<div class="listbox-label-content flex-1">${slots.default ? slots.default({}) : ``}</div>
			
			${$$slots.trail ? `<div class="listbox-label-trail">${slots.trail ? slots.trail({}) : ``}</div>` : ``}</div></div></label>`;
});
const cBase$1 = "p-1";
const RadioGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let { display = "inline-flex" } = $$props;
  let { background = "bg-surface-200-700-token" } = $$props;
  let { border = "border-token border-surface-400-500-token" } = $$props;
  let { spacing = "space-x-1" } = $$props;
  let { rounded = "rounded-token" } = $$props;
  let { padding = "px-4 py-1" } = $$props;
  let { active = "variant-filled" } = $$props;
  let { hover = "hover:variant-soft" } = $$props;
  let { color = "" } = $$props;
  let { fill = "" } = $$props;
  let { labelledby = "" } = $$props;
  setContext("rounded", rounded);
  setContext("padding", padding);
  setContext("active", active);
  setContext("hover", hover);
  setContext("color", color);
  setContext("fill", fill);
  if ($$props.display === void 0 && $$bindings.display && display !== void 0)
    $$bindings.display(display);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.labelledby === void 0 && $$bindings.labelledby && labelledby !== void 0)
    $$bindings.labelledby(labelledby);
  classesBase = `${cBase$1} ${display} ${background} ${border} ${spacing} ${rounded} ${$$props.class ?? ""}`;
  return `<div class="${"radio-group " + escape(classesBase, true)}" data-testid="radio-group" role="radiogroup"${add_attribute("aria-labelledby", labelledby, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const cBase = "flex-auto text-base text-center cursor-pointer";
const cDisabled = "opacity-50 cursor-not-allowed";
const RadioItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let checked;
  let classesActive;
  let classesDisabled;
  let classesBase;
  let $$restProps = compute_rest_props($$props, [
    "group",
    "name",
    "value",
    "title",
    "label",
    "rounded",
    "padding",
    "active",
    "hover",
    "color",
    "fill"
  ]);
  let { group } = $$props;
  let { name } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { label = "" } = $$props;
  let { rounded = getContext("rounded") } = $$props;
  let { padding = getContext("padding") } = $$props;
  let { active = getContext("active") } = $$props;
  let { hover = getContext("hover") } = $$props;
  let { color = getContext("color") } = $$props;
  let { fill = getContext("fill") } = $$props;
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
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  checked = value === group;
  classesActive = checked ? `${active} ${color} ${fill}` : hover;
  classesDisabled = $$props.disabled ? cDisabled : "";
  classesBase = `${cBase} ${padding} ${rounded} ${classesActive} ${classesDisabled} ${$$props.class ?? ""}`;
  return `<label>
	<div class="${"radio-item " + escape(classesBase, true)}" data-testid="radio-item" role="radio"${add_attribute("aria-checked", checked, 0)}${add_attribute("aria-label", label, 0)} tabindex="0"${add_attribute("title", title, 0)}>
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
		${slots.default ? slots.default({}) : ``}</div></label>`;
});
const cBackdrop = "fixed top-0 left-0 right-0 bottom-0";
const cTransitionLayer = "w-full h-full p-4 overflow-y-auto flex justify-center";
const cModal = "block";
const cModalImage = "w-full h-auto";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cPosition;
  let classesBackdrop;
  let classesTransitionLayer;
  let classesModal;
  let parent;
  let $modalStore, $$unsubscribe_modalStore;
  $$unsubscribe_modalStore = subscribe(modalStore, (value) => $modalStore = value);
  createEventDispatcher();
  let { position = "items-center" } = $$props;
  let { components = {} } = $$props;
  let { duration = 150 } = $$props;
  let { flyOpacity = 0 } = $$props;
  let { flyX = 0 } = $$props;
  let { flyY = 100 } = $$props;
  let { background = "bg-surface-100-800-token" } = $$props;
  let { width = "w-modal" } = $$props;
  let { height = "h-auto" } = $$props;
  let { padding = "p-4" } = $$props;
  let { spacing = "space-y-4" } = $$props;
  let { rounded = "rounded-container-token" } = $$props;
  let { shadow = "shadow-xl" } = $$props;
  let { zIndex = "z-[999]" } = $$props;
  let { buttonNeutral = "variant-ghost-surface" } = $$props;
  let { buttonPositive = "variant-filled" } = $$props;
  let { buttonTextCancel = "Cancel" } = $$props;
  let { buttonTextConfirm = "Confirm" } = $$props;
  let { buttonTextSubmit = "Submit" } = $$props;
  let { regionBackdrop = "bg-surface-backdrop-token" } = $$props;
  let { regionHeader = "text-2xl font-bold" } = $$props;
  let { regionBody = "max-h-[200px] overflow-hidden" } = $$props;
  let { regionFooter = "flex justify-end space-x-2" } = $$props;
  let promptValue;
  const buttonTextDefaults = {
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit
  };
  let currentComponent;
  modalStore.subscribe((modals) => {
    if (!modals.length)
      return;
    if (modals[0].type === "prompt")
      promptValue = modals[0].value;
    buttonTextCancel = modals[0].buttonTextCancel || buttonTextDefaults.buttonTextCancel;
    buttonTextConfirm = modals[0].buttonTextConfirm || buttonTextDefaults.buttonTextConfirm;
    buttonTextSubmit = modals[0].buttonTextSubmit || buttonTextDefaults.buttonTextSubmit;
    currentComponent = typeof modals[0].component === "string" ? components[modals[0].component] : modals[0].component;
  });
  function onClose() {
    if ($modalStore[0].response)
      $modalStore[0].response(false);
    modalStore.close();
  }
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.flyOpacity === void 0 && $$bindings.flyOpacity && flyOpacity !== void 0)
    $$bindings.flyOpacity(flyOpacity);
  if ($$props.flyX === void 0 && $$bindings.flyX && flyX !== void 0)
    $$bindings.flyX(flyX);
  if ($$props.flyY === void 0 && $$bindings.flyY && flyY !== void 0)
    $$bindings.flyY(flyY);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.shadow === void 0 && $$bindings.shadow && shadow !== void 0)
    $$bindings.shadow(shadow);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.buttonNeutral === void 0 && $$bindings.buttonNeutral && buttonNeutral !== void 0)
    $$bindings.buttonNeutral(buttonNeutral);
  if ($$props.buttonPositive === void 0 && $$bindings.buttonPositive && buttonPositive !== void 0)
    $$bindings.buttonPositive(buttonPositive);
  if ($$props.buttonTextCancel === void 0 && $$bindings.buttonTextCancel && buttonTextCancel !== void 0)
    $$bindings.buttonTextCancel(buttonTextCancel);
  if ($$props.buttonTextConfirm === void 0 && $$bindings.buttonTextConfirm && buttonTextConfirm !== void 0)
    $$bindings.buttonTextConfirm(buttonTextConfirm);
  if ($$props.buttonTextSubmit === void 0 && $$bindings.buttonTextSubmit && buttonTextSubmit !== void 0)
    $$bindings.buttonTextSubmit(buttonTextSubmit);
  if ($$props.regionBackdrop === void 0 && $$bindings.regionBackdrop && regionBackdrop !== void 0)
    $$bindings.regionBackdrop(regionBackdrop);
  if ($$props.regionHeader === void 0 && $$bindings.regionHeader && regionHeader !== void 0)
    $$bindings.regionHeader(regionHeader);
  if ($$props.regionBody === void 0 && $$bindings.regionBody && regionBody !== void 0)
    $$bindings.regionBody(regionBody);
  if ($$props.regionFooter === void 0 && $$bindings.regionFooter && regionFooter !== void 0)
    $$bindings.regionFooter(regionFooter);
  cPosition = $modalStore[0]?.position ?? position;
  classesBackdrop = `${cBackdrop} ${regionBackdrop} ${zIndex} ${$$props.class ?? ""} ${$modalStore[0]?.backdropClasses ?? ""}`;
  classesTransitionLayer = `${cTransitionLayer} ${cPosition ?? ""}`;
  classesModal = `${cModal} ${background} ${width} ${height} ${padding} ${spacing} ${rounded} ${shadow} ${$modalStore[0]?.modalClasses ?? ""}`;
  parent = {
    position,
    // ---
    duration,
    flyOpacity,
    flyX,
    flyY,
    // ---
    background,
    width,
    height,
    padding,
    spacing,
    rounded,
    shadow,
    // ---
    buttonNeutral,
    buttonPositive,
    buttonTextCancel,
    buttonTextConfirm,
    buttonTextSubmit,
    // ---
    regionBackdrop,
    regionHeader,
    regionBody,
    regionFooter,
    // ---
    onClose
  };
  $$unsubscribe_modalStore();
  return `

${$modalStore.length > 0 ? `
		<div class="${"modal-backdrop " + escape(classesBackdrop, true)}" data-testid="modal-backdrop">
			<div class="${"modal-transition " + escape(classesTransitionLayer, true)}">${$modalStore[0].type !== "component" ? `
					<div class="${"modal " + escape(classesModal, true)}" data-testid="modal" role="dialog" aria-modal="true"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}>
						${$modalStore[0]?.title ? `<header class="${"modal-header " + escape(regionHeader, true)}"><!-- HTML_TAG_START -->${$modalStore[0].title}<!-- HTML_TAG_END --></header>` : ``}
						
						${$modalStore[0]?.body ? `<article class="${"modal-body " + escape(regionBody, true)}"><!-- HTML_TAG_START -->${$modalStore[0].body}<!-- HTML_TAG_END --></article>` : ``}
						
						${$modalStore[0]?.image && typeof $modalStore[0]?.image === "string" ? `<img class="${"modal-image " + escape(cModalImage, true)}"${add_attribute("src", $modalStore[0]?.image, 0)} alt="Modal">` : ``}
						
						${$modalStore[0].type === "alert" ? `
							<footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button></footer>` : `${$modalStore[0].type === "confirm" ? `
							<footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button>
								<button type="button" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextConfirm)}</button></footer>` : `${$modalStore[0].type === "prompt" ? `
							<form class="space-y-4"><input${spread(
    [
      { class: "modal-prompt-input input" },
      { name: "prompt" },
      { type: "text" },
      escape_object($modalStore[0].valueAttr)
    ],
    {}
  )}${add_attribute("value", promptValue, 0)}>
								<footer class="${"modal-footer " + escape(regionFooter, true)}"><button type="button" class="${"btn " + escape(buttonNeutral, true)}">${escape(buttonTextCancel)}</button>
									<button type="submit" class="${"btn " + escape(buttonPositive, true)}">${escape(buttonTextSubmit)}</button></footer></form>` : ``}`}`}</div>` : `
					
					<div class="${"modal contents " + escape($modalStore[0]?.modalClasses ?? "", true)}" data-testid="modal-component" role="dialog" aria-modal="true"${add_attribute("aria-label", $modalStore[0].title ?? "", 0)}>${validate_component(currentComponent?.ref || missing_component, "svelte:component").$$render($$result, Object.assign({}, currentComponent?.props, { parent }), {}, {
    default: () => {
      return `${currentComponent?.slot ? `<!-- HTML_TAG_START -->${currentComponent?.slot}<!-- HTML_TAG_END -->` : ``}`;
    }
  })}</div>`}</div></div>` : ``}`;
});
const SidebarHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { href } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<div class="flex w-full"><div class="btn font-bold text-lg mr-auto py-2">${escape(text)}</div></div>`;
});
const SidebarItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let { href } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  return `<div class="flex w-full"><div class="btn ml-4 mr-1 py-1 px-4">${escape(text)}</div></div>`;
});
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $servers, $$unsubscribe_servers;
  $$unsubscribe_servers = subscribe(servers, (value) => $servers = value);
  $$unsubscribe_servers();
  return `<div>${validate_component(SidebarHeader, "SidebarHeader").$$render($$result, { text: "Servers", href: "/" }, {}, {})}
    ${each($servers, (server) => {
    return `${validate_component(SidebarItem, "SidebarItem").$$render(
      $$result,
      {
        text: server.name,
        href: `/${server.name}`
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const close = {
  close: {
    width: 1408,
    height: 1792,
    paths: [
      {
        d: "M1298 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"
      }
    ]
  }
};
const AddServerModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let name = "Your server's name";
  let ip = "localhost";
  let port = "7000";
  let description = "This server is for testing.";
  $$unsubscribe_page();
  return `<div class="bg-surface-900 sm:max-w-xl"><div class="flex flex-row-reverse mx-4"><div class="btn">${validate_component(Icon, "Icon").$$render($$result, { data: close }, {}, {})}</div>
        <h2 class="h-12 pt-2 text-2xl mx-auto pl-6">Create Server</h2></div>
    <div class="flex mx-4 mb-4"><div class="w-2/5"><div class="label mb-2">Name:</div>
            <div class="label mb-2">Ip:</div>
            <div class="label mb-2">Port:</div>
            <div class="label mb-2">Description:</div></div>
        <div class="w-3/5"><input class="input mb-2 pl-1"${add_attribute("value", name, 0)}>
            <input class="input mb-2 pl-1"${add_attribute("value", ip, 0)}>
            <input class="input mb-2 pl-1"${add_attribute("value", port, 0)}>
            <input class="input mb-2 pl-1"${add_attribute("value", description, 0)}></div></div>
    <div class="flex"><div class="mx-auto"><div class="btn mb-2 bg-secondary-500">Create</div>
            <div class="btn mb-2 variant-ghost-warning">Clear</div></div></div></div>`;
});
const instance = [
  // {
  //     name: "Data-Inst-1",
  //     type: "0",
  //     port: 7000,
  //     metricsPort: 1234,
  //     commandsPort: 8000,
  //     processId: 123432,
  //     exitCode: "0",
  //     isRunning: "true"
  // }
];
function createInstances() {
  const { subscribe: subscribe2, update } = writable(instance);
  return {
    subscribe: subscribe2,
    addOne: (instance2) => update((originalList) => {
      if (originalList.find((s) => s.name === instance2.name)) {
        return originalList;
      }
      originalList.push(instance2);
      return originalList;
    }),
    deleteOne: (name) => update((originalList) => {
      const origIndex = originalList.findIndex((s) => s.name === name);
      originalList.splice(origIndex, 1);
      return originalList;
    })
  };
}
const instances = createInstances();
const StopInstanceModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tabSet, $$unsubscribe_tabSet;
  let $servers, $$unsubscribe_servers;
  let $instances, $$unsubscribe_instances;
  $$unsubscribe_tabSet = subscribe(tabSet, (value) => $tabSet = value);
  $$unsubscribe_servers = subscribe(servers, (value) => $servers = value);
  $$unsubscribe_instances = subscribe(instances, (value) => $instances = value);
  $servers[$tabSet];
  let name = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="bg-surface-900 sm:max-w-xl"><div class="flex flex-row-reverse mx-4"><div class="btn">${validate_component(Icon, "Icon").$$render($$result, { data: close }, {}, {})}</div>
        <h2 class="h-12 pt-2 text-2xl mx-auto pl-6">Stop Instance</h2></div>
    <div class="flex mx-4 my-2">${validate_component(RadioGroup, "RadioGroup").$$render($$result, { display: "flex-col mx-auto" }, {}, {
      default: () => {
        return `${each($instances, (instance2) => {
          return `${instance2.isRunning === "true" ? `${validate_component(RadioItem, "RadioItem").$$render(
            $$result,
            {
              value: instance2.name,
              name: "justify",
              group: name
            },
            {
              group: ($$value) => {
                name = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${escape(instance2.name)}`;
              }
            }
          )}` : ``}`;
        })}`;
      }
    })}</div>
    <div class="flex"><div class="btn mx-auto mb-2 bg-warning-600 text-black">Stop</div></div></div>
${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_tabSet();
  $$unsubscribe_servers();
  $$unsubscribe_instances();
  return $$rendered;
});
const chevronDown = {
  "chevron-down": {
    width: 1792,
    height: 1792,
    paths: [
      {
        d: "M1683 808l-742 741q-19 19-45 19t-45-19l-742-741q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"
      }
    ]
  }
};
var ServerTypeEnum = /* @__PURE__ */ ((ServerTypeEnum2) => {
  ServerTypeEnum2["Data"] = "Data";
  ServerTypeEnum2["User"] = "User";
  ServerTypeEnum2["Community"] = "Community";
  return ServerTypeEnum2;
})(ServerTypeEnum || {});
const AddInstanceModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tabSet, $$unsubscribe_tabSet;
  let $servers, $$unsubscribe_servers;
  $$unsubscribe_tabSet = subscribe(tabSet, (value) => $tabSet = value);
  $$unsubscribe_servers = subscribe(servers, (value) => $servers = value);
  const server = $servers[$tabSet];
  let name = "";
  let type = "";
  let port = 7e3;
  let metricsPort = 1234;
  let commandsPort = 8e3;
  if ($$props.server === void 0 && $$bindings.server && server !== void 0)
    $$bindings.server(server);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="bg-surface-900 sm:max-w-xl"><div class="flex flex-row-reverse mx-4"><div class="btn">${validate_component(Icon, "Icon").$$render($$result, { data: close }, {}, {})}</div>
        <h2 class="h-12 pt-2 text-2xl mx-auto pl-6">Create Instance</h2></div>
    <div class="flex mx-4 mb-4"><div class="w-2/5"><div class="label mb-2">Name:</div>
            <div class="label mb-2">Type:</div>
            <div class="label mb-2">Port:</div>
            <div class="label mb-2">Metrics Port:</div>
            <div class="label mb-2">Commands Port:</div></div>
        <div class="w-3/5"><input class="input mb-2 pl-1"${add_attribute("value", name, 0)}>
            
            
            <button class="btn bg-surface-700 pl-1 h-6 w-full mb-2 justify-between"><span class="capitalize">${escape(type ?? "Select")}</span>
                <span>${validate_component(Icon, "Icon").$$render($$result, { data: chevronDown }, {}, {})}</span></button>
					
            <input class="input mb-2 pl-1"${add_attribute("value", port, 0)}>
            <input class="input mb-2 pl-1"${add_attribute("value", metricsPort, 0)}>
            <input class="input mb-2 pl-1"${add_attribute("value", commandsPort, 0)}></div></div>
    <div class="flex"><div class="mx-auto"><div class="btn mb-2 bg-secondary-500">Create</div>
            <div class="btn mb-2 variant-ghost-warning">Clear</div></div></div></div>

<div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">${validate_component(ListBox, "ListBox").$$render($$result, { rounded: "rounded-none" }, {}, {
      default: () => {
        return `${validate_component(ListBoxItem, "ListBoxItem").$$render(
          $$result,
          {
            name: "medium",
            value: ServerTypeEnum.Data,
            group: type
          },
          {
            group: ($$value) => {
              type = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Data`;
            }
          }
        )}
		${validate_component(ListBoxItem, "ListBoxItem").$$render(
          $$result,
          {
            name: "medium",
            value: ServerTypeEnum.User,
            group: type
          },
          {
            group: ($$value) => {
              type = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `User`;
            }
          }
        )}
		${validate_component(ListBoxItem, "ListBoxItem").$$render(
          $$result,
          {
            name: "medium",
            value: ServerTypeEnum.Community,
            group: type
          },
          {
            group: ($$value) => {
              type = $$value;
              $$settled = false;
            }
          },
          {
            default: () => {
              return `Community`;
            }
          }
        )}`;
      }
    })}
	<div class="arrow bg-surface-100-800-token"></div></div>
${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_tabSet();
  $$unsubscribe_servers();
  return $$rendered;
});
const StartInstanceModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tabSet, $$unsubscribe_tabSet;
  let $servers, $$unsubscribe_servers;
  let $instances, $$unsubscribe_instances;
  $$unsubscribe_tabSet = subscribe(tabSet, (value) => $tabSet = value);
  $$unsubscribe_servers = subscribe(servers, (value) => $servers = value);
  $$unsubscribe_instances = subscribe(instances, (value) => $instances = value);
  $servers[$tabSet];
  let name = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="bg-surface-900 sm:max-w-xl"><div class="flex flex-row-reverse mx-4"><div class="btn">${validate_component(Icon, "Icon").$$render($$result, { data: close }, {}, {})}</div>
        <h2 class="h-12 pt-2 text-2xl mx-auto pl-6">Start Instance</h2></div>
    <div class="flex mx-4 my-2">${validate_component(RadioGroup, "RadioGroup").$$render($$result, { display: "flex-col mx-auto" }, {}, {
      default: () => {
        return `${each($instances, (instance2) => {
          return `${instance2.isRunning === "false" ? `${validate_component(RadioItem, "RadioItem").$$render(
            $$result,
            {
              value: instance2.name,
              name: "justify",
              group: name
            },
            {
              group: ($$value) => {
                name = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${escape(instance2.name)}`;
              }
            }
          )}` : ``}`;
        })}`;
      }
    })}</div>
    <div class="flex"><div class="btn mx-auto mb-2 bg-success-700">Start</div></div></div>
${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_tabSet();
  $$unsubscribe_servers();
  $$unsubscribe_instances();
  return $$rendered;
});
const DeleteInstanceModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $tabSet, $$unsubscribe_tabSet;
  let $servers, $$unsubscribe_servers;
  let $instances, $$unsubscribe_instances;
  $$unsubscribe_tabSet = subscribe(tabSet, (value) => $tabSet = value);
  $$unsubscribe_servers = subscribe(servers, (value) => $servers = value);
  $$unsubscribe_instances = subscribe(instances, (value) => $instances = value);
  $servers[$tabSet];
  let name = "";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="bg-surface-900 sm:max-w-xl"><div class="flex flex-row-reverse mx-4"><div class="btn">${validate_component(Icon, "Icon").$$render($$result, { data: close }, {}, {})}</div>
        <h2 class="h-12 pt-2 text-2xl mx-auto pl-6">Delete Instance</h2></div>
    <div class="flex mx-4 mt-2 mb-4">${validate_component(RadioGroup, "RadioGroup").$$render($$result, { display: "flex-col mx-auto" }, {}, {
      default: () => {
        return `${each($instances, (instance2) => {
          return `${validate_component(RadioItem, "RadioItem").$$render(
            $$result,
            {
              value: instance2.name,
              name: "justify",
              group: name
            },
            {
              group: ($$value) => {
                name = $$value;
                $$settled = false;
              }
            },
            {
              default: () => {
                return `${escape(instance2.name)}`;
              }
            }
          )}`;
        })}`;
      }
    })}</div>
    
    <div class="flex"><div class="btn mx-auto mb-4 bg-error-500">Delete</div></div></div>
${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}`;
  } while (!$$settled);
  $$unsubscribe_tabSet();
  $$unsubscribe_servers();
  $$unsubscribe_instances();
  return $$rendered;
});
const ModalComponentRegistry = {
  addServerModal: { ref: AddServerModal },
  createInstanceModal: { ref: AddInstanceModal },
  stopInstanceModal: { ref: StopInstanceModal },
  startInstanceModal: { ref: StartInstanceModal },
  deleteInstanceModal: { ref: DeleteInstanceModal }
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  storePopup.set({
    computePosition,
    autoUpdate,
    offset,
    shift,
    flip,
    arrow
  });
  let { data } = $$props;
  for (let item in data) {
    servers.addOne(data[item]);
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `
${validate_component(AppShell, "AppShell").$$render($$result, {}, {}, {
    sidebarLeft: () => {
      return `<div class="bg-surface-800 h-full">${validate_component(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>
	`;
    },
    header: () => {
      return `
		${validate_component(AppBar, "AppBar").$$render($$result, { background: "bg-surface-600" }, {}, {
        lead: () => {
          return `<strong class="text-xl">Server Management Dashboard</strong>`;
        }
      })}
	`;
    },
    default: () => {
      return `
	${slots.default ? slots.default({}) : ``}`;
    }
  })}
${validate_component(Modal, "Modal").$$render($$result, { components: ModalComponentRegistry }, {}, {})}`;
});
export {
  Layout as default
};

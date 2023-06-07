import { c as create_ssr_component, e as escape, v as validate_component, d as createEventDispatcher, h as each, a as add_attribute } from './index2-b5d428a2.js';
import { I as Icon, T as Toaster } from './Toaster-a5a96028.js';

function tableSourceMapper(source, keys) {
  return source.map((row) => {
    const mappedRow = {};
    keys.forEach((key) => mappedRow[key] = row[key]);
    return mappedRow;
  });
}
function tableSourceValues(source) {
  return source.map((row) => Object.values(row));
}
function tableMapperValues(source, keys) {
  return tableSourceValues(tableSourceMapper(source, keys));
}
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classesBase;
  let classesTable;
  createEventDispatcher();
  let { source } = $$props;
  let { interactive = false } = $$props;
  let { element = "table" } = $$props;
  let { text = "" } = $$props;
  let { color = "" } = $$props;
  let { regionHead = "" } = $$props;
  let { regionHeadCell = "" } = $$props;
  let { regionBody = "" } = $$props;
  let { regionCell = "" } = $$props;
  let { regionFoot = "" } = $$props;
  let { regionFootCell = "" } = $$props;
  if ($$props.source === void 0 && $$bindings.source && source !== void 0)
    $$bindings.source(source);
  if ($$props.interactive === void 0 && $$bindings.interactive && interactive !== void 0)
    $$bindings.interactive(interactive);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.regionHead === void 0 && $$bindings.regionHead && regionHead !== void 0)
    $$bindings.regionHead(regionHead);
  if ($$props.regionHeadCell === void 0 && $$bindings.regionHeadCell && regionHeadCell !== void 0)
    $$bindings.regionHeadCell(regionHeadCell);
  if ($$props.regionBody === void 0 && $$bindings.regionBody && regionBody !== void 0)
    $$bindings.regionBody(regionBody);
  if ($$props.regionCell === void 0 && $$bindings.regionCell && regionCell !== void 0)
    $$bindings.regionCell(regionCell);
  if ($$props.regionFoot === void 0 && $$bindings.regionFoot && regionFoot !== void 0)
    $$bindings.regionFoot(regionFoot);
  if ($$props.regionFootCell === void 0 && $$bindings.regionFootCell && regionFootCell !== void 0)
    $$bindings.regionFootCell(regionFootCell);
  classesBase = `${$$props.class || ""}`;
  classesTable = `${element} ${text} ${color}`;
  return `<div class="${"table-container " + escape(classesBase, true)}">
	
	<table class="${[escape(classesTable, true), interactive ? "table-interactive" : ""].join(" ").trim()}" role="grid">
		
		<thead class="${"table-head " + escape(regionHead, true)}"><tr>${each(source.head, (heading) => {
    return `<th${add_attribute("class", regionHeadCell, 0)}><!-- HTML_TAG_START -->${heading}<!-- HTML_TAG_END --></th>`;
  })}</tr></thead>
		
		<tbody class="${"table-body " + escape(regionBody, true)}">${each(source.body, (row, rowIndex) => {
    return `
				
				<tr${add_attribute("aria-rowindex", rowIndex + 1, 0)}>${each(row, (cell, cellIndex) => {
      return `
						
						<td${add_attribute("class", regionCell, 0)} role="gridcell"${add_attribute("aria-colindex", cellIndex + 1, 0)}${add_attribute("tabindex", cellIndex === 0 ? 0 : -1, 0)}><!-- HTML_TAG_START -->${cell ? cell : "-"}<!-- HTML_TAG_END -->
						</td>`;
    })}
				</tr>`;
  })}</tbody>
		
		${source.foot ? `<tfoot class="${"table-foot " + escape(regionFoot, true)}"><tr>${each(source.foot, (cell) => {
    return `<td${add_attribute("class", regionFootCell, 0)}><!-- HTML_TAG_START -->${cell}<!-- HTML_TAG_END --></td>`;
  })}</tr></tfoot>` : ``}</table></div>`;
});
const refresh = {
  refresh: {
    width: 1536,
    height: 1792,
    paths: [
      {
        d: "M1511 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zM1536 256v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"
      }
    ]
  }
};
const ServerInfoPanel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let loadingClasses;
  const TableHeaders = [
    "Name",
    "Type",
    "Running",
    "Exit Code",
    "Metrics Port",
    "Commands Port",
    "Process ID"
  ];
  const TableValues = [
    "name",
    "type",
    "isRunning",
    "exitCode",
    "metricsPort",
    "commandsPort",
    "processId"
  ];
  let { server } = $$props;
  let instancesList = [];
  let tableSimple = {
    head: TableHeaders,
    body: tableMapperValues(instancesList, TableValues)
  };
  if ($$props.server === void 0 && $$bindings.server && server !== void 0)
    $$bindings.server(server);
  loadingClasses = instancesList === null ? "" : "animate-pulse";
  return `<div class="p-2"><div class="font-bold ml-2">${escape(server.name)}</div>
    <div class="ml-2">IP: ${escape(server.ip)}</div>
    <div class="ml-2">Port: ${escape(server.port)}</div>
    <div class="ml-2">Description: ${escape(server.description)}</div>
    <div class="flex relative"><h2 class="m-2">Instances</h2>
        <div class="btn absolute mr-2 right-0 border">${validate_component(Icon, "Icon").$$render($$result, { data: refresh }, {}, {})}</div></div>
    ${instancesList && instancesList.length > 0 ? `<div class="mx-2">${validate_component(Table, "Table").$$render($$result, { source: tableSimple }, {}, {})}</div>` : `<div class="mx-2"><div class="${"placeholder h-20 " + escape(loadingClasses, true)}"></div>
                <div><div class="${"flex placeholder h-14 w-full " + escape(loadingClasses, true)}"><div class="${"placeholder w-1/7 h-24 " + escape(loadingClasses, true)}"></div>
                        <div class="${"placeholder w-1/7 " + escape(loadingClasses, true)}"></div>
                        <div class="${"placeholder w-1/7 " + escape(loadingClasses, true)}"></div>
                        <div class="${"placeholder w-1/7 " + escape(loadingClasses, true)}"></div>
                        <div class="${"placeholder w-1/7 " + escape(loadingClasses, true)}"></div>
                        <div class="${"placeholder w-1/7 " + escape(loadingClasses, true)}"></div>
                        <div class="${"placeholder w-1/7 " + escape(loadingClasses, true)}"></div></div></div></div>`}</div>
<div class="flex"><div class="mx-auto w-40 flex flex-wrap mx-0 w-full"><div class="btn w-36 mb-2 mx-auto bg-secondary-500">Create Instance
        </div>
        <div class="btn w-36 mb-2 mx-auto bg-success-700">Start Instance
        </div>
        <div class="btn w-36 mb-2 mx-auto bg-warning-600 text-black">Stop Instance
        </div>
        <div class="btn w-36 mb-2 mx-auto bg-error-500">Delete Instance
        </div></div></div>
${validate_component(Toaster, "Toaster").$$render($$result, {}, {}, {})}`;
});

export { ServerInfoPanel as S };
//# sourceMappingURL=ServerInfoPanel-0de7ae2e.js.map

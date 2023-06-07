const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/SpaceGrotesk.ttf"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.379f6f8d.js","app":"_app/immutable/entry/app.9c73589c.js","imports":["_app/immutable/entry/start.379f6f8d.js","_app/immutable/chunks/index.426091fe.js","_app/immutable/chunks/singletons.4db9a175.js","_app/immutable/entry/app.9c73589c.js","_app/immutable/chunks/index.426091fe.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-19f76e5d.js'),
			() => import('./chunks/1-53b8cef8.js'),
			() => import('./chunks/2-d22b6d43.js'),
			() => import('./chunks/3-2eea7bbc.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/server/add",
				pattern: /^\/api\/server\/add\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-bd647f17.js')
			},
			{
				id: "/api/server/delete",
				pattern: /^\/api\/server\/delete\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-43dc784a.js')
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map

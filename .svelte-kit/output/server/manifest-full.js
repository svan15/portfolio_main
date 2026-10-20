export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "portfolio_main/_app",
	assets: new Set(["images/profile/photo.jpg","images/projects/ai-job-helper.svg","images/projects/echoes/echoes-create-diary.png","images/projects/echoes/echoes-created-diary.png","images/projects/echoes/echoes-created-memory.png","images/projects/echoes/echoes-dashboard.png","images/projects/echoes/echoes-inside-diary.png","images/projects/echoes/echoes-inside-memory.png","images/projects/echoes/echoes-login.png","images/projects/echoes/echoes-milestone.png","images/projects/echoes/echoes-shared-photos.png","images/projects/echoes.svg","images/projects/golden-anniversary.svg","images/projects/invitation/Anniversary-details.png","images/projects/invitation/Anniversary-home.png","images/projects/invitation/Anniversary-invitation.png","images/projects/invitation/Anniversary-letter.png","images/projects/invitation/Anniversary-photogallery.png","images/projects/invitation/Anniversary-rsvp.png","images/projects/local-living/localliving-mandaluyong.png","images/projects/local-living/localliving-tuguegarao.png","images/projects/local-living/localliving-tumauini.png","images/projects/vavabroom/vavaBroom-dashboard.png","images/projects/vavabroom/vavaBroom-genre.png","images/projects/vavabroom/vavaBroom-movies.png","images/projects/vavabroom/vavaBroom-series.png","images/projects/vavabroom/vavaBroom-top10.png","profile-placeholder.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.Bxbu26Pk.js",app:"_app/immutable/entry/app.B88YKb4d.js",imports:["_app/immutable/entry/start.Bxbu26Pk.js","_app/immutable/chunks/D424SJjk.js","_app/immutable/chunks/CTpQ-7cu.js","_app/immutable/chunks/B4GK76TG.js","_app/immutable/chunks/-UyI9lYi.js","_app/immutable/chunks/DEmapEf2.js","_app/immutable/entry/app.B88YKb4d.js","_app/immutable/chunks/CTpQ-7cu.js","_app/immutable/chunks/DgK_E3yP.js","_app/immutable/chunks/_shepvVY.js","_app/immutable/chunks/CJhnDUdm.js","_app/immutable/chunks/DcLF7tsi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();


// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/projects" | "/projects/[slug]";
		RouteParams(): {
			"/projects/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string | undefined };
			"/projects": { slug?: string | undefined };
			"/projects/[slug]": { slug: string }
		};
		Pathname(): "/" | "/projects/" | `/projects/${string}` & {} | `/projects/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/images/profile/photo.jpg" | "/images/projects/ai-job-helper.svg" | "/images/projects/echoes/echoes-create-diary.png" | "/images/projects/echoes/echoes-created-diary.png" | "/images/projects/echoes/echoes-created-memory.png" | "/images/projects/echoes/echoes-dashboard.png" | "/images/projects/echoes/echoes-inside-diary.png" | "/images/projects/echoes/echoes-inside-memory.png" | "/images/projects/echoes/echoes-login.png" | "/images/projects/echoes/echoes-milestone.png" | "/images/projects/echoes/echoes-shared-photos.png" | "/images/projects/echoes.svg" | "/images/projects/golden-anniversary.svg" | "/images/projects/invitation/Anniversary-details.png" | "/images/projects/invitation/Anniversary-home.png" | "/images/projects/invitation/Anniversary-invitation.png" | "/images/projects/invitation/Anniversary-letter.png" | "/images/projects/invitation/Anniversary-photogallery.png" | "/images/projects/invitation/Anniversary-rsvp.png" | "/images/projects/local-living/localliving-mandaluyong.png" | "/images/projects/local-living/localliving-tuguegarao.png" | "/images/projects/local-living/localliving-tumauini.png" | "/images/projects/vavabroom/vavaBroom-dashboard.png" | "/images/projects/vavabroom/vavaBroom-genre.png" | "/images/projects/vavabroom/vavaBroom-movies.png" | "/images/projects/vavabroom/vavaBroom-series.png" | "/images/projects/vavabroom/vavaBroom-top10.png" | "/profile-placeholder.svg" | string & {};
	}
}
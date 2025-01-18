declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NEXT_PUBLIC_CV_PATH: string;

			NEXT_PUBLIC_IMAGE_HOST: string;

			NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY: string;
		}
	}
}

export {};
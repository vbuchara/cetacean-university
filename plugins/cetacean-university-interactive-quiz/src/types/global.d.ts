declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
            GOOGLE_MAPS_API_KEY: string;
        }
    }
}

export {};
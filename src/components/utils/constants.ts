const MAIN_SITE_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN_WEBSITE!;
const IS_DES = process.env.ENVIRONMENT === "development";

export const MAIN_SITE_URL = IS_DES
    ? `http://${MAIN_SITE_DOMAIN}`
    : `https://${MAIN_SITE_DOMAIN}`;

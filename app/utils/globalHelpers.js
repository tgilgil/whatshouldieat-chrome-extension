/* global window */

// When running in a browser extension, the hostname does not contain any dots (eg whatshouldieat.xyz)
export const isWebVersion = () => window.location.hostname.includes('.');

export const isBrowserExtension = () => !isWebVersion();


import { toHalfWidth } from "./search-utils.mjs";

/**
 * @type {Object}
 */
const licensePreset = {
    // Do not edit this item
    // (because it is treated as a constant in the function below)
    ["none"]: {
        enable: false,
        name: 'NONE',
        url: 'http://license.invalid/',
    },

    /**
     * @type {import("@types/config").LicenseConfig}
     */
    ["cc_by_4.0"]: {
        enable: true,
        name: 'CC BY 4.0',
        url: 'https://creativecommons.org/licenses/by/4.0/',
    },
    ["cc_by_sa_4.0"]: {
        enable: true,
        name: 'CC BY-SA 4.0',
        url: 'https://creativecommons.org/licenses/by-sa/4.0/',
    },
    ["cc_by_nd_4.0"]: {
        enable: true,
        name: 'CC BY-ND 4.0',
        url: 'https://creativecommons.org/licenses/by-nd/4.0/',
    },
    ["cc_by_nc_4.0"]: {
        enable: true,
        name: 'CC BY-NC 4.0',
        url: 'https://creativecommons.org/licenses/by-nc/4.0/',
    },
    ["cc_by_nc_sa_4.0"]: {
        enable: true,
        name: 'CC BY-NC-SA 4.0',
        url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
    },
    ["cc_by_nc_nd_4.0"]: {
        enable: true, // Be sure to set to "true".
        name: 'CC BY-NC-ND 4.0',
        url: 'https://creativecommons.org/licenses/by-nc-nd/4.0/',
    },

    // Follow the example above
    // to add the identifier, name and URL of the license you want to use. e.g.,
    //["not_cc_4.0"]: {
    //    enable: true, // Be sure to set to "true".
    //    name: 'Not CC License 4.0',
    //    url: 'http://license.example/',
    //},
}

/**
 * 
 * @param {String | Null} str 
 * @returns {String}
 */
const normalizeTag = (str) => {
    if (!str) return "";

    return toHalfWidth(str).replace(/^(\s|　)+/, "")
                           .replace(/(\-|\s)/g, "_")
                           .replace(/creative commons/i, "cc")
                           .toLowerCase();
}

/**
 * 
 * @param {String | Null} str 
 * @returns {Object}
 */
export const getLicenseData = (str) => {
    /** @type {String} */
    const tag = normalizeTag(str);

    if (tag.length <= 0 || tag == "none") {
        return licensePreset["none"];
    }
    
    if (licensePreset.hasOwnProperty(tag)) {
        return licensePreset[tag];
    } else {
        return licensePreset["none"];
    }
}

/**
 * 
 * @param {String | Null} str 
 * @returns {Boolean}
 */
export const isCreativeCommons = (str) => {
    const _isCreativeCommons = normalizeTag(str).search("cc");

    return (_isCreativeCommons == 0)
}

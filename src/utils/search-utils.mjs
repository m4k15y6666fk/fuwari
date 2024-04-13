/**
 * Convert full-width alphanumeric characters to half-width characters.
 * Converts alphanumeric symbols in the input value to half-width characters and returns them.
 * 
 * @param {string} - Input value
 * @returns {string} - String converted to half-width characters.
*/
export const toHalfWidth = (words) => {
    // Convert full-width alphanumeric characters to half-width characters.
    const half_width_string = words.replace(/[！-～]/g, (s) => {
            // Shifting character code
            return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    });

    // Conversion of characters not supported by character code shift
    return half_width_string.replace(/”/g, "\"")
                            .replace(/’/g, "'")
                            .replace(/‘/g, "`")
                            .replace(/￥/g, "\\")
                            .replace(/　/g, " ")
                            .replace(/〜/g, "~");
}

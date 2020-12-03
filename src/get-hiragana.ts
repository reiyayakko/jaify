
import { NORMAL_TABLE, VOWEL_TABLE } from "./table";

/**
 *
 * @param romajiChar
 */
export const getHiragana = (romajiChar: string): string => {
    /** vowel */
    const last = romajiChar[romajiChar.length - 1];
    /** -1 | 0 | 1 | 2 | 3 | 4 */
    const vowelIdx = "aiueo".indexOf(last);

    if(vowelIdx === -1) {
        throw new Error("vowel not found.");
    }
    
    if(romajiChar.length === 1) {
        return VOWEL_TABLE[vowelIdx];
    }

    const first = romajiChar[0];

    if(first in NORMAL_TABLE) {
        const table: string = NORMAL_TABLE[first];

        if(romajiChar.length === 2) {
            return table[vowelIdx];
        }
        if(romajiChar.length === 3) {
            const center = romajiChar[1];
            switch(center) {
            case first: return "っ" + table[vowelIdx];
            case "y": return table[1] + NORMAL_TABLE.y[vowelIdx];
            case "s": return table[2] + NORMAL_TABLE.y[vowelIdx];
            case "h": return table[3] + NORMAL_TABLE.y[vowelIdx];
            }
        }
    }
};

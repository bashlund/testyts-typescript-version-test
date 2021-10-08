export function isFunky(band: string): [funkyOrNot: boolean, trending: string] {
    if (band === "ABBA") {
        return [true, "yes"];
    }
    else {
        return [false, "naah"];
    }
}

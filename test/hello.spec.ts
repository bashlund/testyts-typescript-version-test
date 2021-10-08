import { expect, TestSuite, Test, XTest, TestCase, BeforeAll } from 'testyts';

import {isFunky} from "../src/hello";

@TestSuite()
export class HelloSpec {

    @Test()
    public main() {
        const funkyScore1 = isFunky("Scatman");
        expect.toBeFalse(funkyScore1[0]);

        const funkyScore2 = isFunky("ABBA");
        expect.toBeTrue(funkyScore2[0]);
    }
}

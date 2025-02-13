// SPDX-FileCopyrightText: 2023 Open Pioneer project (https://github.com/open-pioneer)
// SPDX-FileCopyrightText: 2025 Briefkastenkarte project (https://github.com/briefkastenkarte-de)
// SPDX-License-Identifier: Apache-2.0
import { it, expect } from "vitest";
import { GreeterImpl } from "./GreeterImpl";

it("greets with expected message", () => {
    const greeter = new GreeterImpl();
    expect(greeter.greet()).toMatchInlineSnapshot('"Hello from Greeter"');
});

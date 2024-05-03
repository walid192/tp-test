import { describe, expect, test } from "vitest";
import { fetchRandomUser } from "../src/asycnExc";

describe("Test de la fonction fetchRandomUser", () => {

    test("Test 1: fetchRandomUser retourne une resultat", async () => {
        const user = await fetchRandomUser();
        expect(user).toBeDefined();
    });

    test("Test 2: fetchRandomUser retourne un objet", async () => {
        const user = await fetchRandomUser();
        expect(user).toBeInstanceOf(Object);
    });

    test("Test 3: fetchRandomUser retourne un objet avec des propriétés", async () => {
        const user = await fetchRandomUser();
        expect(user).toHaveProperty

});
});
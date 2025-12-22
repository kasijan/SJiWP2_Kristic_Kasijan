/* funk za citanje broja */
function val(selector) {
    return parseFloat(document.querySelector(selector).value);
}

/* za ispis rezultata */
function set(selector, value) {
    document.querySelector(selector).textContent =
        isFinite(value) ? value.toFixed(4) : "—";
}

/* ohmov zakon*/
document.querySelector(".ohm-calc").addEventListener("click", () => {
    const R = val(".ohm-r");
    const U = val(".ohm-u");
    set(".ohm-i", U / R);
});

/* djelilo napona */
document.querySelector(".divider-calc").addEventListener("click", () => {
    const R1 = val(".divider-r1");
    const R2 = val(".divider-r2");
    const Uul = val(".divider-uul");
    set(".divider-uizl", Uul * R2 / (R1 + R2));
});

/* serijski otpornici */
document.querySelector(".series-r-calc").addEventListener("click", () => {
    set(".series-ruk", val(".series-r1") + val(".series-r2"));
});

/* paralelni otpornici */
document.querySelector(".parallel-r-calc").addEventListener("click", () => {
    const R1 = val(".parallel-r1");
    const R2 = val(".parallel-r2");
    set(".parallel-ruk", 1 / (1 / R1 + 1 / R2));
});
/* serijske zavojnice */
document.querySelector(".series-l-calc").addEventListener("click", () => {
    set(".series-luk", val(".series-l1") + val(".series-l2"));
});

/* paralelne zavojnice */
document.querySelector(".parallel-l-calc").addEventListener("click", () => {
    const L1 = val(".parallel-l1");
    const L2 = val(".parallel-l2");
    set(".parallel-luk", 1 / (1 / L1 + 1 / L2));
});

/* serijski kondenzator */
document.querySelector(".series-c-calc").addEventListener("click", () => {
    const C1 = val(".series-c1");
    const C2 = val(".series-c2");
    set(".series-cuk", 1 / (1 / C1 + 1 / C2));
});

/* paralelni kondenzator */
document.querySelector(".parallel-c-calc").addEventListener("click", () => {
    set(".parallel-cuk", val(".parallel-c1") + val(".parallel-c2"));
});

/* induktivitet zavojnice */
document.querySelector(".coil-calc").addEventListener("click", () => {
    const mu0 = 4 * Math.PI * 1e-7;
    const N = val(".coil-n");
    const S = val(".coil-s") * 1e-4; 
    const l = val(".coil-l") * 1e-2; 

    set(".coil-l-result", mu0 * N * N * S / l);
});

/* induktivni otpor */
document.querySelector(".inductive-x-calc").addEventListener("click", () => {
    const f = val(".inductive-f");
    const L = val(".inductive-l");
    set(".inductive-xl", 2 * Math.PI * f * L);
});

/* kapacitivni otpor */
document.querySelector(".capacitive-x-calc").addEventListener("click", () => {
    const f = val(".capacitive-f");
    const C = val(".capacitive-c");
    set(".capacitive-xc", 1 / (2 * Math.PI * f * C));



    
});


function clearAll() {
    document.querySelectorAll("input").forEach(input => input.value = "");
    document.querySelectorAll(".result").forEach(r => r.textContent = "");
}





function error(selector) {
    document.querySelector(selector).textContent = "Unesi sve vrijednosti";
}

function valid(...values) {
    return values.every(v => !isNaN(v));
}

/* error za ohmov zakon */
document.querySelector(".ohm-calc").addEventListener("click", () => {
    const R = val(".ohm-r");
    const U = val(".ohm-u");

    if (!valid(R, U)) return error(".ohm-i");
    set(".ohm-i", U / R);
});

/* error za djelilo napona */
document.querySelector(".divider-calc").addEventListener("click", () => {
    const R1 = val(".divider-r1");
    const R2 = val(".divider-r2");
    const Uul = val(".divider-uul");

    if (!valid(R1, R2, Uul)) return error(".divider-uizl");
    set(".divider-uizl", Uul * R2 / (R1 + R2));
});

/* error za serijske otpornike */
document.querySelector(".series-r-calc").addEventListener("click", () => {
    const R1 = val(".series-r1");
    const R2 = val(".series-r2");

    if (!valid(R1, R2)) return error(".series-ruk");
    set(".series-ruk", R1 + R2);
});

/* error za paralelne otpornike */
document.querySelector(".parallel-r-calc").addEventListener("click", () => {
    const R1 = val(".parallel-r1");
    const R2 = val(".parallel-r2");

    if (!valid(R1, R2)) return error(".parallel-ruk");
    set(".parallel-ruk", 1 / (1 / R1 + 1 / R2));
});

/* error za serijske zavojnice */
document.querySelector(".series-l-calc").addEventListener("click", () => {
    const L1 = val(".series-l1");
    const L2 = val(".series-l2");

    if (!valid(L1, L2)) return error(".series-luk");
    set(".series-luk", L1 + L2);
});

/* error za paralelne zavojnice */
document.querySelector(".parallel-l-calc").addEventListener("click", () => {
    const L1 = val(".parallel-l1");
    const L2 = val(".parallel-l2");

    if (!valid(L1, L2)) return error(".parallel-luk");
    set(".parallel-luk", 1 / (1 / L1 + 1 / L2));
});

/* error za serijski kondenzator */
document.querySelector(".series-c-calc").addEventListener("click", () => {
    const C1 = val(".series-c1");
    const C2 = val(".series-c2");

    if (!valid(C1, C2)) return error(".series-cuk");
    set(".series-cuk", 1 / (1 / C1 + 1 / C2));
});

/* error za paralelni kondenzator */
document.querySelector(".parallel-c-calc").addEventListener("click", () => {
    const C1 = val(".parallel-c1");
    const C2 = val(".parallel-c2");

    if (!valid(C1, C2)) return error(".parallel-cuk");
    set(".parallel-cuk", C1 + C2);
});

/* error za induktivitet zavojnice */
document.querySelector(".coil-calc").addEventListener("click", () => {
    const mu0 = 4 * Math.PI * 1e-7;
    const N = val(".coil-n");
    const S = val(".coil-s") * 1e-4; 
    const l = val(".coil-l") * 1e-2;

    if (!valid(N, S, l)) return error(".coil-l-result");
    set(".coil-l-result", mu0 * N * N * S / l);
});

/* error za induktivni otpor */
document.querySelector(".inductive-x-calc").addEventListener("click", () => {
    const f = val(".inductive-f");
    const L = val(".inductive-l");

    if (!valid(f, L)) return error(".inductive-xl");
    set(".inductive-xl", 2 * Math.PI * f * L);
});
/* error za kapacitivni otpor */
document.querySelector(".capacitive-x-calc").addEventListener("click", () => {
    const f = val(".capacitive-f");
    const C = val(".capacitive-c");

    if (!valid(f, C)) return error(".capacitive-xc");
    set(".capacitive-xc", 1 / (2 * Math.PI * f * C));
});
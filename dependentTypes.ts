// inspiration: https://www.javiercasas.com/articles/typescript-dependent-types update 2

type TT = "A" | "B" | "C";

type AT = {
  A: string;
  B: number;
  C: "a" | "b";
};

type BT = {
  A: string;
  D: string;
  E: "a" | "b" | "c";
};

type CT = {
  A: string;
  B: string;
  E: "a" | "b";
};

type MT<T extends TT> = T extends "A" ? AT : T extends "B" ? BT : CT;

function typeMe<E extends TT>(myType: E): MT<E>;
function typeMe(myType: TT): AT | BT | CT {
  switch (myType) {
    case "A":
      const res1: MT<typeof myType> = {
        A: "a",
        B: 2,
        C: "a",
      };
      return res1;
    case "B":
      const res2: MT<typeof myType> = {
        A: "a",
        D: "d",
        E: "c",
      };
      return res2;
    case "C":
      const res3: MT<typeof myType> = {
        A: "a",
        B: "2",
        E: "b",
      };
      return res3;
  }
}

console.log(typeMe("B"));

type LookupTable = Array<{ name: string, value: number, comment?: string }>;

enum WaffenTyp {
    Bogen,
    Armbrust,
    Wurfwaffe,
    Schleuder,
    Blasrohr
}

enum Scharfschütze {
    None,
    Scharfschütze,
    Meisterschütze,
}

enum LichtVorteil {
    None,
    Dämmerungssicht,
    Nachtsicht,
    Nachtblind
}

export {
    LookupTable,
    WaffenTyp,
    Scharfschütze,
    LichtVorteil
}
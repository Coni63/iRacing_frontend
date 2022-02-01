export interface IStats {
    racesDone: IValue,
    lapsDone: IValue,
    avgInc: IValue,
    avgIR: IValue,
    avgTT: IValue,
    newRacers: IValue,
    licenseChange: ILicenseMaster,
    awards: IAwardsMaster,
    country: ICountry,
    dist: IDistMaster
}

export interface IValue {
    value: number,
    delta: number,
    total?: number,
}

export interface ILicenseMaster {
    [key: string]: ILicense,
}

export interface ILicense {
    total: number,
    promoted: number,
    demoted: number,
}

export interface IAwardsMaster {
    [key: string]: IAwards,
}

export interface IAwards {
    name: string,
    from: string,
    to: string,
}

export interface IDistMaster {
    [key: string]: IDist,
}

export interface IDist {
    [key: string]: number[],
}

export interface ICountry {
    [key: string]: number;
}

export interface IWeekMaster {
    [key: string]: IWeek[],
    // Dirt_Oval: ,
    // Dirt: IWeek[],
    // Road: IWeek[],
    // Road_Oval: IWeek[]
}

export interface IWeek {
    date: string,
    filename: string 
}
export interface formInputProps {
    inputName: string;
    inputLabel: string;
    inputPlaceholder: string;
}

export const group1FormInputs: formInputProps[] = [
    {
        inputName: 'nominalVoltageOfElement',
        inputLabel: 'Nominal Voltage of Element',
        inputPlaceholder: 'Please enter nominal voltage',
    },
    {
        inputName: 'capacityOfOneElement',
        inputLabel: 'Capacity of One Element (Float)',
        inputPlaceholder: 'Please enter capacity',
    },
    {
        inputName: 'totalNumberOfElements',
        inputLabel: 'Total Number of Elements (Number)',
        inputPlaceholder: 'Please enter total number',
    },
    {
        inputName: 'elementsInEachPack',
        inputLabel: 'Elements in Each Pack (Number)',
        inputPlaceholder:
            'Please enter number of elements in each pack',
    },
    {
        inputName: 'series',
        inputLabel: 'Series (Int)',
        inputPlaceholder: 'Please enter series',
    },
    {
        inputName: 'parallel',
        inputLabel: 'Parallel (Int)',
        inputPlaceholder: 'Please enter parallel',
    },
    {
        inputName: 'voltage',
        inputLabel: 'Voltage (Float)',
        inputPlaceholder: 'Please enter voltage',
    },
];

export const group2FormInputs: formInputProps[] = [
    {
        inputName: 'numberOfBatteryPacks',
        inputLabel: 'Number of Battery Packs (Int)',
        inputPlaceholder: 'Please enter number of battery packs',
    },
];

export const group3FormInputs: formInputProps[] = [
    {
        inputName: 'BMSContinuousCurrent',
        inputLabel: 'BMS Continuous Current (Int)',
        inputPlaceholder: 'Please enter BMS continuous current',
    },
    {
        inputName: 'inverterChargingSpeedA',
        inputLabel: 'Inverter Charging Speed (Int)',
        inputPlaceholder: 'Please enter inverter charging speed',
    },
    {
        inputName: 'numberOfInverters',
        inputLabel: 'Number of Inverters (Int)',
        inputPlaceholder: 'Please enter number of inverters',
    },
];

export const group4FormInputs: formInputProps[] = [
    {
        inputName: 'batteryMinPercentage',
        inputLabel: 'Battery Min Percentage (Float)',
        inputPlaceholder: 'Please enter battery min percentage',
    },
    {
        inputName: 'batteryMaxPercentage',
        inputLabel: 'Battery Max Percentage (Float)',
        inputPlaceholder: 'Please enter battery max percentage',
    },
    {
        inputName: 'totalContinuousPowerOutputKW',
        inputLabel: 'Total Continuous Power Output (KW)',
        inputPlaceholder:
            'Please enter total continuous power output',
    },
];

export const group5FormInputs: formInputProps[] = [
    {
        inputName: 'limitingFactorOfChargingSpeed',
        inputLabel: 'Limiting Factor of Charging Speed',
        inputPlaceholder:
            'Please enter limiting factor of charging speed',
    },
    {
        inputName: 'totalUsableCapacity',
        inputLabel: 'Total Usable Capacity',
        inputPlaceholder: 'Please enter total usable capacity',
    },
    {
        inputName: 'chargingTime',
        inputLabel: 'Charging Time',
        inputPlaceholder: 'Please enter charging time',
    },
];

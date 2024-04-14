export interface formInputProps {
    inputName: string;
    inputLabel: string;
    inputPlaceholder: string;
    value?: string;
}

export const group1FormInputs: formInputProps[] = [
    {
        inputName: 'nominalVoltageOfElement',
        inputLabel: 'Nominal Voltage of Element',
        inputPlaceholder: 'Please enter nominal voltage',
        value: '3.2',
    },
    {
        inputName: 'capacityOfOneElement',
        inputLabel: 'Capacity of One Element (Ah)',
        inputPlaceholder: 'Please enter capacity',
        value: '180',
    },
    {
        inputName: 'totalNumberOfElements',
        inputLabel: 'Total Number of Elements',
        inputPlaceholder: 'Please enter total number',
    },
    {
        inputName: 'elementsInEachPack',
        inputLabel: 'Elements in Each Pack',
        inputPlaceholder:
            'Please enter number of elements in each pack',
    },
    {
        inputName: 'series',
        inputLabel: 'Series',
        inputPlaceholder: 'Please enter series',
    },
    {
        inputName: 'parallel',
        inputLabel: 'Parallel',
        inputPlaceholder: 'Please enter parallel',
    },
    {
        inputName: 'voltage',
        inputLabel: 'Voltage',
        inputPlaceholder: 'Please enter voltage',
    },
];

export const group2FormInputs: formInputProps[] = [
    {
        inputName: 'numberOfBatteryPacks',
        inputLabel: 'Number of Battery Packs',
        inputPlaceholder: 'Please enter number of battery packs',
    },
];

export const group3FormInputs: formInputProps[] = [
    {
        inputName: 'BMSContinuousCurrent',
        inputLabel: 'BMS Continuous Current',
        inputPlaceholder: 'Please enter BMS continuous current',
    },
    {
        inputName: 'inverterChargingSpeedA',
        inputLabel: 'Inverter Charging Speed',
        inputPlaceholder: 'Please enter inverter charging speed',
    },
    {
        inputName: 'numberOfInverters',
        inputLabel: 'Number of Inverters',
        inputPlaceholder: 'Please enter number of inverters',
    },
];

export const group4FormInputs: formInputProps[] = [
    {
        inputName: 'batteryMinPercentage',
        inputLabel: 'Battery Min Percentage',
        inputPlaceholder: 'Please enter battery min percentage',
    },
    {
        inputName: 'batteryMaxPercentage',
        inputLabel: 'Battery Max Percentage',
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
            'The limiting factor of charging speed is here',
    },
    {
        inputName: 'totalUsableCapacity',
        inputLabel: 'Total Usable Capacity',
        inputPlaceholder: 'Here is the total usable capacity',
    },
];

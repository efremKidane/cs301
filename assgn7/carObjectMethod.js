let car = {
    make: honda,
    model: civic,
    year: 2010,
    odometer: 36000,
    serviceCount: 5,
    service= function () { return this.serviceCount; },
    getOdometerReading=function () { return this.odometer; },
    reset= function () { return reset; }
}
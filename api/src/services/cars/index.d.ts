export enum FUEL_TYPE {
  ALCOHOL = 'alcohol',
	ETHANOL = 'ethanol',
	ELECTRIC = 'electric',
	HYBRID = 'hybrid',
	HYDROGEN = 'hydrogen',
	DIESEL = 'diesel'
}

export enum CAMBIO_MODE {
	MANUAL = 'manual',
	AUTO = 'automatic'
}

export type Car = {
	manufacturer:string
	model:string
	description:string

	fuelType:FUEL_TYPE
	cambioMode:CAMBIO_MODE

	maxSpeed:number
	maxPassengers:number
	igniteTime:number
	rentPrice:number
	horsePower:number

	thumbs:string[]
}

export type WeaponCategory = 'all' | 'pistols' | 'rifles' | 'shotguns'

export type Weapon = {
	name: string
	caliber: string
	price: number
	minShots: number
	image: string | null
	description: string
}

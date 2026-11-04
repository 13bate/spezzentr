export type WeaponCategory = 'all' | 'pistols' | 'rifles' | 'shotguns'

export type Weapon = {
	name: string
	minShots: number
	image: string | null
	description: string
}

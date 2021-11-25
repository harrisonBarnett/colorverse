import { writable } from 'svelte/store'

export const primaryColor = writable('#845ec2')
// TODO: change to false before prod
export const showPalettes = writable(false)
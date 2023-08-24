import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'
import { userService } from './user.service.local.js'
// import { userService } from './user.service.js'

const STORAGE_KEY = 'a7c3746f05fb44148003d3f6d11b26e5'
const API_ENDPOINT_URL = `https://api.rawg.io/api/games?API_KEY=${STORAGE_KEY}`

export const gameService = {
	query,
	getById,
	save,
	remove,
	getEmptyGame,
}
window.cs = gameService

async function query(filterBy, sortBy) {
	try {
		const response = await fetch(API_ENDPOINT_URL)
		const games = await response.json()
		return games
	} catch (err) {
		console.log('Cannot load games', err)
		throw err
	}
}

function getById(gameId) {
	return storageService.get(STORAGE_KEY, gameId)
}

async function remove(gameId) {
	await storageService.remove(STORAGE_KEY, gameId)
}

async function save(game) {
	var savedGame
	if (game._id) {
		savedGame = await storageService.put(STORAGE_KEY, game)
	} else {
		// Later, owner is set by the backend
		game.owner = userService.getLoggedinUser()
		savedGame = await storageService.post(STORAGE_KEY, game)
	}
	return savedGame
}

function getEmptyGame() {
	return {
		_id: '',
		title: '',
		price: '',
		owner: {},
		daysToMake: '',
		description: '',
		imgUrls: [''],
		tags: [],
		likedByUsers: [],
		reviews: [
			{
				id: '',
				txt: '',
				rate: '',
				createdAt: '',
				by: {
					_id: 'u102',
					fullname: 'user2',
					imgUrl: '/img/img2.jpg',
					country: '',
				},
			},
		],
	}
}


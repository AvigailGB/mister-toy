import { storageService } from './storage-service.js'
import { utilService } from './util-service.js'

const TOYS_KEY = 'toys'
_createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptytoy,
}

function query() {
  return storageService.query(TOYS_KEY)
}

function getById(toyId) {
  return storageService.get(TOYS_KEY, toyId)
}

function remove(toyId) {
  return storageService.remove(TOYS_KEY, toyId)
}

function save(toy) {
  if (toy.id) return storageService.put(TOYS_KEY, toy)
  return storageService.post(TOYS_KEY, toy)
}

function getEmptytoy() {
  return {
    vendor: '',
    speed: 0,
    price: 0,
  }
}

function _createToys() {
    let toys = utilService.loadFromStorage(toyS_KEY);
    if (!toys || !toys.length) {
        toys = [];
        toys.push(_createToy('Car', 100, ['On wheels']));
        toys.push(_createToy('Andarlamosya', 120, ['Box game']));
        toys.push(_createToy('Bimba', 200, ['Baby', 'Outdoor']));
        toys.push(_createToy('Bike', 500, ['Outdoor']));
        utilService.saveToStorage(toyS_KEY, toys);
    }
    return toys;
}

function _createToy(name, price, labels) {
    const toy = {
        _id: utilService.makeId(),
        name,
        price,
        labels,
        creatAt: Date.now(),
        inStoke: true,
    };
    return toy;
}